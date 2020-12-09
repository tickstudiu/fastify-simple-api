const {app, connection} = require('./app')

connection.once("open", () => {
    app.listen(process.env.APP_PORT, () => {
        console.log("server is running on port", process.env.APP_PORT);
    });
});