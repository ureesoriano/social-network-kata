class FollowersRepository {
  constructor() {
    this.users_followed_by = {};
  }

  add(username, follows) {
    if (this.users_followed_by[username]) {
      this.users_followed_by[username].push(follows);
    } else {
      this.users_followed_by[username] = [follows];
    }
  }

  get_users_followed_by(username) {
    return this.users_followed_by[username] || [];
  }
}

module.exports = FollowersRepository;
