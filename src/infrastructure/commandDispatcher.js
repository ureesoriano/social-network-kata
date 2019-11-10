const PostsRepository = require('../infrastructure/postsRepository');
const FollowersRepository = require('../infrastructure/followersRepository');
const PostMessage = require('../useCase/postMessage');
const CommandParser = require('./commandParser');
const UseCaseFactory = require('./../useCase/Factory');

class CommandDispatcher {
  constructor(useCaseFactory, postsRepository, followersRepository) {
    this.useCaseFactory = useCaseFactory || new UseCaseFactory();
    this.postsRepository = postsRepository || new PostsRepository();
    this.followersRepository = followersRepository || new FollowersRepository();
  }

  dispatch(command) {
    const { type, parameters } = CommandParser.parse(command);
    const useCase = this.useCaseFactory.build(type);

    return useCase.process(parameters);
  }
}

module.exports = CommandDispatcher;
