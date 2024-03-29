'use strict'
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value)
          })
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value))
        } catch (e) {
          reject(e)
        }
      }
      function rejected(value) {
        try {
          step(generator['throw'](value))
        } catch (e) {
          reject(e)
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected)
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next())
    })
  }
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
const http_status_1 = __importDefault(require('http-status'))
const verifyBatch = (req, res, next) =>
  __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c, _d
    const { batch } = req.user
    const semesterBatch =
      ((_b =
        (_a = req.params) === null || _a === void 0
          ? void 0
          : _a.semesterId) === null || _b === void 0
        ? void 0
        : _b.substring(0, 4)) ||
      ((_d =
        (_c = req.body) === null || _c === void 0 ? void 0 : _c.semesterId) ===
        null || _d === void 0
        ? void 0
        : _d.substring(0, 4))
    if (batch === semesterBatch) {
      next()
    } else {
      const errorResponse = {
        statusCode: http_status_1.default.UNAUTHORIZED,
        success: false,
        message: `You are not a student of batch ${semesterBatch.toString()}`,
      }
      res.status(http_status_1.default.UNAUTHORIZED).json(errorResponse)
    }
  })
exports.default = verifyBatch
