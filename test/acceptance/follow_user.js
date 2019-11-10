const should = require('chai').should();

const UseCaseFactory = require('../../src/useCase/Factory');
const PostsRepository = require('../../src/infrastructure/postsRepository');
const FollowersRepository = require('../../src/infrastructure/followersRepository');
const CommandDispatcher = require('../../src/infrastructure/commandDispatcher');

Feature('Follow User', () => {
  let useCaseFactory;
  let postsRepository;
  let followersRepository;
  let commandDispatcher;

  beforeEachScenario(() => {
    postsRepository = new PostsRepository();
    followersRepository = new FollowersRepository();
    useCaseFactory = new UseCaseFactory(postsRepository, followersRepository);
    commandDispatcher = new CommandDispatcher(useCaseFactory, postsRepository, followersRepository);
  });

  Scenario('Following a User', () => {
    Given('a user Alice', () => {});
    And('a user Bob', () => {});
    When('Alice follows Bob', () => {
      commandDispatcher.dispatch('Alice follows Bob');
    });
    Then('Bob is added to Alice\'s followed users', () => {
      followersRepository.get_users_followed_by('Alice').should.deep.equal(['Bob']);
    });
  });
});
