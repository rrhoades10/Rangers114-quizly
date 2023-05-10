const express = require('express')
const dotenv = require('dotenv')
const { connectDB } = require('./src/db')
const { graphqlHTTP } = require('express-graphql')
//import for graphql schema
const schema = require('./src/graphql/schema')

dotenv.config()

const app = express()

connectDB()

app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true
}))

app.get("/", (req, res) => {
    res.send('Hello World')
})

app.listen(process.env.PORT, () => {
    console.log(`Server is now running on PORT ${process.env.PORT}`)
})