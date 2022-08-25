//  весь body.page
const page = document.querySelector('.page');
//  блок profile
const profileTitle = page.querySelector('.profile__title');
const profileSubtitle = page.querySelector('.profile__subtitle');
const editButton = page.querySelector('.profile__edit-button');
const addButton = page.querySelector('.profile__add-button');
//  блок cards
const cards = page.querySelector('.cards');
//  блок popup_name_profile
const popupProfile = page.querySelector('.popup_name_profile');
const popupProfileCloseButton = popupProfile.querySelector('.popup__close-button');
const popupProfileForm = popupProfile.querySelector('.popup__form');
const yourNameInput = popupProfile.querySelector('.popup__input_name_your-name');
const jobInput = popupProfile.querySelector('.popup__input_name_job');
//  блок popup_name_add-card
const popupAddCard = page.querySelector('.popup_name_add-card');
const popupAddCardCloseButton = popupAddCard.querySelector('.popup__close-button');
const popupAddCardForm = popupAddCard.querySelector('.popup__form')
const cardNameInput = popupAddCard.querySelector('.popup__input_name_card-name');
const cardLinkInput = popupAddCard.querySelector('.popup__input_name_card-link');
//  блок template
const templateElement = page.querySelector('.template').content;

//  ------------------------------------------ массив из задания и его перебор --------------------------------------------

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

//  перебор массива, на каждой итерации передача из объекта массива в клонированную
//  из template карточку и добавление изменённой карточки в cards 
initialCards.forEach((item) => {
  const cardTemplate = templateElement.querySelector('.card').cloneNode(true);
  cardTemplate.querySelector('.card__title').textContent = item.name;
  cardTemplate.querySelector('.card__image').src = item.link;
  cardTemplate.querySelector('.card__image').alt = item.name;
  cardTemplate.querySelector('.card__like-button').addEventListener('click', cardLikeButton);
  cardTemplate.querySelector('.card__delete-button').addEventListener('click', cardDeleteButton);
  cards.append(cardTemplate); // в cards записывается card на каждой итерации перебора
});

//  ----------------------------------------  функции  ------------------------------------------------------------------

//  функция, которая добавляет класс popup_opened если eго нет и убирает если он есть для первого popup
function popupProfileOnOff() {
  popupProfile.classList.toggle('popup_opened');
}

//  функция, которая передаёт строки из input.value в заголовок и подзаголовок блока profile
function popupProfileSaveButton(evt) {
  evt.preventDefault();
  profileTitle.textContent = yourNameInput.value;
  profileSubtitle.textContent = jobInput.value;
  popupProfileOnOff();
}

//  функция, которая добавляет класс popup_opened если eго нет и убирает если он есть для второго popup
function popupAddCardOnOff() {
  popupAddCard.classList.toggle('popup_opened');
}

//  функция, которая объявляет в переменную ближайшую от клика карточку и удаляет её
function cardDeleteButton(evt) {
  const closestDeleteButton = evt.target.closest('.card');
  closestDeleteButton.remove();
}

//  функция, которая объявляет в переменную ближайшую от клика кнопку лайка и добавляет/удаляет класс
function cardLikeButton(evt) {
  const closestLikeButton = evt.target.closest('.card__like-button');
  closestLikeButton.classList.toggle('card__like-button_active');
}

//  функция, которая клонирует карточку из template, передаёт ей строки из инпутов второго попапа, 
//  навешивает слушатели с функциями удаления и лайка
function addCard(evt) {
  evt.preventDefault();
  const cardTemplate = templateElement.querySelector('.card').cloneNode(true);
  cardTemplate.querySelector('.card__title').textContent = cardNameInput.value;
  cardTemplate.querySelector('.card__image').src = cardLinkInput.value;
  cardTemplate.querySelector('.card__image').alt = cardNameInput.value;
  cardTemplate.querySelector('.card__like-button').addEventListener('click', cardLikeButton);
  cardTemplate.querySelector('.card__delete-button').addEventListener('click', cardDeleteButton);
  cards.prepend(cardTemplate); // в cards записывается клонированная и измененная card 
  cardNameInput.value = "";
  cardLinkInput.value = "";
  popupAddCardOnOff();
}

// -----------------------------------------  слушатели  ------------------------------------------------------------------

// слушатель, при клике по кнопке edit(карандаш) вызывает функцию popupProfileOnOff
editButton.addEventListener('click', popupProfileOnOff);

// слушатель, при клике на closeButton(иконка крестика) вызывает функцию popupProfileOnOff
popupProfileCloseButton.addEventListener('click', popupProfileOnOff);

// слушатель, при клике по кнопке в попапе "Сохранить" вызывает функцию popupProfileSaveButton
popupProfileForm.addEventListener('submit', popupProfileSaveButton);

// слушатель, при клике по кнопке add(плюс) вызывает функцию popupAddCardOnOff
addButton.addEventListener('click', popupAddCardOnOff);

//  // слушатель, при клике на closeButton(иконка крестика) вызывает функцию popupAddCardOnOff
popupAddCardCloseButton.addEventListener('click', popupAddCardOnOff);

// слушатель, при клике по кнопке в попапе "Создать" вызывает функцию popupProfileSaveButton
popupAddCardForm.addEventListener('submit', addCard);