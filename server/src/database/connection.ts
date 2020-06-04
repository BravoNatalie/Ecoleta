import knex from 'knex'; // padroniza a linguagem de consulta ao banco de dados
import path from 'path';

const connection = knex({
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname, 'database.sqlite'), // padroniza os caminhos (windows '/' e linux '\')
    },
    useNullAsDefault: true, // hide warning: sqlite does not support inserting default values
});

export default connection;