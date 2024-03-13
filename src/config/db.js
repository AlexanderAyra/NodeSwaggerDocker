const { connect } = require('mongoose');

const conectDB = async () => {
    try {
        await connect(process.env.MONGODB_URL);
        console.log('Base de datos online');
    } catch (error) {
        console.log(error);
        throw new Error('Error a la hora de iniciar la base de datos');
    }
}

module.exports = {
    conectDB
}