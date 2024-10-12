const connection = require('./connection');

const getAll = async () => {
    const [produtos] = await connection.execute('SELECT * FROM produtos');
    return produtos;
};


module.exports = {
    getAll,
};
