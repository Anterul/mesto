import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor(popupSelector, { submitCallback }) {
    super(popupSelector);
    this._submitCallback = submitCallback;
  }

  _getInputValues() {
    return this._popup.querySelector('.popup__form');
  }

  open() {
    super.open();
  }

  close() {
    super.close();
    this._form = this._getInputValues();
    this._form.reset();
  }

  setEventListeners() {
    super.setEventListeners();

    this._popup.querySelector('.popup__form').addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._submitCallback();
      this.close();
    });
  }
}