import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';

import {
  initialCards,
  profileTitleSelector,
  profileSubtitleSelector,
  profileEditButton,
  profileAddButton,
  cardsContainer,
  popupProfileSelector,
  popupProfileForm,
  yourNameInput,
  jobInput,
  popupAddCardSelector,
  popupAddCardForm,
  cardNameInput,
  cardLinkInput,
  popupPictureSelector,
  closeButtons,
  validationConfig,
} from '../utils/constants.js';

import '../pages/index.css';


const profileForm = new FormValidator(validationConfig, popupProfileForm);
const addCardForm = new FormValidator(validationConfig, popupAddCardForm);
profileForm.enableValidation();
addCardForm.enableValidation();


const userInfo = new UserInfo({
  nameSelector: profileTitleSelector,
  infoSelector: profileSubtitleSelector
});


const popupPicture = new PopupWithImage(popupPictureSelector);

const popupProfile = new PopupWithForm(
  popupProfileSelector,
  {
    submitCallback: () => {
      userInfo.setUserInfo(yourNameInput.value, jobInput.value);
    }
  }
);

const popupAddCard = new PopupWithForm(
  popupAddCardSelector,
  {
    submitCallback: () => {
      const currentLink = cardLinkInput.value;
      const currentName = cardNameInput.value;

      const newCard = new Card(currentLink, currentName, '.template',
        {
          handleCardClick: () => {
            popupPicture.open(currentLink, currentName);
          }
        });

      const cardElement = newCard.generateCard();
      document.querySelector(cardsContainer).prepend(cardElement);
    }
  });

const cardList = new Section({
  items: initialCards,
  renderer: (item) => {
    const card = new Card(item.link, item.name, '.template',
      {
        handleCardClick: () => {
          popupPicture.open(item.link, item.name);
        }
      });
    const cardElement = card.generateCard();
    cardList.addItem(cardElement);
  }
}, cardsContainer);
cardList.renderItems();


popupPicture.setEventListeners();
popupAddCard.setEventListeners();
popupProfile.setEventListeners();

profileEditButton.addEventListener('click', () => {
  popupProfile.open();
  profileForm.resetValidation();
  

  const userInfoObject = userInfo.getUserInfo();
  yourNameInput.value = userInfoObject.yourName;
  jobInput.value = userInfoObject.yourJob;
});

profileAddButton.addEventListener('click', () => {
  popupAddCard.open();
  addCardForm.resetValidation();
  
});