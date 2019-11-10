const PostsRepository = require('../infrastructure/postsRepository');

class ReadTimeline {
  constructor(postsRepository) {
    this.postsRepository = postsRepository || new PostsRepository();
  }

  process(username) {
    return this.postsRepository
      .get_user_posts(username)
      .map(p => p.message)
      .join("\n");
  }
}

module.exports = ReadTimeline;
