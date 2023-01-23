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
  popupProfileForm,
  popupAddCardSelector,
  popupAddCardForm,
  popupPictureSelector,
  popupDeleteCardSelector,
  popupUpdateAvatarSelector,
  popupUpdateAvatarForm,
  validationConfig,
} from '../utils/constants.js';
import '../pages/index.css';

const profileFormValidator = new FormValidator(validationConfig, popupProfileForm); 
const cardFormValidator = new FormValidator(validationConfig, popupAddCardForm);
const avatarFormValidator = new FormValidator(validationConfig, popupUpdateAvatarForm);
profileFormValidator.enableValidation(); 
cardFormValidator.enableValidation();
avatarFormValidator.enableValidation();

const api = new Api({
  baseUrl: `https://mesto.nomoreparties.co/v1/cohort-57`,
  headers: {
    authorization: 'cc8211c2-a478-4e6c-819c-a7ec6fb1096c'
  }
});

Promise.all([
  api.getUserInfo('https://nomoreparties.co/v1/cohort-57/users/me'),
  api.getInitialCards()
])
.then(([userData, cards])=>{
  userInfo.setUserInfo(userData);
  cardsSection.renderItems(cards);
})
.catch((error) => {
  console.log(`Ошибка: ${error}`);
});

function toggleLike(card) {
  if (!card.isLiked()) {
    api.likeCard(card.getId())
    .then((data) => {
      card.setLikes(data.likes.length);
    })
    .catch((error) => {
      console.log(`Ошибка: ${error}`);
    });
  } else {
    api.dislikeCard(card.getId())
    .then((data) => {
      card.setLikes(data.likes.length);
    })
    .catch((error) => {
      console.log(`Ошибка: ${error}`);
    });
  }
}

function createCard(cardData) {
  const userId = userInfo.getUserInfo().id;
  const card = new Card(
    cardData,
    '.template',
    userId,
    {
      handleCardClick: () => {
        popupPicture.open(cardData.link, cardData.name);
      },
      handleDeleteIconClick: () => {
        popupDelete.open();
        popupDelete.setSubmitAction(() => {
          api.deleteCard(cardData._id)
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
        toggleLike(card);
      }
    }
  );
  
  const cardElement = card.generateCard();
  return cardElement;
}

const cardsSection = new Section({
  renderer: (cardData) => {
    const cardElement = createCard(cardData);
    cardsSection.appendItem(cardElement);
  }
}, cardsContainer);

const userInfo = new UserInfo({
  nameSelector: profileTitleSelector,
  infoSelector: profileSubtitleSelector,
  avatarSelector: profileAvatarSelector
});

const popupPicture = new PopupWithImage(popupPictureSelector);

const popupProfile = new PopupWithForm(
  popupProfileSelector,
  {
    submitCallback: (profileData) => {
      popupProfile.setButtonText('Сохранение...');
      api.submitProfileData(profileData.yourName, profileData.yourJob)
      .then((data) => {
        userInfo.setUserInfo(data);
        popupProfile.close();
      })
      .catch((error) => {
        console.log(`Ошибка: ${error}`);
      })
      .finally(() => {
        popupProfile.returnButtonText();
      });
    }
  }
);

const popupAddCard = new PopupWithForm(
  popupAddCardSelector,
  {
    submitCallback: (cardData) => {
      popupAddCard.setButtonText('Сохранение...');
      api.addNewCard(cardData.name, cardData.link)
      .then((data) => {
        const cardElement = createCard(data);
        cardsSection.prependItem(cardElement);
        popupAddCard.close();
      })
      .catch((error) => {
        console.log(`Ошибка: ${error}`);
      })
      .finally(() => {
        popupAddCard.returnButtonText();
      });
    }
  }
);

const popupDelete = new PopupDeleteCard(popupDeleteCardSelector);

const popupUpdateAvatar = new PopupWithForm(
  popupUpdateAvatarSelector,
  {
    submitCallback: (avatarInfo) => {
      popupUpdateAvatar.setButtonText('Сохранение...');
      api.updateAvatar(avatarInfo.avatar)
      .then((data) => {
        userInfo.setUserInfo(data);
        popupUpdateAvatar.close();
      })
      .catch((error) => {
        console.log(`Ошибка: ${error}`);
      })
      .finally(() => {
        popupUpdateAvatar.returnButtonText();
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
  profileFormValidator.resetValidation();
  popupProfile.setInputValues(userInfo.getUserInfo());
});

profileAddButton.addEventListener('click', () => {
  popupAddCard.open();
  cardFormValidator.resetValidation();
});

profileUpdateButton.addEventListener('click', () => {
  popupUpdateAvatar.open();
  avatarFormValidator.resetValidation();
});