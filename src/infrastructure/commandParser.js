class CommandParser {
  static parse(command) {
    let matches;

    if (matches = command.match(/^(.+)\s->\s(.+)$/)) {
      const username = matches[1];
      const message = matches[2];
      return {
        type: 'PostMessage',
        parameters: [username, message],
      };
    }
  }
}

module.exports = CommandParser;
