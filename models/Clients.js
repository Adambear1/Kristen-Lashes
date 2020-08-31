const mongoose = require("mongoose");
const ClientsSchema = mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: [true, "Name Required"],
  },
  address: {
    type: String,
    trim: true,
    required: [true, "Address Required"],
  },
  email: {
    type: String,
    match: [
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      `Please Fill Valid Email Address`,
    ],
    trim: true,
    required: [true, "Email Required"],
  },
  phone: {
    type: String,
    validate: {
      validator: function (v) {
        var re = /^\d{10}$/;
        return v == null || v.trim().length < 1 || re.test(v);
      },
      message: "Provided phone number is invalid.",
    },
    trim: true,
    required: [true, "Name Required"],
  },
});

const Clients = mongoose.model("clients", ClientsSchema);

module.exports = Clients;
