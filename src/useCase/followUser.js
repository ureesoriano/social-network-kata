const followersRepository = require('../infrastructure/followersRepository');

class FollowUser {
  constructor(followersRepository) {
    this.followersRepository = followersRepository || new FollowersRepository();
  }

  process(parameters) {
    this.followersRepository.add(parameters.username, parameters.follows);
    return '';
  }
}

module.exports = FollowUser;
