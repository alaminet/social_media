const mongoose = require("mongoose");
const { Schema } = mongoose;

const postModel = new Schema(
  {
    type: {
      type: String,
      enum: ["profilePic", "cover", null],
      default: null,
    },
    images: Array,
    text: String,
    background: String,
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    comments: [
      {
        comment: String,
        image: String,
        commentedBy: {
          type: Schema.Types.ObjectId,
          ref: "User",
        },
        commentedAt: {
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

module.exports = mongoose.model("Post", postModel);
