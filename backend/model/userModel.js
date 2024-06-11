const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    fname: {
      type: String,
      trim: true,
      require: true,
      text: true,
    },
    lname: {
      type: String,
      trim: true,
      require: true,
      text: true,
    },
    username: {
      type: String,
      trim: true,
      require: true,
      text: true,
      unique: true,
    },
    email: {
      type: String,
      trim: true,
      require: true,
    },
    password: {
      type: String,
      require: true,
    },
    profilePic: {
      type: String,
      require: true,
      default: "",
    },
    cover: {
      type: String,
      require: true,
    },
    birthDate: {
      type: Date,
      require: true,
    },
    gender: {
      type: String,
      require: true,
    },
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    followers: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    following: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    requeste: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    search: [
      {
        user: {
          type: Schema.Types.ObjectId,
          ref: "User",
        },
        createdAt: {
          type: Date,
          require: true,
        },
      },
    ],
    details: [
      {
        bio: String,
        othername: String,
        job: String,
        currentCity: String,
        workplace: String,
        college: String,
        heighSchoole: String,
        homeTwon: String,
        instagram: String,
        relationship: {
          type: String,
          enum: [
            "single",
            "In A Relationship",
            "It's Complicated",
            "Married",
            "Divorced",
          ],
        },
      },
    ],
    savePost: [
      {
        post: {
          type: Schema.Types.ObjectId,
          ref: "post",
        },
        createdAt: {
          type: Date,
          require: true,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
