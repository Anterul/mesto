const page = document.querySelector('.page');
const profileTitle = page.querySelector('.profile__title');
const profileSubtitle = page.querySelector('.profile__subtitle');
const editButton = page.querySelector('.profile__edit-button');
const cards = page.querySelector('.cards');
const cardDeleteButton = page.querySelector('.card__delete-button');

const popup = page.querySelector('.popup');
const closeButton = page.querySelector('.popup__close-button');
const popupForm = page.querySelector('.popup__form');
const nameInput = page.querySelector('.popup__name-input');
const jobInput = page.querySelector('.popup__job-input');

// функция, которая добавляет класс popup_opened если eго нет и убирает если он есть
function popupOnOff() {
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
editButton.addEventListener('click', popupOnOff);

// при клике на иконку крестика удаляет класс popup_opened
closeButton.addEventListener('click', popupOnOff);

popupForm.addEventListener('submit', saveButtonSubmit);

//массив из задания - убрать карточки из cards
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

/* перебор массива, на каждой итерации передача из !!!!элемента массива в клонированную
из template карточку и добавление изменённой карточки в cards */
initialCards.forEach(item => {
  const template = page.querySelector('.template').content;
  const cardTemplate = template.querySelector('.card').cloneNode(true);
  
  cardTemplate.querySelector('.card__title').textContent = item.name;
  cardTemplate.querySelector('.card__image').src = item.link;
  cardTemplate.querySelector('.card__image').alt = item.name;

  cards.append(cardTemplate);
});



console.log(cardLikeButton);

/*
addButton.addEventListener('click', () => {

  ardTemplate.querySelector('.card__title').textContent = item.name;
  cardTemplate.querySelector('.card__image').src = item.link;
  cardTemplate.querySelector('.card__image').alt = item.name;

  //initialCards.push({name: , link: })
});
*/