class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  getUserInformation() {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "GET",
      headers: {
        ...this._headers,
      },
    }).then((res) => res.json());
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}/cards/`, {
      method: "GET",
      headers: {
        ...this._headers,
      },
    }).then((res) => res.json());
  }
  

  updateUserProfile(body) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: {
        ...this._headers,
      },
      body: JSON.stringify(body),
    }).then((res) => res.json());
  }

  createCard(body) {
    return fetch(`${this._baseUrl}/cards/`, {
      method: "POST",
      headers: {
        ...this._headers,
      },
      body: JSON.stringify(body),
    }).then((res) => res.json());
  }

  like(id, like) {
    return fetch(`${this._baseUrl}/cards/${id}/likes`, {
      method: like ? "PUT" : "DELETE",
      headers: {
        ...this._headers,
      },
      body: JSON.stringify({ isLiked: like }),
    }).then((res) => {
      if (!res.ok) {
        return Promise.reject(`Error: ${res.status}`);
      }
      return res.json();
    });
  }

  deleteCard(id) {
    return fetch(`${this._baseUrl}/cards/${id}`, {
      method: "DELETE",
      headers: {
        ...this._headers,
      },
    }).then((res) => {
      if (!res.ok) {
        return Promise.reject(`Error: ${res.status}`);
      }
      return res.json();
    });
  }

  updateProfilePhoto(avatar) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: {
        ...this._headers,
      },
      body: JSON.stringify({ avatar }),
    }).then((res) => {
      if (!res.ok) {
        return Promise.reject(`Error: ${res.status}`);
      }
      return res.json();
    });
  }
}

const api = new Api({
  baseUrl: "https://around-api.es.tripleten-services.com/v1",
  headers: {
    authorization: "4fc96ddc-1a43-4477-9291-94863e28e1e2",
    "Content-Type": "application/json",
  },
});

export default api;
