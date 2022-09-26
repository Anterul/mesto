class Card {
  constructor(itemLink, itemName, templateElement, handleCardClick) {
    this._link = itemLink;
    this._name = itemName;
    this._templateElement = templateElement;
    this._handleCardClick = handleCardClick;
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

    this._cardImage = this._element.querySelector('.card__image');
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;

    this._cardTitle = this._element.querySelector('.card__title')
    this._cardTitle.textContent = this._name;

    this._setEventListeners();
    return this._element;
  }

  _setEventListeners() {
    this._likeButton = this._element.querySelector('.card__like-button');
    this._likeButton.addEventListener('click', () => { this._likeCard() });

    this._deleteButton = this._element.querySelector('.card__delete-button');
    this._deleteButton.addEventListener('click', () => { this._deleteCard() });

    this._cardImage.addEventListener('click', () => { this._handleCardClick(this._name, this._link) });
  }

  _likeCard() {
    this._likeButton.classList.toggle('card__like-button_active');
  }

  _deleteCard() {
    this._element.remove();
  }
}

export { Card };