import News from "../models/News.js";

class NewsService {
  async createNews(news) {
    try {
      const createdNews = await News.create({ ...news });
      return createdNews;
    } catch (error) {
      throw new Error(`Ошибка сервера! Сервис не доступен. ${error}`);
    }
  }

  async getAllNews() {
    try {
      const news = await News.find();
      return news;
    } catch (error) {
      throw new Error(`Ошибка сервера! Сервис не доступен. ${error}`);
    }
  }

  async removeOneNews(id) {
    try {
      if (!id) {
        throw new Error("Ошибка сервера! Не указан id!");
      }
      const news = await News.findByIdAndDelete(id);
      return news;
    } catch (error) {
      throw new Error(`Ошибка сервера! Сервис не доступен. ${error}`);
    }
  }
}

export default new NewsService();
