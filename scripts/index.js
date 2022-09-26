import { Card } from './Card.js';
import { initialCards } from './cards.js';
import { FormValidator } from './FormValidator.js';

const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
}

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
const popupProfileForm = document.forms.popupFormProfile;
const yourNameInput = popupProfileForm.elements.yourName;
const jobInput = popupProfileForm.elements.job;
// блок popup_name_add-card
const popupAddCard = page.querySelector('.popup_name_add-card');
const popupAddCardForm = document.forms.popupFormAddCard;
const cardNameInput = popupAddCardForm.elements.cardName;
const cardLinkInput = popupAddCardForm.elements.cardLink;
// блок popup_name_picture
const popupPicture = page.querySelector('.popup_name_picture');
const popupPictureImage = popupPicture.querySelector('.popup__image');
const popupPictureTitle = popupPicture.querySelector('.popup__title_type_picture');
//
const closeButtons = document.querySelectorAll('.popup__close-button');
//
const formValidators = {}

const enableAllFormValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector))
  formList.forEach((formElement) => {
    const validator = new FormValidator(config, formElement);
    validator.enableValidation();

    const formName = formElement.getAttribute('name');
    formValidators[formName] = validator;
  });
};

enableAllFormValidation(validationConfig);

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
  popup.addEventListener('mousedown', closeByClick);
  document.addEventListener('keydown', closeByEscape);
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  popup.removeEventListener('mousedown', closeByClick);
  document.removeEventListener('keydown', closeByEscape);
}

function fillPopupProfileForm() {
  yourNameInput.value = profileTitle.textContent;
  jobInput.value = profileSubtitle.textContent;
}

function resetPopupAddCardForm() {
  popupAddCardForm.reset();
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = yourNameInput.value;
  profileSubtitle.textContent = jobInput.value;
  closePopup(popupProfile);
}

function handleCardClick(name, link) {
  openPopup(popupPicture);
  popupPictureImage.src = link;
  popupPictureImage.alt = name;
  popupPictureTitle.textContent = name;
}

function createCard(link, name, templateElement, handleCardClick) {
  const card = new Card(link, name, templateElement, handleCardClick);
  const cardElement = card.generateCard();
  return (cardElement);
}

initialCards.forEach((item) => {
  const cardElement = createCard(item.link, item.name, '.template', handleCardClick);
  cardsContainer.append(cardElement);
});

function addCard(evt) {
  evt.preventDefault();
  const cardElement = createCard(cardLinkInput.value, cardNameInput.value, '.template', handleCardClick);
  cardsContainer.prepend(cardElement);
  closePopup(popupAddCard);
}

profileEditButton.addEventListener('click', () => {
  fillPopupProfileForm();
  formValidators['popupFormProfile'].resetValidation();
  openPopup(popupProfile);
});
popupProfileForm.addEventListener('submit', handleProfileFormSubmit);

profileAddButton.addEventListener('click', () => {
  resetPopupAddCardForm();
  formValidators['popupFormAddCard'].resetValidation();
  openPopup(popupAddCard);
});
popupAddCardForm.addEventListener('submit', addCard);

closeButtons.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup));
});