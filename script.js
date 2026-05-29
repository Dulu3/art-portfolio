(function () {
  const form = document.querySelector("#survey-form");
  const sectionsContainer = document.querySelector("#survey-sections");
  const submitButton = document.querySelector("#submit-button");
  const status = document.querySelector("#form-status");
  const config = window.SURVEY_CONFIG || {};
  const definition = window.SURVEY_DEFINITION;
  const endpointUrl = config.endpointUrl;

  const messages = {
    valueMissing: "To pole jest wymagane.",
    typeMismatch: "Wpisz poprawny adres e-mail."
  };

  function slug(value) {
    return value
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, "_")
      .replace(/^_|_$/g, "");
  }

  function renderInlineMarkup(text) {
    return text;
  }

  function createField(field) {
    const wrapper = document.createElement("div");
    wrapper.className = "field";

    const label = document.createElement("label");
    label.setAttribute("for", field.id);
    label.innerHTML = renderInlineMarkup(field.label);

    const input = document.createElement("input");
    input.id = field.id;
    input.name = field.id;
    input.type = field.type || "text";
    input.required = Boolean(field.required);

    const error = document.createElement("span");
    error.className = "error";
    error.dataset.errorFor = field.id;

    wrapper.append(label, input, error);
    return wrapper;
  }

  function createQuestion(sectionIndex, questionIndex, question) {
    const id = `s${sectionIndex + 1}_q${questionIndex + 1}`;
    const wrapper = document.createElement("div");
    wrapper.className = "field";

    const label = document.createElement("label");
    label.setAttribute("for", id);
    label.innerHTML = renderInlineMarkup(question);

    const textarea = document.createElement("textarea");
    textarea.id = id;
    textarea.name = id;
    textarea.rows = 3;
    textarea.dataset.question = question.replace(/\*\*/g, "");

    wrapper.append(label, textarea);
    return wrapper;
  }

  function createCheckboxGroup(section) {
    const config = section.checkboxes;
    const fieldset = document.createElement("fieldset");
    fieldset.className = "field checkbox-field";

    const legend = document.createElement("legend");
    legend.textContent = config.label;
    fieldset.append(legend);

    const grid = document.createElement("div");
    grid.className = "checkbox-grid";

    config.options.forEach((option, index) => {
      const id = `${config.id}_${index + 1}`;
      const label = document.createElement("label");
      label.className = "checkbox-option";

      const input = document.createElement("input");
      input.id = id;
      input.name = config.id;
      input.type = "checkbox";
      input.value = option.replace(/\*\*/g, "");

      const span = document.createElement("span");
      span.innerHTML = renderInlineMarkup(option);

      label.append(input, span);
      grid.append(label);
    });

    fieldset.append(grid);

    const otherField = createField({
      id: config.otherId,
      label: config.otherLabel
    });
    fieldset.append(otherField);

    return fieldset;
  }

  function renderForm() {
    if (!definition) {
      setStatus("Brakuje pliku survey-data.js.", "error");
      return;
    }

    const projectSection = document.createElement("section");
    projectSection.className = "form-section";
    projectSection.innerHTML = "<h2>Dane projektu</h2>";
    definition.projectFields.forEach((field) => projectSection.append(createField(field)));
    sectionsContainer.append(projectSection);

    definition.sections.forEach((section, sectionIndex) => {
      const element = document.createElement("section");
      element.className = "form-section";
      element.innerHTML = `<h2>${section.title}</h2>`;

      if (section.note) {
        const note = document.createElement("p");
        note.className = "section-note";
        note.textContent = section.note;
        element.append(note);
      }

      if (section.questions) {
        section.questions.forEach((question, questionIndex) => {
          element.append(createQuestion(sectionIndex, questionIndex, question));
        });
      }

      if (section.checkboxes) {
        element.append(createCheckboxGroup(section));
      }

      sectionsContainer.append(element);
    });
  }

  function setStatus(message, type) {
    status.textContent = message;
    status.className = "status" + (type ? " " + type : "");
  }

  function clearErrors() {
    form.querySelectorAll(".error").forEach((element) => {
      element.textContent = "";
    });
  }

  function showFieldError(field) {
    const error = form.querySelector(`[data-error-for="${field.name}"]`);
    if (!error) return;

    if (field.validity.valueMissing) {
      error.textContent = messages.valueMissing;
      return;
    }

    if (field.validity.typeMismatch) {
      error.textContent = messages.typeMismatch;
      return;
    }

    error.textContent = field.validationMessage;
  }

  function validateForm() {
    clearErrors();

    const fields = Array.from(form.elements).filter((field) => {
      return field.name && typeof field.checkValidity === "function";
    });

    const invalidFields = fields.filter((field) => !field.checkValidity());
    invalidFields.forEach(showFieldError);

    if (invalidFields.length > 0) {
      invalidFields[0].focus();
      setStatus("Uzupełnij wymagane pola.", "error");
      return false;
    }

    return true;
  }

  function collectProject(data) {
    return definition.projectFields.reduce((project, field) => {
      project[field.id] = String(data.get(field.id) || "").trim();
      return project;
    }, {});
  }

  function collectAnswers(data) {
    const answers = {};

    definition.sections.forEach((section, sectionIndex) => {
      const sectionKey = slug(section.title);
      answers[sectionKey] = {
        title: section.title,
        answers: []
      };

      if (section.questions) {
        section.questions.forEach((question, questionIndex) => {
          const id = `s${sectionIndex + 1}_q${questionIndex + 1}`;
          answers[sectionKey].answers.push({
            id,
            question: question.replace(/\*\*/g, ""),
            answer: String(data.get(id) || "").trim()
          });
        });
      }

      if (section.checkboxes) {
        answers[sectionKey].features = data.getAll(section.checkboxes.id);
        answers[sectionKey].other = String(data.get(section.checkboxes.otherId) || "").trim();
      }
    });

    return answers;
  }

  function collectPayload() {
    const data = new FormData(form);

    return {
      project: collectProject(data),
      answers: collectAnswers(data),
      website: data.get("website") || "",
      consent: data.get("consent") === "Tak",
      formToken: config.formToken || "",
      pageUrl: window.location.href,
      submittedAt: new Date().toISOString()
    };
  }

  async function sendPayload(payload) {
    await fetch(endpointUrl, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "text/plain;charset=utf-8"
      },
      body: JSON.stringify(payload)
    });
  }

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    if (!validateForm()) return;

    if (!endpointUrl || endpointUrl.includes("PASTE_GOOGLE_APPS_SCRIPT")) {
      setStatus("Skonfiguruj endpointUrl w pliku config.js.", "error");
      return;
    }

    submitButton.disabled = true;
    setStatus("Wysyłanie kwestionariusza...");

    try {
      await sendPayload(collectPayload());
      form.reset();
      clearErrors();
      setStatus("Dziękujemy. Kwestionariusz został wysłany.", "success");
    } catch (error) {
      setStatus("Nie udało się wysłać formularza. Spróbuj ponownie.", "error");
    } finally {
      submitButton.disabled = false;
    }
  });

  renderForm();
})();
