class CommandParser {
  static parse(command) {
    let matches;

    if (matches = command.match(/^(.+)\s->\s(.+)$/)) {
      const username = matches[1];
      const message = matches[2];
      return {
        type: 'PostMessage',
        parameters: {username, message},
      };
    } else if (matches = command.match(/^(.+)$/)) {
      const username = matches[1];
      return {
        type: 'ReadTimeline',
        parameters: {username},
      };
    } else {
      throw new Error(`Unknown command: ${command}`);
    }
  }
}

module.exports = CommandParser;
