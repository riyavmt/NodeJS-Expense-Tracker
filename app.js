const path = require("path");
const express = require("express");
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const expenseRouter = require('./Backend/routes/expense');
const sequelize = require('./Backend/util/database');



app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(expenseRouter);

sequelize.sync({force:false})
.then(app.listen(3000,()=>{
    console.log("Server is Running!")
}))
.catch(err=>{console.log(err)});