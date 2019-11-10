const should = require('chai').should();

const UseCaseFactory = require('../../src/useCase/Factory');
const PostsRepository = require('../../src/infrastructure/postsRepository');
const CommandDispatcher = require('../../src/infrastructure/commandDispatcher');

Feature('Read Timeline', () => {
  let useCaseFactory;
  let postsRepository;
  let commandDispatcher;
  let posts;

  beforeEachScenario(() => {
    postsRepository = new PostsRepository();
    useCaseFactory = new UseCaseFactory(postsRepository);
    commandDispatcher = new CommandDispatcher(useCaseFactory, postsRepository);
  });

  Scenario('Read the Timeline of a user with no posts', () => {
    Given('A user Alice with no posts', () => {
      postsRepository.get_user_posts('Alice').length.should.equal(0);
    });
    When('reading Alice\'s Timeline', () => {
      posts = commandDispatcher.dispatch('Alice');
    })
    Then('no Posts are returned', () => {
      posts.should.equal('');
    });
  });

  Scenario('Read the Timeline of a user with posts', () => {
    Given('A user Alice with 3 posts', () => {
      postsRepository.add('Alice', 'Hey!');
      postsRepository.add('Alice', 'Ho!');
      postsRepository.add('Alice', 'Let\'s go!');
    });
    When('reading Alice\'s Timeline', () => {
      posts = commandDispatcher.dispatch('Alice');
    })
    Then('list of Posts is returned', () => {
      posts.should.equal('Hey!\nHo!\nLet\'s go!');
    });
  });
});
