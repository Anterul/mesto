let page = document.querySelector('.page');
let profileTitle = page.querySelector('.profile__title');
let profileSubtitle = page.querySelector('.profile__subtitle');
let editButton = page.querySelector('.profile__edit-button');
let popup = page.querySelector('.popup');
let closeButton = page.querySelector('.popup__close-button');
let popupForm = page.querySelector('.popup__form');
let nameInput = page.querySelector('.popup__name-input');
let jobInput = page.querySelector('.popup__job-input');

// функция, которая добавляет класс popup_opened если eго нет и убирает если он есть
function popupToggle() {
  popup.classList.toggle('popup_opened');
}

// функция передаёт данные из input value в заголовок и подзаголовок
function saveButtonSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;
  popupToggle();
}

// при клике на кнопку с карандашом
editButton.addEventListener('click', popupToggle);

// при клике на иконку крестика удаляет класс popup_opened
closeButton.addEventListener('click', popupToggle);

popupForm.addEventListener('submit', saveButtonSubmit);