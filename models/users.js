const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
	name: {
		type: String,
		require: true,
		trim: true
	},
	email: {
		type: String,
		require: true,
	},
	password: {
		type: String,
		required: true
	},
	answer: {
		type: String,
		required: true
	},
	isAdmin: {
		type: Boolean,
		default: false
	},
},
	{ timestamps: true },
);

const userModel = mongoose.model('users', userSchema, 'users');
module.exports = userModel;