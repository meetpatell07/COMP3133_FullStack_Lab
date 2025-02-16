const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        minlength: 4
    },
    email: {
        type: String,
        required: true,
        validate: [validator.isEmail, "Invalid email format"]
    },
    address: {
        street: { type: String, required: true },
        suite: { type: String, required: true },
        city: {
            type: String,
            required: true,
            validate: {
                validator: function (value) {
                    return /^[A-Za-z\s]+$/.test(value);
                },
                message: "City name can only contain letters and spaces"
            }
        },
        zipcode: {
            type: String,
            required: true,
            validate: {
                validator: function (value) {
                    return /^\d{5}-\d{4}$/.test(value);
                },
                message: "Zip code must be in the format DDDDD-DDDD"
            }
        },
        geo: {
            lat: { type: String, required: true },
            lng: { type: String, required: true }
        }
    },
    phone: {
        type: String,
        required: true,
        validate: {
            validator: function (value) {
                return /^1-\d{3}-\d{3}-\d{4}$/.test(value);
            },
            message: "Phone number must be in format 1-XXX-XXX-XXXX"
        }
    },
    website: {
        type: String,
        required: true,
        validate: [validator.isURL, "Invalid website URL"]
    },
    company: {
        name: { type: String, required: true },
        catchPhrase: { type: String, required: true },
        bs: { type: String, required: true }
    }
});

module.exports = mongoose.model('User', userSchema);
