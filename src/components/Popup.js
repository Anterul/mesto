export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
  }

  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      this.close();
    }
  }

  _closeByClick(evt) {
    if (evt.target.classList.contains('popup_opened')) {
      this.close();
    }
  }

  open() {
    this._popup.classList.add('popup_opened');
  }

  close() {
    this._popup.classList.remove('popup_opened');
    
    /*
    this._popup.querySelector('.popup__close-button').removeEventListener('mousedown', () => {
      this.close();
    });

    this._popup.removeEventListener('mousedown', (evt) => {
      this._closeByClick(evt);
    });

    document.removeEventListener('keydown', (evt) => {
      this._handleEscClose(evt);
    });
    */
  }

  setEventListeners() {
    this._popup.querySelector('.popup__close-button').addEventListener('mousedown', () => {
      this.close();
    });

    this._popup.addEventListener('mousedown', (evt) => {
      this._closeByClick(evt);
    });

    document.addEventListener('keydown', (evt) => {
      this._handleEscClose(evt);
    });
  }
}