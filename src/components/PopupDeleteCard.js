import Popup from './Popup.js';

export default class PopupDeleteCard extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupYesButton = this._popup.querySelector('.popup__form');
  }

  setSubmitAction(deleting) {
    this._submitCallback = deleting;
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupYesButton.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._submitCallback();
      //this.close();
    });
  }
}