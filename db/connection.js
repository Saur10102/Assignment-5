
const mongoose = require('mongoose')
mongoose.connect("mongodb+srv://Saurabhkute56:<password>@cluster0.ltz0e7p.mongodb.net/test?retryWrites=true&w=majority")
    .then(res => console.log("Database Connected"))
    .catch(err => console.log("Error : " + err));
//end