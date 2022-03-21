import axios from 'axios';

export default class Api {
  _DEFAULT_OPTIONS = {
    url: '',
    body: null,
    headers: {},
    base_api_url: 'https://swapi.dev/api/',
  };

  get(options = {}) {
    const newOptions = { ...this._DEFAULT_OPTIONS, ...options };
    return axios.get(`${newOptions.base_api_url}${newOptions.url}`, {
      headers: newOptions.headers,
    });
  }
}

// export default class Api {
//   BASE_URL = 'https://swapi.dev/api/';

//   get(options = {}) {
//     axios.defaults.baseURL = this.BASE_URL;
//     return axios.get(`${options.url}`, {});
//   }
// }
