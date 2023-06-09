const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
	{
		firstName: { type: String, required: true },
		lastName: { type: String, required: true },
		email: { type: String, required: true, unique: true },
		password: { type: String, required: true },
		gender: {type:String, required:true},
		country: {type:String, required:true},
		checkbox:[
			{
				type:String,
				require:true
			}
		]

	},
)

const model = mongoose.model('ReplicaUserInfo', userSchema)

module.exports = model
