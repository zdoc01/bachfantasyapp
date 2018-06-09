import mongoose from 'mongoose';
import bcrypt from 'bcrypt-nodejs';

// mongoose is a commonjs module
// (import with object destructuring throws)
const Schema = mongoose.Schema; /* eslint-disable-line prefer-destructuring */

const encryptPass = password => bcrypt.hashSync(password);

const userSchema = Schema({
  password: { type: String, set: encryptPass },
  username: String,
});

userSchema.methods.validatePassword = function validatePassword(password) {
  return bcrypt.compareSync(password, this.password);
};

/**
 * Override toJSON to ensure we don't send the password
 * to the client.
 * @return {JSON} The user data
 */
userSchema.methods.toJSON = function toJSON() {
  const obj = this.toObject();
  delete obj.password;
  return obj;
};

export default mongoose.model('User', userSchema);
