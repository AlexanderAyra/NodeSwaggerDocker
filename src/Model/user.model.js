const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'El nombre es obligatorio'],
            trim: true
        },
        lastname: {
            type: String,
            required: [true, 'El apellido es obligatorio'],
            trim: true
        },
        email: {
            type: String,
            required: [true, 'El correo es obligatorio'],
            unique: true,
            trim: true,
            lowercase: true,
            validate(value) {
                if (!validator.isEmail(value)) {
                    throw new Error('Correo Invalido')
                }
            }
        },
        password: {
            type: String,
            required: [true, 'La contraseña es obligatoria'],
            trim: true,
            minlength: 8,
            validate(value) {
                if (!value.match(/\d/) || !value.match(/[a-zA-Z]/)) {
                    throw new Error('La contraseña debe contener al menos una letra y un número');
                }
            },
            private: true
        },
        role: {
            type: String,
            required: true,
            default: 'USER_ROLE'
        },
        isEmailVerified: {
            type: Boolean,
            default: false
        },
    },
    {
        timestamps: true
    }
);

userSchema.plugin(toJSON);
userSchema.plugin(paginate);

userSchema.methods.toJSON = function () {
    const { __v, password, _id, ...usuario } = this.toObject();
    return usuario;
}

module.exports = mongoose.model('User', userSchema);