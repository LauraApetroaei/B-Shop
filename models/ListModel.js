var List = function(Mongoose) {
	var schema = Mongoose.Schema({
       title: String,
       owner: Mongoose.Schema.Types.ObjectId,
       status: Number,
       created: Date,
       deadline: Date,
       users: [{ type: Mongoose.Schema.Types.ObjectId, ref: 'User' }],
       products: [{
       		name: String,
       		quantity: Number,
       		comment: {
       			userID: [Mongoose.Schema.Types.ObjectId],
       			text: String,
       			created: Date
       		}
       }],
       event: String,
       eventDate: Date
	});

	var List = Mongoose.model("List", schema);
    return List;
};

module.exports = List;
