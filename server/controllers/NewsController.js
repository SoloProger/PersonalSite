import NewsService from "../services/NewsService.js";

class NewsController {
  async createNews(req, res) {
    try {
      const news = await NewsService.createNews(req.body);
      return res.json(news);
    } catch (error) {
      res.status(500).json(`Ошибка сервера! Контроллер не доступен. ${error}`);
    }
  }

  async getAllNews(req, res) {
    try {
      const news = await NewsService.getAllNews();
      return res.json(news);
    } catch (error) {
      res.status(500).json(`Ошибка сервера! Контроллер не доступен. ${error}`);
    }
  }

  async removeNews(req, res) {
    try {
      const news = await NewsService.removeOneNews(req.params.id);
      return res.json(news);
    } catch (error) {
      res.status(500).json(`Ошибка сервера! Контроллер не доступен. ${error}`);
    }
  }
}

export default new NewsController();
