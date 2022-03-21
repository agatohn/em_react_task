import Api from '../../global/services/api';

class MainPageService extends Api {
  getMainPageData = () => this.get({ url: 'people/1/' });
  getMainPageDataFilms = url =>
    this.get({
      url,
      base_api_url: '',
    });
}

export default new MainPageService();
