"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VolService = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var BASE_URL = 'https://intech-airfrance-api.herokuapp.com';

var VolService =
/*#__PURE__*/
function () {
  function VolService() {
    _classCallCheck(this, VolService);
  }

  _createClass(VolService, [{
    key: "getVols",
    value: function getVols() {
      return fetch("".concat(BASE_URL, "/vols")).then(function (response) {
        return response.json();
      }).then(function (response) {
        return response.data;
      });
    }
  }]);

  return VolService;
}();

exports.VolService = VolService;