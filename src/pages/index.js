import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupDeleteCard from '../components/PopupDeleteCard.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import Api from '../components/Api.js'
import {
  profileTitleSelector,
  profileSubtitleSelector,
  profileAvatarSelector,
  profileEditButton,
  profileAddButton,
  profileUpdateButton,
  cardsContainer,
  popupProfileSelector,
  popupAddCardSelector,
  popupPictureSelector,
  popupDeleteCardSelector,
  popupUpdateAvatarSelector,
  validationConfig,
  formValidators,
} from '../utils/constants.js';
import '../pages/index.css';


const enableAllFormValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector))
  formList.forEach((formElement) => {
    const validator = new FormValidator(config, formElement);
    validator.enableValidation();
    const formName = formElement.getAttribute('name');
    formValidators[formName] = validator;
  });
};
enableAllFormValidation(validationConfig);

function toggleLike(cardIsLiked, itemId) {
  if (!cardIsLiked) {
    api.likeCard({ 
      baseUrl: `https://mesto.nomoreparties.co/v1/cohort-57/cards/${itemId}/likes`
    })
  } else {
    api.dislikeCard({
      baseUrl: `https://mesto.nomoreparties.co/v1/cohort-57/cards/${itemId}/likes`
    })
  }
}

function createCard(item) {
  const card = new Card(
    item,
    '.template',
    {
      handleCardClick: () => {
        popupPicture.open(item.link, item.name);
      },
      handleDeleteButtonClick: () => {
        popupDelete.open();
        popupDelete.submitCallback(
          { api:
            api.deleteCard({ 
              baseUrl: `https://mesto.nomoreparties.co/v1/cohort-57/cards/${item._id}` 
            })
          }
        );
      },
      toggleLike: () => {
        toggleLike(cardIsLiked, item._id);
      }
    }
  );
  
  const cardElement = card.generateCard();
  return cardElement;
}

const api = new Api({
  headers: {
    authorization: 'cc8211c2-a478-4e6c-819c-a7ec6fb1096c',
  } 
});

const cardList = new Section({
  renderer: (item) => {
    const cardElement = createCard(item);
    cardList.addItem(cardElement);
  }
}, cardsContainer);


api.getInitialCards({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-57/cards'
})
  .then((result) => {
    cardList.renderItems(result);
  })
  .catch((error) => {
    console.log(error);
  });

const userInfo = new UserInfo({
  nameSelector: profileTitleSelector,
  infoSelector: profileSubtitleSelector,
  avatarSelector: profileAvatarSelector
});

api.getUserInfo({
  baseUrl: 'https://nomoreparties.co/v1/cohort-57/users/me'
})
  .then((result) => {
    userInfo.setUserInfo(result.name, result.about, result.avatar);
  })
  .catch((error) => {
    console.log(error);
  });

const popupPicture = new PopupWithImage(popupPictureSelector);

const popupProfile = new PopupWithForm(
  popupProfileSelector,
  {
    submitCallback: (item) => {
      api.submitProfileData(
        { baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-57/users/me' },
        item.yourName,
        item.yourJob
      )
    }
  }
);

const popupAddCard = new PopupWithForm(
  popupAddCardSelector,
  {
    submitCallback: (item) => {
      api.addNewCard(
        { baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-57/cards' },
        item.name,
        item.link
      )
    }
  }
);

const popupDelete = new PopupDeleteCard(popupDeleteCardSelector);

const popupUpdateAvatar = new PopupWithForm(
  popupUpdateAvatarSelector,
  {
    submitCallback: (item) => {
      api.updateAvatar(
        { baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-57/users/me/avatar'},
        item.avatar
      )
    }
  }
);

popupPicture.setEventListeners();
popupAddCard.setEventListeners();
popupProfile.setEventListeners();
popupDelete.setEventListeners();
popupUpdateAvatar.setEventListeners();

profileEditButton.addEventListener('click', () => {
  popupProfile.open();
  formValidators['popupFormProfile'].resetValidation();
  popupProfile.setInputValues(userInfo.getUserInfo());
});

profileAddButton.addEventListener('click', () => {
  popupAddCard.open();
  formValidators['popupFormAddCard'].resetValidation();
});

profileUpdateButton.addEventListener('click', () => {
  popupUpdateAvatar.open();
});