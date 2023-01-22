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

const profileForm = new FormValidator(validationConfig, popupProfileForm); 
const addCardForm = new FormValidator(validationConfig, popupAddCardForm);
const updateAvatarForm = new FormValidator(validationConfig, popupUpdateAvatarForm);
profileForm.enableValidation(); 
addCardForm.enableValidation();
updateAvatarForm.enableValidation();

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
.then((values)=>{
  userInfo.setUserInfo(values[0]);
  cardsSection.renderItems(values[1])
})
.catch((error) => {
  console.log(`Ошибка: ${error}`);
});

function toggleLike(card) {
  if (!card.isLiked()) {
    api.likeCard(card.getId())
    .then((data) => {
      card.switchIsLiked();
      card.setLikes(data.likes.length);
    })
    .catch((error) => {
      console.log(`Ошибка: ${error}`);
    });
  } else {
    api.dislikeCard(card.getId())
    .then((data) => {
      card.switchIsLiked();
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
      api.submitProfileData(profileData.yourName, profileData.yourJob)
      .then((data) => {
        userInfo.setUserInfo(data);
        popupProfile.returnButtonText();
        popupProfile.close();
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
    submitCallback: (cardData) => {
      api.addNewCard(cardData.name, cardData.link)
      .then((data) => {
        const cardElement = createCard(data);
        cardsSection.prependItem(cardElement);
        popupAddCard.returnButtonText();
        popupAddCard.close();
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
    submitCallback: (avatarInfo) => {
      api.updateAvatar(avatarInfo.avatar)
      .then((data) => {
        userInfo.setUserInfo(data);
        popupUpdateAvatar.returnButtonText();
        popupUpdateAvatar.close();
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
  profileForm.resetValidation();
  popupProfile.setInputValues(userInfo.getUserInfo());
});

profileAddButton.addEventListener('click', () => {
  popupAddCard.open();
  addCardForm.resetValidation();
});

profileUpdateButton.addEventListener('click', () => {
  popupUpdateAvatar.open();
  updateAvatarForm.resetValidation();
});