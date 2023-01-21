export default class Api {
  constructor({headers}) {
    this.authorization = headers.authorization;
  }

  getUserInfo({ baseUrl }) {
    return fetch(baseUrl, {
      headers: {
        authorization: this.authorization,
      }
    })
    .then((response) => {
      if(response.ok) {
        return response.json();
      } else {
        return Promise.reject(`Ошибка: ${response.status} ${response.statusText}`);
      }
    })
  }

  getInitialCards({ baseUrl }) {
    return fetch(baseUrl, {
      headers: {
        authorization: this.authorization,
      }
    })
    .then((response) => {
      if(response.ok) {
        return response.json();
      } else {
        return Promise.reject(`Ошибка: ${response.status} ${response.statusText}`);
      }
    })
  }

  submitProfileData({ baseUrl }, name, about) {
    return fetch(baseUrl, {
      method: 'PATCH',
      headers: {
        authorization: this.authorization,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        about: about
      })
    })
  }

  deleteCard({ baseUrl }) {
    return fetch(baseUrl, {
      method: 'DELETE',
      headers: {
        authorization: this.authorization,
        'Content-Type': 'application/json'
      },
    })
    .then((response) => {
      if(response.ok) {
        return response.json();
      } else {
        return Promise.reject(`Ошибка: ${response.status} ${response.statusText}`);
      }
    })
  }

  addNewCard({ baseUrl }, name, link) {
    return fetch(baseUrl, {
      method: 'POST',
      headers: {
        authorization: this.authorization,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        link: link
      })
    })
    .then((response) => {
      if(response.ok) {
        return response.json();
      } else {
        return Promise.reject(`Ошибка: ${response.status} ${response.statusText}`);
      }
    })
  }

  likeCard({ baseUrl }) {
    return fetch(baseUrl, {
      method: 'PUT',
      headers: {
        authorization: this.authorization,
        'Content-Type': 'application/json'
      },
    })
    .then((response) => {
      if(response.ok) {
        return response.json();
      } else {
        return Promise.reject(`Ошибка: ${response.status} ${response.statusText}`);
      }
    })
  }

  dislikeCard({ baseUrl }) {
    return fetch(baseUrl, {
      method: 'DELETE',
      headers: {
        authorization: this.authorization,
        'Content-Type': 'application/json'
      },
    })
    .then((response) => {
      if(response.ok) {
        return response.json();
      } else {
        return Promise.reject(`Ошибка: ${response.status} ${response.statusText}`);
      }
    })
  }

  updateAvatar({ baseUrl }, avatar) {
    return fetch(baseUrl, {
      method: 'PATCH',
      headers: {
        authorization: this.authorization,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        avatar: avatar
      })
    })
    .then((response) => {
      if(response.ok) {
        return response.json();
      } else {
        return Promise.reject(`Ошибка: ${response.status} ${response.statusText}`);
      }
    })
  }
}