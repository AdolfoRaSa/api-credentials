"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _users = require("../controllers/users.controllers");
var router = (0, _express.Router)();
router.get("/users", _users.getUsers);
router.get("/users/:user_id", _users.getUserById);
router.post("/users", _users.createNewUser);
router["delete"]("/users/:user_id", _users.deleteUserById);
router.put("/users/:user_id", _users.updateUserById);
var _default = exports["default"] = router;