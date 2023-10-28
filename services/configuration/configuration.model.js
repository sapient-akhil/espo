const mongoose = require("mongoose");

const configurationModel = new mongoose.Schema(
  {
    configuration_id: {
      type: String,
      require: [true, "Configuration Id is required"],
    },
    role: [
      {
        role_id: {
          type: String,
          required: [true, "Role id is required"],
        },
        role_name: {
          type: String,
          required: true,
        },
      },
    ],
    venue_type: {
      type: Array,
      required: true,
    },
    venue_size: {
      type: Array,
      required: true,
    },
    event_type: {
      type: Array,
      required: true,
    },
    policy: {
      type: String,
      required: true,
    },
    active: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("configurations", configurationModel);
