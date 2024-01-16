"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateUserById = exports.getUsers = exports.getUserById = exports.deleteUserById = exports.createNewUser = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _database = require("../database");
var _mssql = _interopRequireDefault(require("mssql"));
var getUsers = exports.getUsers = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var pool, result;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return (0, _database.getConnection)();
        case 3:
          pool = _context.sent;
          _context.next = 6;
          return pool.request().query(_database.userQueries.getAllUsers);
        case 6:
          result = _context.sent;
          res.json(result.recordset);
          _context.next = 14;
          break;
        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](0);
          res.status(500);
          res.send(_context.t0.message);
        case 14:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 10]]);
  }));
  return function getUsers(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var createNewUser = exports.createNewUser = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var _req$body, user_id, user_name, user_lastname, user_email, user_role, user_password, pool;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _req$body = req.body, user_id = _req$body.user_id, user_name = _req$body.user_name, user_lastname = _req$body.user_lastname, user_email = _req$body.user_email, user_role = _req$body.user_role, user_password = _req$body.user_password;
          if (!(user_id == null || user_name == null || user_lastname == null || user_email == null || user_role == null || user_password == null)) {
            _context2.next = 3;
            break;
          }
          return _context2.abrupt("return", res.status(400).json({
            message: "Bad Request. Please fill all fields"
          }));
        case 3:
          _context2.prev = 3;
          _context2.next = 6;
          return (0, _database.getConnection)();
        case 6:
          pool = _context2.sent;
          _context2.next = 9;
          return pool.request().input("user_id", _mssql["default"].Int, user_id).input("user_name", _mssql["default"].VarChar, user_name).input("user_lastname", _mssql["default"].VarChar, user_lastname).input("user_email", _mssql["default"].VarChar, user_email).input("user_role", _mssql["default"].Int, user_role).input("user_password", _mssql["default"].VarChar, user_password).query(_database.userQueries.addNewUser);
        case 9:
          res.json({
            user_id: user_id,
            user_name: user_name,
            user_lastname: user_lastname,
            user_email: user_email,
            user_role: user_role,
            user_password: user_password
          });
          _context2.next = 16;
          break;
        case 12:
          _context2.prev = 12;
          _context2.t0 = _context2["catch"](3);
          res.status(500);
          res.send(_context2.t0.message);
        case 16:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[3, 12]]);
  }));
  return function createNewUser(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var getUserById = exports.getUserById = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var user_id, pool, result;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          user_id = req.params.user_id;
          _context3.next = 3;
          return (0, _database.getConnection)();
        case 3:
          pool = _context3.sent;
          _context3.next = 6;
          return pool.request().input("user_id", _mssql["default"].Int, user_id).query(_database.userQueries.getUserById);
        case 6:
          result = _context3.sent;
          res.json(result.recordset[0]);
        case 8:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return function getUserById(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
var deleteUserById = exports.deleteUserById = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var user_id, pool, result;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          user_id = req.params.user_id;
          _context4.next = 3;
          return (0, _database.getConnection)();
        case 3:
          pool = _context4.sent;
          _context4.next = 6;
          return pool.request().input("user_id", _mssql["default"].Int, user_id).query(_database.userQueries.deleteUserById);
        case 6:
          result = _context4.sent;
          res.sendStatus(204);
        case 8:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return function deleteUserById(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
var updateUserById = exports.updateUserById = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var _req$body2, user_name, user_lastname, user_email, user_role, user_password, user_id, pool, result;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _req$body2 = req.body, user_name = _req$body2.user_name, user_lastname = _req$body2.user_lastname, user_email = _req$body2.user_email, user_role = _req$body2.user_role, user_password = _req$body2.user_password;
          user_id = req.params.user_id;
          if (!(user_name == null || user_lastname == null || user_email == null || user_role == null || user_password == null)) {
            _context5.next = 4;
            break;
          }
          return _context5.abrupt("return", res.status(400).json({
            message: "Bad Request. Please fill all fields"
          }));
        case 4:
          _context5.next = 6;
          return (0, _database.getConnection)();
        case 6:
          pool = _context5.sent;
          _context5.next = 9;
          return pool.request().input("user_name", _mssql["default"].VarChar, user_name).input("user_lastname", _mssql["default"].VarChar, user_lastname).input("user_email", _mssql["default"].VarChar, user_email).input("user_role", _mssql["default"].Int, user_role).input("user_password", _mssql["default"].VarChar, user_password).input("user_id", _mssql["default"].Int, user_id).query(_database.userQueries.updateUserById);
        case 9:
          result = _context5.sent;
          res.json({
            user_name: user_name,
            user_lastname: user_lastname,
            user_email: user_email,
            user_role: user_role,
            user_password: user_password
          });
        case 11:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));
  return function updateUserById(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();