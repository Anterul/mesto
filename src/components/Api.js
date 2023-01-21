export default class Api {
  constructor({baseUrl, headers}) {
    this._baseUrl = baseUrl;
    this.authorization = headers.authorization;
  }

  getUserInfo(url) {
    return fetch(url, {
      method: 'GET',
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

  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
      method: 'GET',
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

  submitProfileData(name, about) {
    return fetch(`${this._baseUrl}/users/me`, {
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
    .then((response) => {
      if(response.ok) {
        return response.json();
      } else {
        return Promise.reject(`Ошибка: ${response.status} ${response.statusText}`);
      }
    })
  }

  deleteCard(id) {
    return fetch(`${this._baseUrl}/cards/${id}`, {
      method: 'DELETE',
      headers: {
        authorization: this.authorization,
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

  addNewCard(name, link) {
    return fetch(`${this._baseUrl}/cards`, {
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

  likeCard(id) {
    return fetch(`${this._baseUrl}/cards/${id}/likes`, {
      method: 'PUT',
      headers: {
        authorization: this.authorization,
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

  dislikeCard(id) {
    return fetch(`${this._baseUrl}/cards/${id}/likes`, {
      method: 'DELETE',
      headers: {
        authorization: this.authorization,
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

  updateAvatar(avatarUrl) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: {
        authorization: this.authorization,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        avatar: avatarUrl
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