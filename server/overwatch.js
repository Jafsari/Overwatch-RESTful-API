const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();


app.use(morgan("tiny"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());


const { heroRouter } = require("./routes");
const { abilityRouter } = require("./routes");
const { mapRouter } = require("./routes");
const { mapTypeRouter } = require("./routes");
const { roleRouter } = require("./routes");


app.use("/hero", heroRouter);
app.use("/abilities", abilityRouter);
app.use("/maps", mapRouter);
app.use("/mapTypes", mapTypeRouter);
app.use("/role", roleRouter);


app.use((req,res,next) => {
    const err = new Error("Not Found");
    err.status = 404;
    return next(err);
})

app.use((err,req,res,next) => {
    return res.status(err.status || 500).json({
        message: err.message,
        error: app.get("env") === "development" ? err : {}
    });
});

const PORT = process.env.PORT || 9001;

app.listen(PORT,() => {
    console.log(`Server is listening on ${PORT}`)
})

module.exports = app