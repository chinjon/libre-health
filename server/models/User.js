import mongoose from 'mongoose';

let Schema = mongoose.Schema;

const UserSchema = new Schema({
  userName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  medications: {
    type: Array,
    required: false
  }
})

const User = mongoose.model("User, UserSchema");

export default User;
