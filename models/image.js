const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Comment = require('./comment')

const ImageSchema = new Schema({
    image: String,
    caption: String,
    comments: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Comment'
        }
    ]
});

// Middleware (delete cascade - deleting an image/post will delete all the comments)
ImageSchema.post('findOneAndDelete', async function(deletedDoc) {
    if (deletedDoc) {
        await Comment.deleteMany({
            _id: {
                $in: deletedDoc.comments
            }
        })
    }
    console.log('DELETED!', deletedDoc)
})

module.exports = mongoose.model('Image', ImageSchema);