import mongoose, { Schema } from 'mongoose';
import bcrypt from 'bcrypt-nodejs';

const encryptPass = password => {
	return bcrypt.hashSync(password);
};

const userSchema = Schema({
	password: { type: String, set: encryptPass },
	username: String
});

userSchema.methods.validatePassword = function (password) {
	return bcrypt.compareSync(password, this.password);
};
	
/**
 * Override toJSON to ensure we don't send the password
 * to the client.
 * @return {JSON} The user data
 */
userSchema.methods.toJSON = function() {
	let obj = this.toObject();
	delete obj.password;
	return obj;
};

export default mongoose.model('User', userSchema);