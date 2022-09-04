// весь body.page
const page = document.querySelector('.page');
// блок profile
const profileTitle = page.querySelector('.profile__title');
const profileSubtitle = page.querySelector('.profile__subtitle');
const profileEditButton = page.querySelector('.profile__edit-button');
const profileAddButton = page.querySelector('.profile__add-button');
// блок cards
const cards = page.querySelector('.cards');
// блок popup_name_profile
const popupProfile = page.querySelector('.popup_name_profile');
const popupProfileCloseButton = popupProfile.querySelector('.popup__close-button');
const popupProfileForm = document.forms.popupFormProfile;
const yourNameInput = popupProfileForm.elements.yourName;
const jobInput = popupProfileForm.elements.job;
const popupProfileSaveButton = popupProfile.querySelector('.popup__save-button');
// блок popup_name_add-card
const popupAddCard = page.querySelector('.popup_name_add-card');
const popupAddCardCloseButton = popupAddCard.querySelector('.popup__close-button');
const popupAddCardForm = document.forms.popupFormAddCard;
const cardNameInput = popupAddCardForm.elements.cardName;
const cardLinkInput = popupAddCardForm.elements.cardLink;
const popupProfileCreateButton = popupAddCard.querySelector('.popup__save-button');
// блок popup_name_picture
const popupPicture = page.querySelector('.popup_name_picture');
const popupPictureCloseButton = popupPicture.querySelector('.popup__close-button');
const popupPictureImage = popupPicture.querySelector('.popup__image');
const popupPictureTitle = popupPicture.querySelector('.popup__title_type_picture');
// контент блока template
const templateElement = page.querySelector('.template').content;

// функция, которая добавляет класс popup_opened аргументу(попапу)
function openPopup(popup) {
  popup.classList.add('popup_opened');
} 

// функция, которая удаляет класс popup_opened у аргумента
function closePopup(evt) {
  if (evt.target.classList.contains('popup__close-button') ||
  evt.target.classList.contains('popup__save-button') ||
  evt.target.classList.contains('popup')) {
    evt.target.closest('.popup').classList.remove('popup_opened');
  }
}

function escapePopup(evt) {
  if (evt.key === 'Escape' && page.querySelector('.popup_opened')) {
    const closestPopup = page.querySelector('.popup_opened');
    closestPopup.classList.remove('popup_opened');
  }
}

// функция, которая добавляет/удаляет класс активного лайка
function likeCard(evt) {
  if (evt.target.classList.contains('card__like-button')) {
    evt.target.classList.toggle('card__like-button_active');
  }
}

// функция, которая удаляет карточку
function deleteCard(evt) {
  if (evt.target.classList.contains('card__delete-button')) {
    evt.target.closest('.card').remove();
  }
}

// функция, которая передаёт строки из input.value в заголовок и подзаголовок блока profile
function transmissionFromProfileInputs(evt) {
  evt.preventDefault(evt);
  profileTitle.textContent = yourNameInput.value;
  profileSubtitle.textContent = jobInput.value;
  closePopup(evt);
}

// функция, которая сбрасывает инпуты
function resetInputs(toFirstInput, toSecondInput, fromOne = '', fromTwo = '') {
  toFirstInput.value = fromOne
  toSecondInput.value = fromTwo
}

// функция, которая передаёт сылку и название картинки клонированной карточки в третий попап
function openPopupPicture(evt) {
  if (evt.target.classList.contains('card__image')) {
    openPopup(popupPicture);
    const closestImage = evt.target.closest('.card__image');
    popupPictureImage.src = closestImage.src
    popupPictureImage.alt = closestImage.alt
    popupPictureTitle.textContent = closestImage.textContent
  }
}

/* 
функция, которая:
клонирует карточку из template 
аргументы функции передают ссылку и название в src, alt и заголовок карточки
возвращает карточку
*/
function createCard(cardLink, cardName) {
  const cardTemplate = templateElement.querySelector('.card').cloneNode(true);
  const cardTemplateImage = cardTemplate.querySelector('.card__image');
  const cardTemplateTitle = cardTemplate.querySelector('.card__title');
  
  cardTemplateImage.src = cardLink;
  cardTemplateImage.alt = cardName;
  cardTemplateTitle.textContent = cardName;

  return cardTemplate;
}

// перебор массива
initialCards.forEach((item) => {
  cards.append(createCard(item.link, item.name));
});

// функция, которая передаёт строки из input.value второго попапа в функцию создания карточки
function addCard(evt) {
  evt.preventDefault();
  cards.prepend(createCard(cardLinkInput.value, cardNameInput.value));
  resetInputs(cardNameInput, cardLinkInput);
  closePopup(evt);
}


// первый попап: открыть, сабмит
profileEditButton.addEventListener('click', () => {
  resetInputs(yourNameInput, jobInput, profileTitle.textContent, profileSubtitle.textContent);
  openPopup(popupProfile);
});
popupProfileForm.addEventListener('submit', (evt) => {
  transmissionFromProfileInputs(evt);
  setSubmitButtonState(popupProfileForm.validity.valid, popupProfileSaveButton);
});

// второй попап
profileAddButton.addEventListener('click', () => {
  resetInputs(cardNameInput, cardLinkInput);
  openPopup(popupAddCard);
});
popupAddCardForm.addEventListener('submit', (evt) => { addCard(evt) });


cards.addEventListener('click', (evt) => {
  deleteCard(evt);
  likeCard(evt);
  openPopupPicture(evt);
});

page.addEventListener('click' , (evt) => { closePopup(evt) });
page.addEventListener('keydown', (evt) => { escapePopup(evt) });

