const mongoose = require('mongoose');

const MemberSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    membershipType: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Member', MemberSchema);
