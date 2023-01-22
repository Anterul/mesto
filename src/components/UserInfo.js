export default class UserInfo {
  constructor({ nameSelector, infoSelector, avatarSelector }) {
    this._yourName = document.querySelector(nameSelector);
    this._yourJob = document.querySelector(infoSelector);
    this._avatar = document.querySelector(avatarSelector);
    this._userId = '';
  }

  getUserInfo() {
    return {
      yourName: this._yourName.textContent,
      yourJob: this._yourJob.textContent,
      avatar: this._avatar.src,
      id: this._userId
    }
  }

  setUserInfo(userData) {
    this._yourName.textContent = userData.name;
    this._yourJob.textContent = userData.about;
    this._avatar.src = userData.avatar;
    this._userId = userData._id;
  }
}