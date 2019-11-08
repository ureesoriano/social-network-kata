const PostsRepository = require('../infrastructure/postsRepository');
const PostMessage = require('../useCase/postMessage');
const CommandParser = require('./commandParser');

class CommandDispatcher {
  constructor(postsRepository) {
    this.postsRepository = postsRepository || new PostsRepository();
  }

  dispatch(command) {
    const { username, message } = CommandParser.parse(command).parameters;
    const postMessage = new PostMessage(this.postsRepository);
    postMessage.process(username, message);
  }
}

module.exports = CommandDispatcher;
