const form = document.querySelector('.feedback-form');
const LOCAL_STORAGE_KEY = 'feedback-form-state';

// Об'єкт для зберігання даних форми
let formData = { email: '', message: '' };

// Завантаження збережених даних із локального сховища
function loadFormData() {
  const savedData = localStorage.getItem(LOCAL_STORAGE_KEY);
  if (savedData) {
    formData = JSON.parse(savedData);

    // Заповнення полів форми збереженими даними
    form.email.value = formData.email || '';
    form.message.value = formData.message || '';
  }
}

// Оновлення даних у локальному сховищі
function updateLocalStorage() {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(formData));
}

// Обробник події input
form.addEventListener('input', event => {
  const { name, value } = event.target;

  formData[name] = value.trim(); // Оновлення даних у об'єкті formData
  updateLocalStorage(); // Оновлення локального сховища
});

// Обробник події submit
form.addEventListener('submit', event => {
  event.preventDefault();

  // Перевірка, чи всі поля заповнені
  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }

  console.log('Submitted data:', formData);

  // Очищення локального сховища, форми та об'єкта formData
  localStorage.removeItem(LOCAL_STORAGE_KEY);
  formData = { email: '', message: '' };
  form.reset();
});

// Завантаження даних при завантаженні сторінки
loadFormData();
