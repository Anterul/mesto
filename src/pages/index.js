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
  popupAddCardSelector,
  popupPictureSelector,
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

function createCard(item) {
  const card = new Card(
    item.link,
    item.name,
    '.template',
    {
      handleCardClick: () => {
        popupPicture.open(item.link, item.name);
      }
    }
  );
  const cardElement = card.generateCard();
  return cardElement;
}

const cardList = new Section({
  items: initialCards,
  renderer: (item) => {
    const cardElement = createCard(item);
    cardList.addItem(cardElement);
  }
}, cardsContainer);
cardList.renderItems();

const userInfo = new UserInfo({
  nameSelector: profileTitleSelector,
  infoSelector: profileSubtitleSelector
});

const popupPicture = new PopupWithImage(popupPictureSelector);

const popupProfile = new PopupWithForm(
  popupProfileSelector,
  {
    submitCallback: (item) => {
      userInfo.setUserInfo(item.yourName, item.yourJob);
    }
  }
);

const popupAddCard = new PopupWithForm(
  popupAddCardSelector,
  {
    submitCallback: (item) => {
      const cardElement = createCard(item);
      cardList.prependItem(cardElement);
    }
  }
);

popupPicture.setEventListeners();
popupAddCard.setEventListeners();
popupProfile.setEventListeners();

profileEditButton.addEventListener('click', () => {
  popupProfile.open();
  formValidators['popupFormProfile'].resetValidation();
  popupProfile.setInputValues(userInfo.getUserInfo());
});

profileAddButton.addEventListener('click', () => {
  popupAddCard.open();
  formValidators['popupFormAddCard'].resetValidation();
});