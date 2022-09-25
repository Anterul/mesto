import { openPopup, popupPicture, popupPictureImage, popupPictureTitle } from './index.js';

class Card {
  constructor(itemLink, itemName, templateElement) {
    this._link = itemLink;
    this._name = itemName;
    this._templateElement = templateElement;
  }

  _getTemplate() {
    const cardTemplate = document
      .querySelector(this._templateElement)
      .content
      .querySelector('.card')
      .cloneNode(true);

    return cardTemplate;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();

    this._element.querySelector('.card__image').src = this._link;
    this._element.querySelector('.card__image').alt = this._name;
    this._element.querySelector('.card__title').textContent = this._name;

    return this._element;
  }

  _setEventListeners() {
    this._element.querySelector('.card__like-button').addEventListener('click', () => { this._likeCard() });
    this._element.querySelector('.card__delete-button').addEventListener('click', () => { this._deleteCard() });
    this._element.querySelector('.card__image').addEventListener('click', () => { this._openPopupPicture() });
  }

  _likeCard() {
    this._element.querySelector('.card__like-button').classList.toggle('card__like-button_active');
  }

  _deleteCard() {
    this._element.remove();
  }

  _openPopupPicture() {
    openPopup(popupPicture);
    popupPictureImage.src = this._link;
    popupPictureImage.alt = this._name;
    popupPictureTitle.textContent = this._name;
  }
}

export { Card };