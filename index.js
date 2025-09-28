const jsonServer = require("json-server"); // Note: this version is 0.17.4, any newer version won't work
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);

// Custom middleware to log requests
// can be used to filter something
// server.use((req, res, next) => {
//     console.log('Request received:', req.method, req.url);
//     next();
// });

server.use(router);
server.listen(3000, () => {
    console.log('JSON Server is running on http://127.0.0.1:3000');
});