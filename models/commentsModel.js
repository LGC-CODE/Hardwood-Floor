var mongoose = require('mongoose');

var commentsSchema = new mongoose.Schema({
	name: String,
	comment: String,
	isLiked: {type: Boolean, default: ''},
	upvotes: { type: Number, default: 0 },
	articleRef: { type: mongoose.Schema.Types.ObjectId, ref: 'articlesModel' }
});

mongoose.model('commentsModel', commentsSchema);
