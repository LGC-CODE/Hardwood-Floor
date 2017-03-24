var mongoose = require('mongoose');

var articlesSchema = new mongoose.Schema({
	title: String,
	body: String,
	isLiked: {type: Boolean, default: ''},
	upvotes: {type: Number, default: 0},
	img0: String,
	comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'commentsModel' }]
});

mongoose.model('articlesModel', articlesSchema);
