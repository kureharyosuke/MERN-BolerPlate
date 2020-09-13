const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    maxlength: 50,
  },
  email: {
    type: String,
    trim: true, //빈칸을 없애는 역할
    unique: 1, //똑같은 이메일은 쓰지 사용하지 못하게 한다.
  },
  password: {
    type: String,
    minlength: 8,
  },
  lastname: {
    type: String,
    maxlength: 50,
  },
  role: {
    type: Number,
    default: 0,
  },
  image: String,
  token: {
    type: String,
  },
  tokenExp: {
    //유효기간
    type: Number,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = { User };
