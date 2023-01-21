export default class Card {
  constructor(data, templateElement, { handleCardClick, handleDeleteButtonClick, toggleLike, dislikeCard }) {
    this._link = data.link;
    this._name = data.name;
    this._likes = data.likes;
    this._ownerId = data.owner._id;
    this._templateElement = templateElement;
    this._handleCardClick = handleCardClick;
    this._handleDeleteButtonClick = handleDeleteButtonClick;
    this._toggleLike = toggleLike;
    this._dislikeCard = dislikeCard
  }

  _getTemplate() {
    const cardTemplate = document
      .querySelector(this._templateElement)
      .content
      .querySelector('.card')
      .cloneNode(true)

    return cardTemplate;
  }

  generateCard() {
    this._element = this._getTemplate();

    this._cardImage = this._element.querySelector('.card__image');
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;

    this._cardTitle = this._element.querySelector('.card__title');
    this._cardTitle.textContent = this._name;

    this._cardLikeCounter = this._element.querySelector('.card__like-counter');
    this._cardLikeCounter.textContent = this._likes.length

    this._setEventListeners();
    return this._element;
  }

  _setEventListeners() {
    this._likeButton = this._element.querySelector('.card__like-button');
    this._likeButton.addEventListener('click', () => {
      this._toggleLike();
      this._likeButton.classList.toggle('card__like-button_active');
    });

    this._deleteButton = this._element.querySelector('.card__delete-button');
    if (this._ownerId != 'd84a187fdaa1defe11442536') {
      this._deleteButton.remove();
    } else {
      this._deleteButton.addEventListener('click', () => {
        this._handleDeleteButtonClick();
      });
    }
    

    this._cardImage.addEventListener('click', () => {
      this._handleCardClick();
    });
  }
}