import {createPool} from 'mysql2/promise'

export const pool = createPool({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'tasksdb'
})

async function main() {
    try {
        const connection = await pool.getConnection();
        console.log('Conectados a MySQL Server');
    } catch (error) {
        console.error('Error al conectar con la base de datos: ', error)
    }
}

main()