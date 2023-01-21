export default class Card {
  constructor(data, templateElement, userId, { handleCardClick, handleDeleteIconClick, toggleLike }) {
    this._link = data.link;
    this._name = data.name;
    this._likes = data.likes;
    this._ownerId = data.owner._id;
    this._templateElement = templateElement;
    this._userId = userId;
    this._handleCardClick = handleCardClick;
    this._handleDeleteIconClick = handleDeleteIconClick;
    this._isLiked = false;
    this._toggleLike = toggleLike;
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

  _checkLike() {
    this._likes.forEach((like)=> {
      if (like._id === this._userId) {
        this._isLiked = true;
        this._likeButton.classList.add('card__like-button_active');
      } else {
        this._likeButton.classList.remove('card__like-button_active');
      }
    })
  }

  setLikes(likesCount) {
    this._likes = likesCount;
    this._cardLikeCounter.textContent = this._likes;
  }

  switchIsLiked() {
    this._isLiked = !this._isLiked;
  }
  
  deleteCard() {
    this._element.remove();
  }

  _setEventListeners() {
    this._likeButton = this._element.querySelector('.card__like-button');
    this._likeButton.addEventListener('click', () => {
      this._likeButton.classList.toggle('card__like-button_active');
      this._toggleLike();
    });

    this._deleteButton = this._element.querySelector('.card__delete-button');
    if (this._ownerId != this._userId) {
      this._deleteButton.remove();
    } else {
      this._deleteButton.addEventListener('click', () => {
        this._handleDeleteIconClick();
      });
    }
    
    this._cardImage.addEventListener('click', () => {
      this._handleCardClick();
    });

    this._checkLike();
  }
}