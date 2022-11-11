const form = document.querySelector('form');

const STORAGE_KEY = 'formdata';

const formdata = {};

checkingForm();

form.addEventListener('input', onSaveChanges);
form.addEventListener('submit', onSubmitForm);

function onSaveChanges(e) {
  formdata[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formdata));
}

function onSubmitForm(e) {
  e.preventDefault();

  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function checkingForm() {
  const savedMessage = localStorage.getItem(STORAGE_KEY);

  if (savedMessage) {
    const parseSavedMessage = JSON.parse(savedMessage);
    const keys = Object.keys(parseSavedMessage);
    for (const key of keys) {
      const el = document.querySelector(`[name="${key}"]`);

      el.value = parseSavedMessage[key];
    }
  }
}
