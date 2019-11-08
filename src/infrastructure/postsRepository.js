const Post = require('../domain/post');

class PostsRepository {
  constructor() {
    this.posts = [];
  }

  add(username, message) {
    const post = new Post(username, message);
    this.posts.push(post);
  }

  get_user_posts(username) {
    return this.posts;
  }
}

module.exports = PostsRepository;
