export default class UserInfo {
  constructor({ nameSelector, infoSelector }) {
    this._yourName = document.querySelector(nameSelector);
    this._yourJob = document.querySelector(infoSelector);
  }

  getUserInfo() {
    return this._userInfo = {
      yourName: this._yourName.textContent,
      yourJob: this._yourJob.textContent,
    }
  }

  setUserInfo(yourName, yourJob) {
    this._yourName.textContent = yourName;
    this._yourJob.textContent = yourJob;
  }
}