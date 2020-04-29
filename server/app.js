const express = require('express');
const graphqlHTTP = require('express-graphql')
const schema = require('./schema/schema');
const mongoose = require('mongoose');

const app = express();

mongoose.connect(
    'mongodb+srv://vishal:Ronil%401996@vishal-v8jx2.mongodb.net/test?retryWrites=true&w=majority',
    {useNewUrlParser:true}
    );
mongoose.connection.once('open',() => {
    console.log('connected to database');
})

//middleware express-graphql so that express server understands graphql
//Moreover this will also be the entry point for the graphql
app.use('/graphql',graphqlHTTP({
    schema: schema,
    graphiql: true
}));

app.listen(3000,() => console.log('Listening on port 3000'));