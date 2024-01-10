"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkwww"] = self["webpackChunkwww"] || []).push([
  ["index_ts"],
  {
    /***/ "../pkg/snake_game.js":
      /*!****************************!*\
  !*** ../pkg/snake_game.js ***!
  \****************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Direction: () => (/* binding */ Direction),\n/* harmony export */   GameStatus: () => (/* binding */ GameStatus),\n/* harmony export */   World: () => (/* binding */ World),\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _snippets_snake_game_027f5cd2d64d2885_www_utils_rnd_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./snippets/snake_game-027f5cd2d64d2885/www/utils/rnd.js */ "../pkg/snippets/snake_game-027f5cd2d64d2885/www/utils/rnd.js");\n\n\nlet wasm;\n\nlet cachedTextDecoder = new TextDecoder(\'utf-8\', { ignoreBOM: true, fatal: true });\n\ncachedTextDecoder.decode();\n\nlet cachegetUint8Memory0 = null;\nfunction getUint8Memory0() {\n    if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== wasm.memory.buffer) {\n        cachegetUint8Memory0 = new Uint8Array(wasm.memory.buffer);\n    }\n    return cachegetUint8Memory0;\n}\n\nfunction getStringFromWasm0(ptr, len) {\n    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));\n}\n\nlet cachegetInt32Memory0 = null;\nfunction getInt32Memory0() {\n    if (cachegetInt32Memory0 === null || cachegetInt32Memory0.buffer !== wasm.memory.buffer) {\n        cachegetInt32Memory0 = new Int32Array(wasm.memory.buffer);\n    }\n    return cachegetInt32Memory0;\n}\n/**\n*/\nconst Direction = Object.freeze({ Up:0,"0":"Up",Right:1,"1":"Right",Down:2,"2":"Down",Left:3,"3":"Left", });\n/**\n*/\nconst GameStatus = Object.freeze({ Won:0,"0":"Won",Lost:1,"1":"Lost",Played:2,"2":"Played", });\n/**\n*/\nclass World {\n\n    static __wrap(ptr) {\n        const obj = Object.create(World.prototype);\n        obj.ptr = ptr;\n\n        return obj;\n    }\n\n    __destroy_into_raw() {\n        const ptr = this.ptr;\n        this.ptr = 0;\n\n        return ptr;\n    }\n\n    free() {\n        const ptr = this.__destroy_into_raw();\n        wasm.__wbg_world_free(ptr);\n    }\n    /**\n    * @param {number} width\n    * @param {number} snake_idx\n    * @returns {World}\n    */\n    static new(width, snake_idx) {\n        var ret = wasm.world_new(width, snake_idx);\n        return World.__wrap(ret);\n    }\n    /**\n    * @returns {number}\n    */\n    width() {\n        var ret = wasm.world_width(this.ptr);\n        return ret >>> 0;\n    }\n    /**\n    * @returns {number}\n    */\n    points() {\n        var ret = wasm.world_points(this.ptr);\n        return ret >>> 0;\n    }\n    /**\n    * @returns {number | undefined}\n    */\n    reward_cell() {\n        try {\n            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);\n            wasm.world_reward_cell(retptr, this.ptr);\n            var r0 = getInt32Memory0()[retptr / 4 + 0];\n            var r1 = getInt32Memory0()[retptr / 4 + 1];\n            return r0 === 0 ? undefined : r1 >>> 0;\n        } finally {\n            wasm.__wbindgen_add_to_stack_pointer(16);\n        }\n    }\n    /**\n    * @returns {number}\n    */\n    snake_head_idx() {\n        var ret = wasm.world_snake_head_idx(this.ptr);\n        return ret >>> 0;\n    }\n    /**\n    */\n    start_game() {\n        wasm.world_start_game(this.ptr);\n    }\n    /**\n    * @returns {number | undefined}\n    */\n    game_status() {\n        var ret = wasm.world_game_status(this.ptr);\n        return ret === 3 ? undefined : ret;\n    }\n    /**\n    * @returns {string}\n    */\n    game_status_text() {\n        try {\n            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);\n            wasm.world_game_status_text(retptr, this.ptr);\n            var r0 = getInt32Memory0()[retptr / 4 + 0];\n            var r1 = getInt32Memory0()[retptr / 4 + 1];\n            return getStringFromWasm0(r0, r1);\n        } finally {\n            wasm.__wbindgen_add_to_stack_pointer(16);\n            wasm.__wbindgen_free(r0, r1);\n        }\n    }\n    /**\n    * @param {number} direction\n    */\n    change_snake_dir(direction) {\n        wasm.world_change_snake_dir(this.ptr, direction);\n    }\n    /**\n    * @returns {number}\n    */\n    snake_length() {\n        var ret = wasm.world_snake_length(this.ptr);\n        return ret >>> 0;\n    }\n    /**\n    * @returns {number}\n    */\n    snake_cells() {\n        var ret = wasm.world_snake_cells(this.ptr);\n        return ret;\n    }\n    /**\n    */\n    step() {\n        wasm.world_step(this.ptr);\n    }\n}\n\nasync function load(module, imports) {\n    if (typeof Response === \'function\' && module instanceof Response) {\n        if (typeof WebAssembly.instantiateStreaming === \'function\') {\n            try {\n                return await WebAssembly.instantiateStreaming(module, imports);\n\n            } catch (e) {\n                if (module.headers.get(\'Content-Type\') != \'application/wasm\') {\n                    console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\\n", e);\n\n                } else {\n                    throw e;\n                }\n            }\n        }\n\n        const bytes = await module.arrayBuffer();\n        return await WebAssembly.instantiate(bytes, imports);\n\n    } else {\n        const instance = await WebAssembly.instantiate(module, imports);\n\n        if (instance instanceof WebAssembly.Instance) {\n            return { instance, module };\n\n        } else {\n            return instance;\n        }\n    }\n}\n\nasync function init(input) {\n    if (typeof input === \'undefined\') {\n        input = new URL(/* asset import */ __webpack_require__(/*! snake_game_bg.wasm */ "../pkg/snake_game_bg.wasm"), __webpack_require__.b);\n    }\n    const imports = {};\n    imports.wbg = {};\n    imports.wbg.__wbg_rnd_35b7252a65e59f47 = function(arg0) {\n        var ret = (0,_snippets_snake_game_027f5cd2d64d2885_www_utils_rnd_js__WEBPACK_IMPORTED_MODULE_0__.rnd)(arg0 >>> 0);\n        return ret;\n    };\n    imports.wbg.__wbindgen_throw = function(arg0, arg1) {\n        throw new Error(getStringFromWasm0(arg0, arg1));\n    };\n\n    if (typeof input === \'string\' || (typeof Request === \'function\' && input instanceof Request) || (typeof URL === \'function\' && input instanceof URL)) {\n        input = fetch(input);\n    }\n\n\n\n    const { instance, module } = await load(await input, imports);\n\n    wasm = instance.exports;\n    init.__wbindgen_wasm_module = module;\n\n    return wasm;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (init);\n\n\n\n//# sourceURL=webpack://www/../pkg/snake_game.js?'
        );

        /***/
      },

    /***/ "../pkg/snippets/snake_game-027f5cd2d64d2885/www/utils/rnd.js":
      /*!********************************************************************!*\
  !*** ../pkg/snippets/snake_game-027f5cd2d64d2885/www/utils/rnd.js ***!
  \********************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   rnd: () => (/* binding */ rnd)\n/* harmony export */ });\n\n\nfunction rnd(max) {\n  return Math.floor(Math.random() * max);\n}\n\n\n//# sourceURL=webpack://www/../pkg/snippets/snake_game-027f5cd2d64d2885/www/utils/rnd.js?"
        );

        /***/
      },

    /***/ "./index.ts":
      /*!******************!*\
  !*** ./index.ts ***!
  \******************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var snake_game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! snake_game */ "../pkg/snake_game.js");\n/* harmony import */ var _utils_rnd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/rnd */ "./utils/rnd.js");\n\n\n(0,snake_game__WEBPACK_IMPORTED_MODULE_1__["default"])().then(function (wasm) {\n    var CELL_SIZE = 20;\n    var WORLD_WIDTH = 8;\n    var snakeSpawnIdx = (0,_utils_rnd__WEBPACK_IMPORTED_MODULE_0__.rnd)(WORLD_WIDTH * WORLD_WIDTH);\n    var world = snake_game__WEBPACK_IMPORTED_MODULE_1__.World.new(WORLD_WIDTH, snakeSpawnIdx);\n    var worldWidth = world.width();\n    var points = document.getElementById("points");\n    var gameStatus = document.getElementById("game-status");\n    var gameControlBtn = document.getElementById("game-control-btn");\n    var canvas = document.getElementById("snake-canvas");\n    var ctx = canvas.getContext("2d");\n    canvas.height = worldWidth * CELL_SIZE;\n    canvas.width = worldWidth * CELL_SIZE;\n    gameControlBtn.addEventListener("click", function (_) {\n        var status = world.game_status();\n        if (status === undefined) {\n            gameControlBtn.textContent = "Playing...";\n            world.start_game();\n            play();\n        }\n        else {\n            location.reload();\n        }\n    });\n    document.addEventListener("keydown", function (e) {\n        switch (e.code) {\n            case "ArrowUp":\n                world.change_snake_dir(snake_game__WEBPACK_IMPORTED_MODULE_1__.Direction.Up);\n                break;\n            case "ArrowRight":\n                world.change_snake_dir(snake_game__WEBPACK_IMPORTED_MODULE_1__.Direction.Right);\n                break;\n            case "ArrowDown":\n                world.change_snake_dir(snake_game__WEBPACK_IMPORTED_MODULE_1__.Direction.Down);\n                break;\n            case "ArrowLeft":\n                world.change_snake_dir(snake_game__WEBPACK_IMPORTED_MODULE_1__.Direction.Left);\n                break;\n        }\n    });\n    function drawWorld() {\n        ctx.beginPath();\n        for (var x = 0; x < worldWidth + 1; x++) {\n            ctx.moveTo(CELL_SIZE * x, 0);\n            ctx.lineTo(CELL_SIZE * x, worldWidth * CELL_SIZE);\n        }\n        for (var y = 0; y < worldWidth + 1; y++) {\n            ctx.moveTo(0, CELL_SIZE * y);\n            ctx.lineTo(worldWidth * CELL_SIZE, CELL_SIZE * y);\n        }\n        ctx.stroke();\n    }\n    function drawReward() {\n        var idx = world.reward_cell();\n        var col = idx % worldWidth;\n        var row = Math.floor(idx / worldWidth);\n        ctx.beginPath();\n        ctx.fillStyle = "#FF0000";\n        ctx.fillRect(col * CELL_SIZE, row * CELL_SIZE, CELL_SIZE, CELL_SIZE);\n        ctx.stroke();\n    }\n    function drawSnake() {\n        var snakeCells = new Uint32Array(wasm.memory.buffer, world.snake_cells(), world.snake_length());\n        snakeCells\n            .slice()\n            .reverse()\n            .forEach(function (cellIdx, i) {\n            var col = cellIdx % worldWidth;\n            var row = Math.floor(cellIdx / worldWidth);\n            ctx.fillStyle = i === snakeCells.length - 1 ? "#7878db" : "#000000";\n            ctx.beginPath();\n            ctx.fillRect(col * CELL_SIZE, row * CELL_SIZE, CELL_SIZE, CELL_SIZE);\n        });\n        ctx.stroke();\n    }\n    function drawGameStatus() {\n        gameStatus.textContent = world.game_status_text();\n        points.textContent = world.points().toString();\n    }\n    function paint() {\n        drawWorld();\n        drawSnake();\n        drawReward();\n        drawGameStatus();\n    }\n    function play() {\n        var status = world.game_status();\n        if (status == snake_game__WEBPACK_IMPORTED_MODULE_1__.GameStatus.Won || status == snake_game__WEBPACK_IMPORTED_MODULE_1__.GameStatus.Lost) {\n            gameControlBtn.textContent = "Re-Play";\n            return;\n        }\n        var fps = 3;\n        setTimeout(function () {\n            console.log("Playing!");\n            ctx.clearRect(0, 0, canvas.width, canvas.height);\n            world.step();\n            paint();\n            // the method takes a callback to invoked before the next repaint\n            requestAnimationFrame(play);\n        }, 1000 / fps);\n    }\n    paint();\n});\n\n\n//# sourceURL=webpack://www/./index.ts?'
        );

        /***/
      },

    /***/ "./utils/rnd.js":
      /*!**********************!*\
  !*** ./utils/rnd.js ***!
  \**********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   rnd: () => (/* binding */ rnd)\n/* harmony export */ });\n\n\nfunction rnd(max) {\n  return Math.floor(Math.random() * max);\n}\n\n\n//# sourceURL=webpack://www/./utils/rnd.js?"
        );

        /***/
      },

    /***/ "../pkg/snake_game_bg.wasm":
      /*!*********************************!*\
  !*** ../pkg/snake_game_bg.wasm ***!
  \*********************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          'module.exports = __webpack_require__.p + "cd17b9cdc573a69c7f57.wasm";\n\n//# sourceURL=webpack://www/../pkg/snake_game_bg.wasm?'
        );

        /***/
      },
  },
]);
