import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  open(link, name) {
    super.open();

    this._popupImage = this._popup.querySelector('.popup__image');
    this._popupImage.src = link;
    this._popupImage.alt = name;

    this._popup.querySelector('.popup__title').textContent = name;
  }
}