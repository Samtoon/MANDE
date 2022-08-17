import { Pool } from 'pg'

let conn

if (!conn) {
  conn = new Pool({
    user: 'qqkxpifoqytwrt',
    password: 'f0a244a447a30c79382b990e5e8e58e3cccb69dc99f49c3bd17bb8ab49a969dc',
    host: 'ec2-44-193-178-122.compute-1.amazonaws.com',
    port: 5432,
    database: 'dcnkc7qf3m870c',
    ssl: {
      rejectUnauthorized: false
    }
  })
}

console.log(conn.query('SELECT NOW()'))

export { conn }