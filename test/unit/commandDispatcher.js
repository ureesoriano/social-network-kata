const sinon = require('sinon');

const CommandDispatcher = require('../../src/infrastructure/commandDispatcher');

describe('CommandDispatcher', () => {
  let useCaseMock;

  describe('When a "PostMessage" command is issued', () => {
    beforeEach(() => {
      const useCaseFake = { process: () => 1 };
      useCaseMock = sinon.mock(useCaseFake);

      const useCaseFactoryStub = { build: () => useCaseFake };
      useCaseFactoryStub.build = sinon.stub();
      useCaseFactoryStub.build
        .withArgs('PostMessage')
        .returns(useCaseFake);

      const commandDispatcher = new CommandDispatcher(useCaseFactoryStub);

      useCaseMock
        .expects('process')
        .once()
        .withExactArgs({username: 'Alice', message: 'Hi!'});

      commandDispatcher.dispatch('Alice -> Hi!');
    });

    afterEach(() => {
      useCaseMock.restore();
    });

    it('Should instantiate a PostMessage UseCase', () => {
      useCaseMock.verify();
    });
  });

  describe('When a "ReadTimeline" command is issued', () => {
    beforeEach(() => {
      const useCaseFake = { process: () => 1 };
      useCaseMock = sinon.mock(useCaseFake);

      const useCaseFactoryStub = { build: () => useCaseFake };
      useCaseFactoryStub.build = sinon.stub();
      useCaseFactoryStub.build
        .withArgs('ReadTimeline')
        .returns(useCaseFake);

      const commandDispatcher = new CommandDispatcher(useCaseFactoryStub);

      useCaseMock
        .expects('process')
        .once()
        .withExactArgs({username: 'Alice'});

      commandDispatcher.dispatch('Alice');
    });

    afterEach(() => {
      useCaseMock.restore();
    });

    it('Should call process', () => {
      useCaseMock.verify();
    });
  });

  describe('When a "FollowUser" command is issued', () => {
    beforeEach(() => {
      const useCaseFake = { process: () => 1 };
      useCaseMock = sinon.mock(useCaseFake);

      const useCaseFactoryStub = { build: () => useCaseFake };
      useCaseFactoryStub.build = sinon.stub();
      useCaseFactoryStub.build
        .withArgs('FollowUser')
        .returns(useCaseFake);

      const commandDispatcher = new CommandDispatcher(useCaseFactoryStub);

      useCaseMock
        .expects('process')
        .once()
        .withExactArgs({username: 'Alice', follows: 'Bob'});

      commandDispatcher.dispatch('Alice follows Bob');
    });

    afterEach(() => {
      useCaseMock.restore();
    });

    it('Should call process', () => {
      useCaseMock.verify();
    });
  });
});
