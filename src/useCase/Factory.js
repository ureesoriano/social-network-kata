const FollowersRepository = require('../infrastructure/followersRepository');
const PostsRepository = require('../infrastructure/postsRepository');
const PostMessage = require('./postMessage');
const FollowUser = require('./followUser');
const ReadTimeline = require('./readTimeline');

class UseCaseFactory {
  constructor(postsRepository, followersRepository) {
    this.postsRepository = postsRepository || new PostsRepository;
    this.followersRepository = followersRepository || new FollowersRepository;
  }

  build(type) {
    if (type === 'PostMessage') {
      return new PostMessage(this.postsRepository);
    } else if (type == 'FollowUser') {
      return new FollowUser(this.followersRepository);
    } else if (type == 'ReadTimeline') {
      return new ReadTimeline(this.postsRepository);
    }
  }
}

module.exports = UseCaseFactory;
