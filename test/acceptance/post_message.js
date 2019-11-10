const should = require('chai').should();

const UseCaseFactory = require('../../src/useCase/Factory');
const PostsRepository = require('../../src/infrastructure/postsRepository');
const CommandDispatcher = require('../../src/infrastructure/commandDispatcher');

Feature('Post Message', () => {
  let useCaseFactory;
  let postsRepository;
  let commandDispatcher;

  beforeEachScenario(() => {
    postsRepository = new PostsRepository();
    useCaseFactory = new UseCaseFactory(postsRepository);
    commandDispatcher = new CommandDispatcher(useCaseFactory, postsRepository);
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
