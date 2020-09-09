"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReservationService = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var BASE_URL = 'https://intech-airfrance-api.herokuapp.com';

var ReservationService =
/*#__PURE__*/
function () {
  function ReservationService() {
    _classCallCheck(this, ReservationService);
  }

  _createClass(ReservationService, [{
    key: "getReservations",
    value: function getReservations(idUtilisateur) {
      var response;
      return regeneratorRuntime.async(function getReservations$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return regeneratorRuntime.awrap(fetch("".concat(BASE_URL, "/reservations/").concat(idUtilisateur)).then(function (response) {
                return response.json();
              }));

            case 2:
              response = _context.sent;
              return _context.abrupt("return", response.data);

            case 4:
            case "end":
              return _context.stop();
          }
        }
      });
    }
  }, {
    key: "addReservation",
    value: function addReservation(idUtilisateur, idVol) {
      var response;
      return regeneratorRuntime.async(function addReservation$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return regeneratorRuntime.awrap(fetch("".concat(BASE_URL, "/reservations/add?idUtilisateur=").concat(idUtilisateur, "&idVol=").concat(idVol)).then(function (response) {
                return response.json();
              }));

            case 2:
              response = _context2.sent;
              return _context2.abrupt("return", response.data);

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      });
    }
  }]);

  return ReservationService;
}();

exports.ReservationService = ReservationService;