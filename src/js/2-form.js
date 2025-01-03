const form = document.querySelector('.feedback-form');
const LOCAL_STORAGE_KEY = 'feedback-form-state';

let formData = { email: '', message: '' };

function loadFormData() {
  const savedData = localStorage.getItem(LOCAL_STORAGE_KEY);
  if (savedData) {
    formData = JSON.parse(savedData);

    form.email.value = formData.email || '';
    form.message.value = formData.message || '';
  }
}

function updateLocalStorage() {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(formData));
}

form.addEventListener('input', event => {
  const { name, value } = event.target;

  formData[name] = value.trim();
  updateLocalStorage();
});

form.addEventListener('submit', event => {
  event.preventDefault();

  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }

  console.log('Submitted data:', formData);

  localStorage.removeItem(LOCAL_STORAGE_KEY);
  formData = { email: '', message: '' };
  form.reset();
});

loadFormData();
