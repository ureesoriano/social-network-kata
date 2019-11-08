const PostsRepository = require('../infrastructure/postsRepository');

class PostMessage {
  constructor(postsRepository) {
    this.postsRepository = postsRepository || new PostsRepository();
  }

  process(username, message) {
    this.postsRepository.add(username, message);
  }
}

module.exports = PostMessage;
