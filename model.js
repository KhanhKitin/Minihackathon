const mongoose = require('mongoose');
const PointSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    round: {
        type: Number,
        default: 0,
    },
    point: {
        type: Number,
        default: 0,
    }
});

const pointModel = mongoose.model('Point',PointSchema);
module.exports = pointModel;