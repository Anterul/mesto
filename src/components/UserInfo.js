export default class UserInfo {
  constructor({ nameSelector, infoSelector, avatarSelector }) {
    this._yourName = document.querySelector(nameSelector);
    this._yourJob = document.querySelector(infoSelector);
    this._avatar = document.querySelector(avatarSelector);
  }

  getUserInfo() {
    return this._userInfo = {
      yourName: this._yourName.textContent,
      yourJob: this._yourJob.textContent,
    }
  }

  setUserInfo(yourName, yourJob, avatar) {
    this._yourName.textContent = yourName;
    this._yourJob.textContent = yourJob;
    this._avatar.src = avatar;
  }
}