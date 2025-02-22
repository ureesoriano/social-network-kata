const PostsRepository = require('../infrastructure/postsRepository');

class PostMessage {
  constructor(postsRepository) {
    this.postsRepository = postsRepository || new PostsRepository();
  }

  process(parameters) {
    this.postsRepository.add(parameters.username, parameters.message);
    return '';
  }
}

module.exports = PostMessage;
