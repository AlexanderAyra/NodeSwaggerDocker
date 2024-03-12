const { Router } = require('express');
const userRoute = require('./user.route');

const router = Router();

const defaultRoute = [
    {
        path: '/user',
        route: userRoute
    }
]

defaultRoute.forEach((route) => {
    router.use(route.path, route.route);
})

module.exports = router;