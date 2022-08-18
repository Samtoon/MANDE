import { pool } from 'utils/database'

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {

  try {
    const response = await pool.query(`SELECT NOW();`)

    res.status(200).json(`Conectado a la base de datos. ${response.rows[0].now}.`)

  } catch (error) {
    res.status(400).json(`La base de datos no responde.`)
  }
}