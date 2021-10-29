import Post from "../models/Post.js";

class PostService {
  async addPost(post) {
    const addedPost = await Post.create(post);
    return addedPost;
  }
  async getPosts() {
    const posts = await Post.find();
    return posts;
  }
  async getPost(id) {
    if (!id) {
      throw new Error("Не указан id!");
    }
    const post = await Post.findById(id);
    return post;
  }
}

export default new PostService();
