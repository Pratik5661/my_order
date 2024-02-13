const express = require("express");

const registrationController = require("../controller/registration");
const loginController = require("../controller/login");
const getUserController = require("../controller/getUser");
const editUserController = require("../controller/editUser");
const orderController = require("../controller/order");
const getOrdersController = require('../controller/getOrder');
const getOrdersByUser = require('../controller/getUserOrder');

const router = express.Router();

// Registration Route || POST
router.post("/registration", registrationController);

// Login Route || POST
router.post("/login", loginController);

// Get User Details || GET
router.get("/getUser", getUserController);

// Edit user || PUT
router.put("/editUser/:id", editUserController);

// Order Route || POST
router.post("/createOrder", orderController);

// Get Orders || GET
router.get('/getOrders', getOrdersController);

// Get Orders By User
router.get('/getOrdersByUser/:userId', getOrdersByUser);

module.exports = router;
