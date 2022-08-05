const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

// Associations
// post and comments belong to the users
// the posts can have many comments

Post.belongsTo(User, {
    foreignKey: 'user_id'
});
Comment.belongsTo(User, {
    foreignKey: 'user_id'
});
Post.hasMany(Comment,{
    foreignKey:'post_id'

});

module.exports = { User, Post, Comment };
