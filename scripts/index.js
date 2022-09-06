// весь body.page
const page = document.querySelector('.page');
// блок profile
const profileTitle = page.querySelector('.profile__title');
const profileSubtitle = page.querySelector('.profile__subtitle');
const profileEditButton = page.querySelector('.profile__edit-button');
const profileAddButton = page.querySelector('.profile__add-button');
// блок cards
const cardsContainer = page.querySelector('.cards');
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

function closeByClick(evt) {
  if (evt.target.classList.contains('popup_opened')) { closePopup(evt.target) }
}

function closeByEscape(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = page.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
}

function openPopup(popup) {
  popup.classList.add('popup_opened');
  popup.addEventListener('click', closeByClick);
  document.addEventListener('keydown', closeByEscape);
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  popup.removeEventListener('click', closeByClick);
  document.removeEventListener('keydown', closeByEscape);
}

function likeCard(element) {
  element.classList.toggle('card__like-button_active');
}

function deleteCard(element) {
  element.remove();
}

function resetPopupProfileForm() {
  yourNameInput.value = profileTitle.textContent;
  jobInput.value = profileSubtitle.textContent;
}

function resetPopupAddCardForm() {
  popupAddCardForm.reset();
}

function transmissionFromProfileInputs(evt) {
  evt.preventDefault();
  profileTitle.textContent = yourNameInput.value;
  profileSubtitle.textContent = jobInput.value;
  closePopup(popupProfile);
}

function openPopupPicture(templateLink, templateName) {
  openPopup(popupPicture);
  popupPictureImage.src = templateLink
  popupPictureImage.alt = templateName
  popupPictureTitle.textContent = templateName
}

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

initialCards.forEach((item) => {
  cardsContainer.append(createCard(item.link, item.name));
});

function addCard(evt) {
  evt.preventDefault();
  cardsContainer.prepend(createCard(cardLinkInput.value, cardNameInput.value));
  closePopup(popupAddCard);
}

profileEditButton.addEventListener('click', () => {
  resetPopupProfileForm();
  enableValidation(validationConfig);
  openPopup(popupProfile);
});
popupProfileForm.addEventListener('submit', transmissionFromProfileInputs);
popupProfileCloseButton.addEventListener('click', () => { closePopup(popupProfile) });

profileAddButton.addEventListener('click', () => {
  resetPopupAddCardForm();
  enableValidation(validationConfig);
  openPopup(popupAddCard);
});
popupAddCardForm.addEventListener('submit', addCard);
popupAddCardCloseButton.addEventListener('click', () => { closePopup(popupAddCard) });

popupPictureCloseButton.addEventListener('click', () => { closePopup(popupPicture) });