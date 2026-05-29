const SHEET_NAME = 'Odpowiedzi';

function doPost(e) {
  try {
    const payload = parsePayload_(e);
    validatePayload_(payload);

    const sheet = getSheet_();
    ensureHeader_(sheet);

    const project = payload.project || {};
    const flatAnswers = flattenAnswers_(payload.answers || {});

    sheet.appendRow([
      new Date(),
      project.project_name || '',
      project.contact_person || '',
      project.contact_phone || '',
      project.contact_email || '',
      project.filled_at || '',
      flatAnswers.features.join(', '),
      flatAnswers.otherFeatures,
      JSON.stringify(payload.answers || {}),
      payload.pageUrl || '',
      payload.submittedAt || ''
    ]);

    return jsonResponse_({ ok: true });
  } catch (error) {
    return jsonResponse_({
      ok: false,
      error: error && error.message ? error.message : 'Unknown error'
    });
  }
}

function doGet() {
  return jsonResponse_({
    ok: true,
    message: 'Survey endpoint is running.'
  });
}

function parsePayload_(e) {
  if (!e || !e.postData || !e.postData.contents) {
    throw new Error('Missing request body.');
  }

  return JSON.parse(e.postData.contents);
}

function validatePayload_(payload) {
  if (!payload || typeof payload !== 'object') {
    throw new Error('Invalid payload.');
  }

  if (payload.website) {
    throw new Error('Spam rejected.');
  }

  const expectedToken = PropertiesService.getScriptProperties().getProperty('FORM_TOKEN');
  if (expectedToken && payload.formToken !== expectedToken) {
    throw new Error('Invalid form token.');
  }

  const project = payload.project || {};
  ['project_name', 'contact_person', 'contact_email'].forEach(function (fieldName) {
    if (!project[fieldName]) {
      throw new Error('Missing field: ' + fieldName);
    }
  });

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(project.contact_email))) {
    throw new Error('Invalid email.');
  }

  if (String(project.project_name).length > 160) {
    throw new Error('Project name is too long.');
  }

  if (String(project.contact_person).length > 160) {
    throw new Error('Contact person is too long.');
  }

  if (!payload.answers || typeof payload.answers !== 'object') {
    throw new Error('Missing answers.');
  }

  if (payload.consent !== true) {
    throw new Error('Consent is required.');
  }
}

function flattenAnswers_(answers) {
  const result = {
    features: [],
    otherFeatures: ''
  };

  Object.keys(answers).forEach(function (sectionKey) {
    const section = answers[sectionKey];

    if (section && Array.isArray(section.features)) {
      result.features = result.features.concat(section.features);
    }

    if (section && section.other) {
      result.otherFeatures = section.other;
    }
  });

  return result;
}

function getSheet_() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = spreadsheet.getSheetByName(SHEET_NAME);

  if (!sheet) {
    sheet = spreadsheet.insertSheet(SHEET_NAME);
  }

  return sheet;
}

function ensureHeader_(sheet) {
  if (sheet.getLastRow() > 0) return;

  sheet.appendRow([
    'Data zapisu',
    'Nazwa firmy / projektu',
    'Osoba kontaktowa',
    'Telefon',
    'E-mail',
    'Data wypelnienia',
    'Funkcjonalnosci sklepu',
    'Inne funkcjonalnosci',
    'Odpowiedzi JSON',
    'Adres formularza',
    'Data wyslania z przegladarki'
  ]);
}

function jsonResponse_(data) {
  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}
