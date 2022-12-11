export const initialCards = [
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

// весь body.page
export const page = document.querySelector('.page');
// блок profile
export const profileTitleSelector = '.profile__title';
export const profileSubtitleSelector = '.profile__subtitle';
export const profileEditButton = page.querySelector('.profile__edit-button');
export const profileAddButton = page.querySelector('.profile__add-button');
// блок cards
export const cardsContainer = '.cards';
// блок popup_name_profile
export const popupProfileSelector = '.popup_name_profile';
// блок popup_name_add-card
export const popupAddCardSelector = '.popup_name_add-card';
// блок popup_name_picture
export const popupPictureSelector = '.popup_name_picture';
//
export const formValidators = {};

export const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
}