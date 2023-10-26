// import knex from "knex"

// const client = knex({
//   client: "mysql2",
//   connection: {
//     // userName: "dancer",
//     // password: "shackshack12",
//     // host: "52.78.156.134",
//     // database: "dance",
//     // port: 3306,
    
//     connectionString: "mysql://dancer:shackshack12@52.78.156.134:3306/dance",
//   },
// })

// const res = await client.select("*").from("User")

// console.log(res)

import mysql from "mysql2/promise"
import bluebird from "bluebird"

const connection = await mysql.createConnection({
  Promise: bluebird,
  // user: "dancer",
  // password: "shackshack12",
  // host: "52.78.156.134",
  // // database: "dance",
  // port: 3306
  uri: "mysql://dancer:shackshack12@52.78.156.134:3306/",
})

const res = await connection.execute(
  'SELECT * FROM `User`',
)

console.log(res)