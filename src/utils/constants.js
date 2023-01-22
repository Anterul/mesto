// весь body.page
export const page = document.querySelector('.page');
// блок profile
export const profileTitleSelector = '.profile__title';
export const profileSubtitleSelector = '.profile__subtitle';
export const profileAvatarSelector = '.profile__avatar';
export const profileEditButton = page.querySelector('.profile__edit-button');
export const profileAddButton = page.querySelector('.profile__add-button');
export const profileUpdateButton = page.querySelector('.profile__update-button');
// блок cards
export const cardsContainer = '.cards';
// блок popup_name_profile
export const popupProfileSelector = '.popup_name_profile';
export const popupProfileForm = document.querySelector('#popupProfileForm')
// блок popup_name_add-card
export const popupAddCardSelector = '.popup_name_add-card';
export const popupAddCardForm = document.querySelector('#popupFormAddCard');
// блок popup_name_picture
export const popupPictureSelector = '.popup_name_picture';
// блок popup_name_delete-card
export const popupDeleteCardSelector = '.popup_name_delete-card';
// блок popup_name_update-avatar
export const popupUpdateAvatarSelector = '.popup_name_update-avatar';
export const popupUpdateAvatarForm = document.querySelector('#popupUpdateAvatarForm');

export const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
}