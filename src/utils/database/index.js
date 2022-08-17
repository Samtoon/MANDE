import { Pool } from 'pg'

let conn

if (!conn) {
  conn = new Pool({
    user: 'iyhodmleuapojt',
    password: '71ae51b3a9149e9cd5c264776a7d297733bfbe1033a8b4ec85d8ade486c8c72c',
    host: 'ec2-52-44-13-158.compute-1.amazonaws.com',
    port: 5432,
    database: 'd3m3lc4m466r71',
    ssl: {
      rejectUnauthorized: false
    }
  })
}

console.log(conn.query('SELECT NOW()'))

export { conn }