const PostsRepository = require('../infrastructure/postsRepository');
const PostMessage = require('./postMessage');
const ReadTimeline = require('./readTimeline');

class UseCaseFactory {
  constructor(postsRepository) {
    this.postsRepository = postsRepository || new PostsRepository;
  }

  build(type) {
    if (type === 'PostMessage') {
      return new PostMessage(this.postsRepository);
    } else if (type == 'ReadTimeline') {
      return new ReadTimeline(this.postsRepository);
    }
  }
}

module.exports = UseCaseFactory;
