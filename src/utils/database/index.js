const { Pool } = require('pg')

let pool
let test
if (!pool) {
  pool = new Pool({
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
pool.query('SELECT nombre from  servicio', (err,result)=>{
  if(err){
    console.error(err.stack)
  }
  //result.rows.map((row)=>{console.log(row.nombre)})
  console.log(result.rows)
  test=result.rows
})
console.log('bien')
//pool.end()

export async function getServerSideProps(context){
  pool.query('SELECT nombre from  servicio', (err,result)=>{
    if(err){
      console.error(err.stack)
    }
    //result.rows.map((row)=>{console.log(row.nombre)})
    console.log(result.rows)
    test=result.rows
  })
  return {props: {result: test}}
}


module.exports = {pool,test}