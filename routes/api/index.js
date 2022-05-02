const router = require('express').Router();
const pizzaRoutes = require('./pizza-routes');

// add prefix to `/pizzas` to routes in `pizza-routes.js`

router.use('/pizzas', pizzaRoutes);

module.exports = router;