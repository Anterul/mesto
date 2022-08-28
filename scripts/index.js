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
const popupProfileForm = popupProfile.querySelector('.popup__form');
const yourNameInput = popupProfile.querySelector('.popup__input_name_your-name');
const jobInput = popupProfile.querySelector('.popup__input_name_job');
// блок popup_name_add-card
const popupAddCard = page.querySelector('.popup_name_add-card');
const popupAddCardCloseButton = popupAddCard.querySelector('.popup__close-button');
const popupAddCardForm = popupAddCard.querySelector('.popup__form')
const cardNameInput = popupAddCard.querySelector('.popup__input_name_card-name');
const cardLinkInput = popupAddCard.querySelector('.popup__input_name_card-link');
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
function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

// функция, которая добавляет/удаляет класс активного лайка
function likeCard(element) {
  element.classList.toggle('card__like-button_active');
}

// функция, которая удаляет переданный аргумент
function deleteCard(element) {
  element.remove();
}

// функция, которая передаёт строки из input.value в заголовок и подзаголовок блока profile
function transmissionFromProfileInputs(evt) {
  evt.preventDefault();
  profileTitle.textContent = yourNameInput.value;
  profileSubtitle.textContent = jobInput.value;
  closePopup(popupProfile);
}

// функция, которая сбрасывает инпуты
function resetInputs(toFirstInput, toSecondInput, fromOne = '', fromTwo = '') {
  toFirstInput.value = fromOne
  toSecondInput.value = fromTwo
}

// функция, которая передаёт сылку и название картинки клонированной карточки в третий попап
function openPopupPicture(templateLink, templateName) {
  openPopup(popupPicture);
  popupPictureImage.src = templateLink
  popupPictureImage.alt = templateName
  popupPictureTitle.textContent = templateName
}

/* 
функция, которая:
клонирует карточку из template 
аргументы функции передают ссылку и название в src, alt и заголовок карточки
навешивает слушатели с функциями открытия третьего попапа и удаления и лайка самой карточки
возвращает карточку
*/
function createCard(cardLink, cardName) {
  const cardTemplate = templateElement.querySelector('.card').cloneNode(true);
  const cardTemplateImage = cardTemplate.querySelector('.card__image');
  const cardTemplateTitle = cardTemplate.querySelector('.card__title');
  const cardTemplateDeleteButton = cardTemplate.querySelector('.card__delete-button');
  const cardTemplateLikeButton = cardTemplate.querySelector('.card__like-button');

  cardTemplateImage.src = cardLink;
  cardTemplateImage.alt = cardName;
  cardTemplateTitle.textContent = cardName;

  cardTemplateImage.addEventListener('click', () => {
    openPopupPicture(cardTemplateImage.src, cardTemplateTitle.textContent);
  });

  cardTemplateDeleteButton.addEventListener('click', () => { deleteCard(cardTemplate) });

  cardTemplateLikeButton.addEventListener('click', () => { likeCard(cardTemplateLikeButton) });

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
  closePopup(popupAddCard);
}

// первый попап: открыть, сабмит, закрыть
profileEditButton.addEventListener('click', () => {
  resetInputs(yourNameInput, jobInput, profileTitle.textContent, profileSubtitle.textContent);
  openPopup(popupProfile);
});
popupProfileForm.addEventListener('submit', transmissionFromProfileInputs);
popupProfileCloseButton.addEventListener('click', () => { closePopup(popupProfile) });

profileAddButton.addEventListener('click', () => {
  resetInputs(cardNameInput, cardLinkInput);
  openPopup(popupAddCard);
});
popupAddCardForm.addEventListener('submit', addCard);
popupAddCardCloseButton.addEventListener('click', () => { closePopup(popupAddCard) });

popupPictureCloseButton.addEventListener('click', () => { closePopup(popupPicture) });