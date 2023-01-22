export default class FormValidator {
  constructor(config, formElement) {
    this._config = config;
    this._formElement = formElement;
  }

  _showError(inputElement, errorMessage) {
    const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(this._config.inputErrorClass);
    errorElement.classList.add(this._config.errorClass);
    errorElement.textContent = errorMessage;
  }

  _hideError(inputElement) {
    const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(this._config.inputErrorClass);
    errorElement.classList.remove(this._config.errorClass);
    errorElement.textContent = '';
  }

  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showError(inputElement, inputElement.validationMessage);
    } else {
      this._hideError(inputElement);
    }
  }

  _hasInvalidInput() {
    return this._inputList.some((inputElement) => { return !inputElement.validity.valid });
  }

  _disableButton() {
    this._saveButtonElement.classList.add(this._config.inactiveButtonClass);
    this._saveButtonElement.setAttribute('disabled', true);
  }

  _activateButton() {
    this._saveButtonElement.classList.remove(this._config.inactiveButtonClass);
    this._saveButtonElement.removeAttribute('disabled');
  }

  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._disableButton();
    } else {
      this._activateButton();
    }
  }

  resetValidation() {
    this._toggleButtonState();
    this._inputList.forEach((inputElement) => {
      this._hideError(inputElement);
    });
  }

  enableValidation() {
    this._inputList = Array.from(this._formElement.querySelectorAll(this._config.inputSelector));
    this._saveButtonElement = this._formElement.querySelector(this._config.submitButtonSelector);
    this._toggleButtonState();
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
      });
    });
  }
}