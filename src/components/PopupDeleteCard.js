import Popup from './Popup.js';

export default class PopupDeleteCard extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupYesButton = this._popup.querySelector('.popup__form');
  }

  submitCallback({api}) {
    return api;

  }

  setEventListeners() {
    super.setEventListeners();

    this._popupYesButton.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this.submitCallback();
      this.close();
    });
  }
}