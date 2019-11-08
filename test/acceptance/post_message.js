const should = require('chai').should();

const CommandDispatcher = require('../../src/infrastructure/commandDispatcher');
const PostsRepository = require('../../src/infrastructure/postsRepository');

Feature('Post Message', () => {
  let commandDispatcher;

  beforeEachScenario(() => {
    postsRepository = new PostsRepository();
    commandDispatcher = new CommandDispatcher(postsRepository);
  });

  Scenario('Existing user posts a message', () => {
    Given('A user Alice', () => {});
    When('Alice posts a message', () => {
      commandDispatcher.dispatch('Alice -> Good morning!');
    });
    Then('The message is added to Alice\'s Posts', () => {
      postsRepository.get_user_posts('Alice').length.should.equal(1);
    });
  });
});
