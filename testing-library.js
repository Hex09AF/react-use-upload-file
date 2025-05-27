"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var bun_test_1 = require("bun:test");
var react_1 = require("@testing-library/react");
var matchers = tslib_1.__importStar(require("@testing-library/jest-dom/matchers"));
bun_test_1.expect.extend(matchers);
// Optional: cleans up `render` after each test
(0, bun_test_1.afterEach)(function () {
    (0, react_1.cleanup)();
});
