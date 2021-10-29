import PostService from "../services/PostService.js";

class PostController {
  async addPost(req, res) {
    try {
      const post = await PostService.addPost(req.body);
      res.json(post);
    } catch (error) {
      return res.status(500).json(error);
    }
  }
  async getPosts(req, res) {
      try {
          const posts =await PostService.getPosts();
          res.json(posts);
      } catch (error) {
        return res.status(500).json(error);
      }
  }
  async getPost(req, res) {
      try {
          const post = await PostService.getPost(req.params.id);
          res.json(post);
      } catch (error) {
        return res.status(500).json(error);
      }
  }
}

export default new PostController();