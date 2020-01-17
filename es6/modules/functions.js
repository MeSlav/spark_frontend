function appendRelational(posts, users, byId) {
  return users.map(function(user) {
    user.posts = posts.filter(function(post) {
      return user.id === post.userId;
    })
    return user;
  })
};