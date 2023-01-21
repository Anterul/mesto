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

function toggleLike(card, cardIsLiked, itemId) {
  if (!cardIsLiked) {
    api.likeCard(itemId)
    .then((data) => {
      card.setLikes(data.likes.length);
      card.switchIsLiked();
    })
    .catch((error) => {
      console.log(`Ошибка: ${error}`);
    });
  } else {
    api.dislikeCard(itemId)
    .then((data) => {
      card.setLikes(data.likes.length);
      card.switchIsLiked();
    })
    .catch((error) => {
      console.log(`Ошибка: ${error}`);
    });
  }
}

function createCard(item) {
  const card = new Card(
    item,
    '.template',
    'd84a187fdaa1defe11442536',
    {
      handleCardClick: () => {
        popupPicture.open(item.link, item.name);
      },
      handleDeleteIconClick: () => {
        popupDelete.open();
        popupDelete.setSubmitAction(() => {
          api.deleteCard(item._id)
          .then(() => {
            card.deleteCard();
            popupDelete.close();
          })
          .catch((error) => {
            console.log(`Ошибка: ${error}`);
          });
        })
      },
      toggleLike: () => {
        toggleLike(card, card._isLiked, item._id);
      }
    }
  );
  
  const cardElement = card.generateCard();
  return cardElement;
}

const api = new Api({
  baseUrl: `https://mesto.nomoreparties.co/v1/cohort-57`,
  headers: {
    authorization: 'cc8211c2-a478-4e6c-819c-a7ec6fb1096c'
  }
});

const cardList = new Section({
  renderer: (item) => {
    const cardElement = createCard(item);
    cardList.addItem(cardElement);
  }
}, cardsContainer);


api.getInitialCards()
  .then((result) => {
    cardList.renderItems(result);
  })
  .catch((error) => {
    console.log(`Ошибка: ${error}`);
  });

const userInfo = new UserInfo({
  nameSelector: profileTitleSelector,
  infoSelector: profileSubtitleSelector,
  avatarSelector: profileAvatarSelector
});

api.getUserInfo('https://nomoreparties.co/v1/cohort-57/users/me')
  .then((result) => {
    userInfo.setUserInfo(result.name, result.about, result.avatar);
  })
  .catch((error) => {
    console.log(`Ошибка: ${error}`);
  });

const popupPicture = new PopupWithImage(popupPictureSelector);

const popupProfile = new PopupWithForm(
  popupProfileSelector,
  {
    submitCallback: (item) => {
      api.submitProfileData(item.yourName, item.yourJob)
      .then((data) => {
        userInfo.setUserInfo(data.name, data.about, data.avatar);
      })
      .catch((error) => {
        console.log(`Ошибка: ${error}`);
      });
    }
  }
);

const popupAddCard = new PopupWithForm(
  popupAddCardSelector,
  {
    submitCallback: (item) => {
      api.addNewCard(item.name, item.link)
      .then((data) => {
        const cardElement = createCard(data);
        cardList.prependItem(cardElement);
      })
      .catch((error) => {
        console.log(`Ошибка: ${error}`);
      });
    }
  }
);

const popupDelete = new PopupDeleteCard(popupDeleteCardSelector);

const popupUpdateAvatar = new PopupWithForm(
  popupUpdateAvatarSelector,
  {
    submitCallback: (item) => {
      api.updateAvatar(item.avatar)
      .then((data) => {
        userInfo.setUserInfo(data.name, data.about, data.avatar);
      })
      .catch((error) => {
        console.log(`Ошибка: ${error}`);
      });
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