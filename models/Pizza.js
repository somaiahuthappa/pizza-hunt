const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const PizzaSchema = new Schema({
    pizzaName: {
        type: String,
        required: true,
        trim: true
    },
    createdBy: {
        type: String,
        required: true,
        trim: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (createdAtVal) => dateFormat(createdAtVal)
    },
    size: {
        type: String,
        required: true,
        // enum: enumerable. Refers to a set of data
        enum: ['Personal', 'Small', 'Medium', 'Large', 'Extra Large'],
        default: 'Large'
    },
    toppings: [],
    comments: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Comment'
        }
    ]
},
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }

);

// get total count of comments and replies on retreival
// reduce() tallies comments with replies. Takes 2 parametes, an accumulator and currentValue.
// accumulator is total, currentValue is comment
// as reduce() walks through array, it passes the accumulating total and current value of comment into the function
// return revises the total for the next iteration through the array
PizzaSchema.virtual('commentCount').get(function () {
    return this.comments.reduce(
        (total, comment) => total + comment.replies.length + 1, 0);
});

// create the pizza model using PizzaSchema
const Pizza = model('Pizza', PizzaSchema);

// export the Pizza model
module.exports = Pizza;