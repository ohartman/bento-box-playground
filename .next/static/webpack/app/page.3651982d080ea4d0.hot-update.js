"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./components/LineChart2.tsx":
/*!***********************************!*\
  !*** ./components/LineChart2.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   LineChart2: function() { return /* binding */ LineChart2; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_CartesianGrid_Line_LineChart_ReferenceLine_XAxis_recharts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=CartesianGrid,Line,LineChart,ReferenceLine,XAxis!=!recharts */ \"(app-pages-browser)/./node_modules/recharts/es6/chart/LineChart.js\");\n/* harmony import */ var _barrel_optimize_names_CartesianGrid_Line_LineChart_ReferenceLine_XAxis_recharts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=CartesianGrid,Line,LineChart,ReferenceLine,XAxis!=!recharts */ \"(app-pages-browser)/./node_modules/recharts/es6/cartesian/CartesianGrid.js\");\n/* harmony import */ var _barrel_optimize_names_CartesianGrid_Line_LineChart_ReferenceLine_XAxis_recharts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=CartesianGrid,Line,LineChart,ReferenceLine,XAxis!=!recharts */ \"(app-pages-browser)/./node_modules/recharts/es6/cartesian/XAxis.js\");\n/* harmony import */ var _barrel_optimize_names_CartesianGrid_Line_LineChart_ReferenceLine_XAxis_recharts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=CartesianGrid,Line,LineChart,ReferenceLine,XAxis!=!recharts */ \"(app-pages-browser)/./node_modules/recharts/es6/cartesian/ReferenceLine.js\");\n/* harmony import */ var _barrel_optimize_names_CartesianGrid_Line_LineChart_ReferenceLine_XAxis_recharts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! __barrel_optimize__?names=CartesianGrid,Line,LineChart,ReferenceLine,XAxis!=!recharts */ \"(app-pages-browser)/./node_modules/recharts/es6/cartesian/Line.js\");\n/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-themes */ \"(app-pages-browser)/./node_modules/next-themes/dist/index.mjs\");\n/* harmony import */ var _components_ui_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ui/card */ \"(app-pages-browser)/./components/ui/card.tsx\");\n/* harmony import */ var _components_ui_chart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/ui/chart */ \"(app-pages-browser)/./components/ui/chart.tsx\");\n/* __next_internal_client_entry_do_not_use__ LineChart2 auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n// Chart data with unique \"Epoch\" labels\nconst chartData = [\n    {\n        epoch: \"Epoch 0\",\n        Supply: 373\n    },\n    {\n        epoch: \"Epoch 1\",\n        Supply: 297\n    },\n    {\n        epoch: \"Epoch 2\",\n        Supply: 267\n    },\n    {\n        epoch: \"Epoch 3\",\n        Supply: 242\n    },\n    {\n        epoch: \"Epoch 4\",\n        Supply: 173\n    },\n    {\n        epoch: \"Epoch 5\",\n        Supply: 151\n    },\n    {\n        epoch: \"Epoch 6\",\n        Supply: 101\n    }\n];\n// Configuration for supply line color\nconst chartConfig = {\n    supply: {\n        label: \"Supply\",\n        color: \"teal\"\n    }\n};\nfunction LineChart2() {\n    _s();\n    const { theme } = (0,next_themes__WEBPACK_IMPORTED_MODULE_2__.useTheme)();\n    const lineColor = theme === \"light\" ? \"#000000\" : \"teal\";\n    // Array of objects to display multiple values in each box\n    const infoBoxes = [\n        {\n            title: \"Claims\",\n            max: 9000,\n            min: 1000\n        },\n        {\n            title: \"Claims\",\n            max: 4500,\n            min: 500\n        },\n        {\n            title: \"Claims\",\n            max: 2250,\n            min: 250\n        },\n        {\n            title: \"Claims\",\n            max: 1125,\n            min: 125\n        },\n        {\n            title: \"Claims\",\n            max: 564,\n            min: 66\n        },\n        {\n            title: \"Claims\",\n            max: 282,\n            min: 33\n        },\n        {\n            title: \"Claims\",\n            max: 141,\n            min: 20\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_3__.Card, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_3__.CardHeader, {\n                className: \"flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_3__.CardTitle, {\n                            children: \"Airdrop Claims\"\n                        }, void 0, false, {\n                            fileName: \"/Users/owenhartman/Desktop/Sites/bento-box-playground/components/LineChart2.tsx\",\n                            lineNumber: 47,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_3__.CardDescription, {\n                            children: \"25,000,000 Tribbles\"\n                        }, void 0, false, {\n                            fileName: \"/Users/owenhartman/Desktop/Sites/bento-box-playground/components/LineChart2.tsx\",\n                            lineNumber: 48,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/owenhartman/Desktop/Sites/bento-box-playground/components/LineChart2.tsx\",\n                    lineNumber: 46,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/owenhartman/Desktop/Sites/bento-box-playground/components/LineChart2.tsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_3__.CardContent, {\n                className: \"px-2 sm:p-6\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_chart__WEBPACK_IMPORTED_MODULE_4__.ChartContainer, {\n                        config: chartConfig,\n                        className: \"aspect-auto h-[250px] w-full\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_CartesianGrid_Line_LineChart_ReferenceLine_XAxis_recharts__WEBPACK_IMPORTED_MODULE_5__.LineChart, {\n                            data: chartData,\n                            margin: {\n                                top: 30,\n                                left: 12,\n                                right: 100\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_CartesianGrid_Line_LineChart_ReferenceLine_XAxis_recharts__WEBPACK_IMPORTED_MODULE_6__.CartesianGrid, {\n                                    vertical: false\n                                }, void 0, false, {\n                                    fileName: \"/Users/owenhartman/Desktop/Sites/bento-box-playground/components/LineChart2.tsx\",\n                                    lineNumber: 57,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_CartesianGrid_Line_LineChart_ReferenceLine_XAxis_recharts__WEBPACK_IMPORTED_MODULE_7__.XAxis, {\n                                    dataKey: \"epoch\",\n                                    tick: false,\n                                    axisLine: false,\n                                    tickLine: false,\n                                    tickMargin: 8,\n                                    minTickGap: 32,\n                                    interval: 0,\n                                    padding: {\n                                        left: 20,\n                                        right: 20\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"/Users/owenhartman/Desktop/Sites/bento-box-playground/components/LineChart2.tsx\",\n                                    lineNumber: 58,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_chart__WEBPACK_IMPORTED_MODULE_4__.ChartTooltip, {\n                                    content: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_chart__WEBPACK_IMPORTED_MODULE_4__.ChartTooltipContent, {\n                                        className: \"w-[150px]\",\n                                        nameKey: \"views\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/owenhartman/Desktop/Sites/bento-box-playground/components/LineChart2.tsx\",\n                                        lineNumber: 69,\n                                        columnNumber: 24\n                                    }, void 0)\n                                }, void 0, false, {\n                                    fileName: \"/Users/owenhartman/Desktop/Sites/bento-box-playground/components/LineChart2.tsx\",\n                                    lineNumber: 68,\n                                    columnNumber: 13\n                                }, this),\n                                chartData.map((_, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_CartesianGrid_Line_LineChart_ReferenceLine_XAxis_recharts__WEBPACK_IMPORTED_MODULE_8__.ReferenceLine, {\n                                        x: \"Epoch \".concat(index),\n                                        stroke: \"gray\",\n                                        strokeDasharray: \"3 3\",\n                                        label: {\n                                            value: \"Epoch \".concat(index),\n                                            position: \"top\",\n                                            style: {\n                                                fontSize: 12,\n                                                fill: \"gray\",\n                                                transform: \"translateX(7%)\"\n                                            }\n                                        }\n                                    }, index, false, {\n                                        fileName: \"/Users/owenhartman/Desktop/Sites/bento-box-playground/components/LineChart2.tsx\",\n                                        lineNumber: 73,\n                                        columnNumber: 15\n                                    }, this)),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_CartesianGrid_Line_LineChart_ReferenceLine_XAxis_recharts__WEBPACK_IMPORTED_MODULE_8__.ReferenceLine, {\n                                    x: \"Epoch 6\",\n                                    stroke: \"gray\",\n                                    strokeDasharray: \"3 3\",\n                                    position: \"insideEnd\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/owenhartman/Desktop/Sites/bento-box-playground/components/LineChart2.tsx\",\n                                    lineNumber: 86,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_CartesianGrid_Line_LineChart_ReferenceLine_XAxis_recharts__WEBPACK_IMPORTED_MODULE_9__.Line, {\n                                    dataKey: \"Supply\",\n                                    type: \"monotone\",\n                                    stroke: lineColor,\n                                    strokeWidth: 2,\n                                    dot: false\n                                }, void 0, false, {\n                                    fileName: \"/Users/owenhartman/Desktop/Sites/bento-box-playground/components/LineChart2.tsx\",\n                                    lineNumber: 92,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/owenhartman/Desktop/Sites/bento-box-playground/components/LineChart2.tsx\",\n                            lineNumber: 53,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/owenhartman/Desktop/Sites/bento-box-playground/components/LineChart2.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-between mt-4\",\n                        children: infoBoxes.map((info, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-col items-center justify-center w-full h-24 bg-gray-100 rounded-lg text-gray-700 font-semibold shadow-md p-2 mx-1\",\n                                style: {\n                                    flex: \"1 1 0\"\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        children: info.title\n                                    }, void 0, false, {\n                                        fileName: \"/Users/owenhartman/Desktop/Sites/bento-box-playground/components/LineChart2.tsx\",\n                                        lineNumber: 110,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        children: [\n                                            \"Max: \",\n                                            info.max\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/owenhartman/Desktop/Sites/bento-box-playground/components/LineChart2.tsx\",\n                                        lineNumber: 111,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        children: [\n                                            \"Min: \",\n                                            info.min\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/owenhartman/Desktop/Sites/bento-box-playground/components/LineChart2.tsx\",\n                                        lineNumber: 112,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, index, true, {\n                                fileName: \"/Users/owenhartman/Desktop/Sites/bento-box-playground/components/LineChart2.tsx\",\n                                lineNumber: 105,\n                                columnNumber: 13\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"/Users/owenhartman/Desktop/Sites/bento-box-playground/components/LineChart2.tsx\",\n                        lineNumber: 103,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/owenhartman/Desktop/Sites/bento-box-playground/components/LineChart2.tsx\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/owenhartman/Desktop/Sites/bento-box-playground/components/LineChart2.tsx\",\n        lineNumber: 44,\n        columnNumber: 5\n    }, this);\n}\n_s(LineChart2, \"JkSxfi8+JQlqgIgDOc3wQN+nVIw=\", false, function() {\n    return [\n        next_themes__WEBPACK_IMPORTED_MODULE_2__.useTheme\n    ];\n});\n_c = LineChart2;\nvar _c;\n$RefreshReg$(_c, \"LineChart2\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvTGluZUNoYXJ0Mi50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFOEI7QUFDaUQ7QUFDekM7QUFDMEQ7QUFDUDtBQUV6Rix3Q0FBd0M7QUFDeEMsTUFBTWUsWUFBWTtJQUNoQjtRQUFFQyxPQUFPO1FBQVdDLFFBQVE7SUFBSTtJQUNoQztRQUFFRCxPQUFPO1FBQVdDLFFBQVE7SUFBSTtJQUNoQztRQUFFRCxPQUFPO1FBQVdDLFFBQVE7SUFBSTtJQUNoQztRQUFFRCxPQUFPO1FBQVdDLFFBQVE7SUFBSTtJQUNoQztRQUFFRCxPQUFPO1FBQVdDLFFBQVE7SUFBSTtJQUNoQztRQUFFRCxPQUFPO1FBQVdDLFFBQVE7SUFBSTtJQUNoQztRQUFFRCxPQUFPO1FBQVdDLFFBQVE7SUFBSTtDQUNqQztBQUVELHNDQUFzQztBQUN0QyxNQUFNQyxjQUFjO0lBQ2xCQyxRQUFRO1FBQ05DLE9BQU87UUFDUEMsT0FBTztJQUNUO0FBQ0Y7QUFFTyxTQUFTQzs7SUFDZCxNQUFNLEVBQUVDLEtBQUssRUFBRSxHQUFHakIscURBQVFBO0lBQzFCLE1BQU1rQixZQUFZRCxVQUFVLFVBQVUsWUFBWTtJQUVsRCwwREFBMEQ7SUFDMUQsTUFBTUUsWUFBWTtRQUNoQjtZQUFFQyxPQUFPO1lBQVVDLEtBQUs7WUFBTUMsS0FBSztRQUFLO1FBQ3hDO1lBQUVGLE9BQU87WUFBVUMsS0FBSztZQUFNQyxLQUFLO1FBQUk7UUFDdkM7WUFBRUYsT0FBTztZQUFVQyxLQUFLO1lBQU1DLEtBQUs7UUFBSTtRQUN2QztZQUFFRixPQUFPO1lBQVVDLEtBQUs7WUFBTUMsS0FBSztRQUFJO1FBQ3ZDO1lBQUVGLE9BQU87WUFBVUMsS0FBSztZQUFLQyxLQUFLO1FBQUc7UUFDckM7WUFBRUYsT0FBTztZQUFVQyxLQUFLO1lBQUtDLEtBQUs7UUFBRztRQUNyQztZQUFFRixPQUFPO1lBQVVDLEtBQUs7WUFBS0MsS0FBSztRQUFHO0tBQ3RDO0lBRUQscUJBQ0UsOERBQUNyQixxREFBSUE7OzBCQUNILDhEQUFDRywyREFBVUE7Z0JBQUNtQixXQUFVOzBCQUNwQiw0RUFBQ0M7b0JBQUlELFdBQVU7O3NDQUNiLDhEQUFDbEIsMERBQVNBO3NDQUFDOzs7Ozs7c0NBQ1gsOERBQUNGLGdFQUFlQTtzQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBR3JCLDhEQUFDRCw0REFBV0E7Z0JBQUNxQixXQUFVOztrQ0FDckIsOERBQUNqQixnRUFBY0E7d0JBQUNtQixRQUFRYjt3QkFBYVcsV0FBVTtrQ0FDN0MsNEVBQUMxQix1SEFBU0E7NEJBQ1I2QixNQUFNakI7NEJBQ05rQixRQUFRO2dDQUFFQyxLQUFLO2dDQUFJQyxNQUFNO2dDQUFJQyxPQUFPOzRCQUFJOzs4Q0FFeEMsOERBQUNuQywySEFBYUE7b0NBQUNvQyxVQUFVOzs7Ozs7OENBQ3pCLDhEQUFDakMsbUhBQUtBO29DQUNKa0MsU0FBUTtvQ0FDUkMsTUFBTTtvQ0FDTkMsVUFBVTtvQ0FDVkMsVUFBVTtvQ0FDVkMsWUFBWTtvQ0FDWkMsWUFBWTtvQ0FDWkMsVUFBVTtvQ0FDVkMsU0FBUzt3Q0FBRVYsTUFBTTt3Q0FBSUMsT0FBTztvQ0FBRzs7Ozs7OzhDQUVqQyw4REFBQ3ZCLDhEQUFZQTtvQ0FDWGlDLHVCQUFTLDhEQUFDaEMscUVBQW1CQTt3Q0FBQ2UsV0FBVTt3Q0FBWWtCLFNBQVE7Ozs7Ozs7Ozs7O2dDQUc3RGhDLFVBQVVpQyxHQUFHLENBQUMsQ0FBQ0MsR0FBR0Msc0JBQ2pCLDhEQUFDN0MsMkhBQWFBO3dDQUVaOEMsR0FBRyxTQUFlLE9BQU5EO3dDQUNaRSxRQUFPO3dDQUNQQyxpQkFBZ0I7d0NBQ2hCakMsT0FBTzs0Q0FDTGtDLE9BQU8sU0FBZSxPQUFOSjs0Q0FDaEJLLFVBQVU7NENBQ1ZDLE9BQU87Z0RBQUVDLFVBQVU7Z0RBQUlDLE1BQU07Z0RBQVFDLFdBQVc7NENBQWlCO3dDQUNuRTt1Q0FSS1Q7Ozs7OzhDQVlULDhEQUFDN0MsMkhBQWFBO29DQUNaOEMsR0FBRTtvQ0FDRkMsUUFBTztvQ0FDUEMsaUJBQWdCO29DQUNoQkUsVUFBUzs7Ozs7OzhDQUVYLDhEQUFDckQsa0hBQUlBO29DQUNIb0MsU0FBUTtvQ0FDUnNCLE1BQUs7b0NBQ0xSLFFBQVE1QjtvQ0FDUnFDLGFBQWE7b0NBQ2JDLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQU1YLDhEQUFDaEM7d0JBQUlELFdBQVU7a0NBQ1pKLFVBQVV1QixHQUFHLENBQUMsQ0FBQ2UsTUFBTWIsc0JBQ3BCLDhEQUFDcEI7Z0NBRUNELFdBQVU7Z0NBQ1YyQixPQUFPO29DQUFFUSxNQUFNO2dDQUFROztrREFFdkIsOERBQUNDO2tEQUFNRixLQUFLckMsS0FBSzs7Ozs7O2tEQUNqQiw4REFBQ3VDOzs0Q0FBSzs0Q0FBTUYsS0FBS3BDLEdBQUc7Ozs7Ozs7a0RBQ3BCLDhEQUFDc0M7OzRDQUFLOzRDQUFNRixLQUFLbkMsR0FBRzs7Ozs7Ozs7K0JBTmZzQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWFuQjtHQTNGZ0I1Qjs7UUFDSWhCLGlEQUFRQTs7O0tBRFpnQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0xpbmVDaGFydDIudHN4P2U4YzkiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IENhcnRlc2lhbkdyaWQsIExpbmUsIExpbmVDaGFydCwgWEF4aXMsIFJlZmVyZW5jZUxpbmUgfSBmcm9tIFwicmVjaGFydHNcIlxuaW1wb3J0IHsgdXNlVGhlbWUgfSBmcm9tIFwibmV4dC10aGVtZXNcIlxuaW1wb3J0IHsgQ2FyZCwgQ2FyZENvbnRlbnQsIENhcmREZXNjcmlwdGlvbiwgQ2FyZEhlYWRlciwgQ2FyZFRpdGxlIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9jYXJkXCJcbmltcG9ydCB7IENoYXJ0Q29udGFpbmVyLCBDaGFydFRvb2x0aXAsIENoYXJ0VG9vbHRpcENvbnRlbnQgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2NoYXJ0XCJcblxuLy8gQ2hhcnQgZGF0YSB3aXRoIHVuaXF1ZSBcIkVwb2NoXCIgbGFiZWxzXG5jb25zdCBjaGFydERhdGEgPSBbXG4gIHsgZXBvY2g6IFwiRXBvY2ggMFwiLCBTdXBwbHk6IDM3MyB9LFxuICB7IGVwb2NoOiBcIkVwb2NoIDFcIiwgU3VwcGx5OiAyOTcgfSxcbiAgeyBlcG9jaDogXCJFcG9jaCAyXCIsIFN1cHBseTogMjY3IH0sXG4gIHsgZXBvY2g6IFwiRXBvY2ggM1wiLCBTdXBwbHk6IDI0MiB9LFxuICB7IGVwb2NoOiBcIkVwb2NoIDRcIiwgU3VwcGx5OiAxNzMgfSxcbiAgeyBlcG9jaDogXCJFcG9jaCA1XCIsIFN1cHBseTogMTUxIH0sXG4gIHsgZXBvY2g6IFwiRXBvY2ggNlwiLCBTdXBwbHk6IDEwMSB9LFxuXVxuXG4vLyBDb25maWd1cmF0aW9uIGZvciBzdXBwbHkgbGluZSBjb2xvclxuY29uc3QgY2hhcnRDb25maWcgPSB7XG4gIHN1cHBseToge1xuICAgIGxhYmVsOiBcIlN1cHBseVwiLFxuICAgIGNvbG9yOiBcInRlYWxcIixcbiAgfSxcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIExpbmVDaGFydDIoKSB7XG4gIGNvbnN0IHsgdGhlbWUgfSA9IHVzZVRoZW1lKClcbiAgY29uc3QgbGluZUNvbG9yID0gdGhlbWUgPT09IFwibGlnaHRcIiA/IFwiIzAwMDAwMFwiIDogXCJ0ZWFsXCJcblxuICAvLyBBcnJheSBvZiBvYmplY3RzIHRvIGRpc3BsYXkgbXVsdGlwbGUgdmFsdWVzIGluIGVhY2ggYm94XG4gIGNvbnN0IGluZm9Cb3hlcyA9IFtcbiAgICB7IHRpdGxlOiBcIkNsYWltc1wiLCBtYXg6IDkwMDAsIG1pbjogMTAwMCB9LFxuICAgIHsgdGl0bGU6IFwiQ2xhaW1zXCIsIG1heDogNDUwMCwgbWluOiA1MDAgfSxcbiAgICB7IHRpdGxlOiBcIkNsYWltc1wiLCBtYXg6IDIyNTAsIG1pbjogMjUwIH0sXG4gICAgeyB0aXRsZTogXCJDbGFpbXNcIiwgbWF4OiAxMTI1LCBtaW46IDEyNSB9LFxuICAgIHsgdGl0bGU6IFwiQ2xhaW1zXCIsIG1heDogNTY0LCBtaW46IDY2IH0sXG4gICAgeyB0aXRsZTogXCJDbGFpbXNcIiwgbWF4OiAyODIsIG1pbjogMzMgfSxcbiAgICB7IHRpdGxlOiBcIkNsYWltc1wiLCBtYXg6IDE0MSwgbWluOiAyMCB9LFxuICBdXG5cbiAgcmV0dXJuIChcbiAgICA8Q2FyZD5cbiAgICAgIDxDYXJkSGVhZGVyIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtc3RyZXRjaCBzcGFjZS15LTAgYm9yZGVyLWIgcC0wIHNtOmZsZXgtcm93XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LTEgZmxleC1jb2wganVzdGlmeS1jZW50ZXIgZ2FwLTEgcHgtNiBweS01IHNtOnB5LTZcIj5cbiAgICAgICAgICA8Q2FyZFRpdGxlPkFpcmRyb3AgQ2xhaW1zPC9DYXJkVGl0bGU+XG4gICAgICAgICAgPENhcmREZXNjcmlwdGlvbj4yNSwwMDAsMDAwIFRyaWJibGVzPC9DYXJkRGVzY3JpcHRpb24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9DYXJkSGVhZGVyPlxuICAgICAgPENhcmRDb250ZW50IGNsYXNzTmFtZT1cInB4LTIgc206cC02XCI+XG4gICAgICAgIDxDaGFydENvbnRhaW5lciBjb25maWc9e2NoYXJ0Q29uZmlnfSBjbGFzc05hbWU9XCJhc3BlY3QtYXV0byBoLVsyNTBweF0gdy1mdWxsXCI+XG4gICAgICAgICAgPExpbmVDaGFydFxuICAgICAgICAgICAgZGF0YT17Y2hhcnREYXRhfVxuICAgICAgICAgICAgbWFyZ2luPXt7IHRvcDogMzAsIGxlZnQ6IDEyLCByaWdodDogMTAwIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPENhcnRlc2lhbkdyaWQgdmVydGljYWw9e2ZhbHNlfSAvPlxuICAgICAgICAgICAgPFhBeGlzXG4gICAgICAgICAgICAgIGRhdGFLZXk9XCJlcG9jaFwiXG4gICAgICAgICAgICAgIHRpY2s9e2ZhbHNlfSAvLyBIaWRlcyB0aGUgWC1heGlzIGxhYmVscyBiZWxvdyB0aGUgY2hhcnRcbiAgICAgICAgICAgICAgYXhpc0xpbmU9e2ZhbHNlfVxuICAgICAgICAgICAgICB0aWNrTGluZT17ZmFsc2V9XG4gICAgICAgICAgICAgIHRpY2tNYXJnaW49ezh9XG4gICAgICAgICAgICAgIG1pblRpY2tHYXA9ezMyfVxuICAgICAgICAgICAgICBpbnRlcnZhbD17MH1cbiAgICAgICAgICAgICAgcGFkZGluZz17eyBsZWZ0OiAyMCwgcmlnaHQ6IDIwIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPENoYXJ0VG9vbHRpcFxuICAgICAgICAgICAgICBjb250ZW50PXs8Q2hhcnRUb29sdGlwQ29udGVudCBjbGFzc05hbWU9XCJ3LVsxNTBweF1cIiBuYW1lS2V5PVwidmlld3NcIiAvPn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICB7LyogUmVmZXJlbmNlTGluZXMgYXQgZWFjaCBFcG9jaCBib3VuZGFyeSwgc3RhcnRpbmcgd2l0aCBFcG9jaCAwICovfVxuICAgICAgICAgICAge2NoYXJ0RGF0YS5tYXAoKF8sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgIDxSZWZlcmVuY2VMaW5lXG4gICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgICB4PXtgRXBvY2ggJHtpbmRleH1gfVxuICAgICAgICAgICAgICAgIHN0cm9rZT1cImdyYXlcIlxuICAgICAgICAgICAgICAgIHN0cm9rZURhc2hhcnJheT1cIjMgM1wiXG4gICAgICAgICAgICAgICAgbGFiZWw9e3tcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBgRXBvY2ggJHtpbmRleH1gLFxuICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwidG9wXCIsXG4gICAgICAgICAgICAgICAgICBzdHlsZTogeyBmb250U2l6ZTogMTIsIGZpbGw6IFwiZ3JheVwiLCB0cmFuc2Zvcm06IFwidHJhbnNsYXRlWCg3JSlcIiB9LFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICAgIHsvKiBGaW5hbCBSZWZlcmVuY2VMaW5lIGF0IGVuZCBvZiBFcG9jaCA2ICovfVxuICAgICAgICAgICAgPFJlZmVyZW5jZUxpbmVcbiAgICAgICAgICAgICAgeD1cIkVwb2NoIDZcIlxuICAgICAgICAgICAgICBzdHJva2U9XCJncmF5XCJcbiAgICAgICAgICAgICAgc3Ryb2tlRGFzaGFycmF5PVwiMyAzXCJcbiAgICAgICAgICAgICAgcG9zaXRpb249XCJpbnNpZGVFbmRcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxMaW5lXG4gICAgICAgICAgICAgIGRhdGFLZXk9XCJTdXBwbHlcIlxuICAgICAgICAgICAgICB0eXBlPVwibW9ub3RvbmVcIlxuICAgICAgICAgICAgICBzdHJva2U9e2xpbmVDb2xvcn1cbiAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9ezJ9XG4gICAgICAgICAgICAgIGRvdD17ZmFsc2V9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvTGluZUNoYXJ0PlxuICAgICAgICA8L0NoYXJ0Q29udGFpbmVyPlxuXG4gICAgICAgIHsvKiBJbmZvcm1hdGlvbiBCb3hlcyBiZWxvdyBlYWNoIGVwb2NoICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIG10LTRcIj5cbiAgICAgICAgICB7aW5mb0JveGVzLm1hcCgoaW5mbywgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdy1mdWxsIGgtMjQgYmctZ3JheS0xMDAgcm91bmRlZC1sZyB0ZXh0LWdyYXktNzAwIGZvbnQtc2VtaWJvbGQgc2hhZG93LW1kIHAtMiBteC0xXCJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgZmxleDogJzEgMSAwJyB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8c3Bhbj57aW5mby50aXRsZX08L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuPk1heDoge2luZm8ubWF4fTwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW4+TWluOiB7aW5mby5taW59PC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9DYXJkQ29udGVudD5cbiAgICA8L0NhcmQ+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkNhcnRlc2lhbkdyaWQiLCJMaW5lIiwiTGluZUNoYXJ0IiwiWEF4aXMiLCJSZWZlcmVuY2VMaW5lIiwidXNlVGhlbWUiLCJDYXJkIiwiQ2FyZENvbnRlbnQiLCJDYXJkRGVzY3JpcHRpb24iLCJDYXJkSGVhZGVyIiwiQ2FyZFRpdGxlIiwiQ2hhcnRDb250YWluZXIiLCJDaGFydFRvb2x0aXAiLCJDaGFydFRvb2x0aXBDb250ZW50IiwiY2hhcnREYXRhIiwiZXBvY2giLCJTdXBwbHkiLCJjaGFydENvbmZpZyIsInN1cHBseSIsImxhYmVsIiwiY29sb3IiLCJMaW5lQ2hhcnQyIiwidGhlbWUiLCJsaW5lQ29sb3IiLCJpbmZvQm94ZXMiLCJ0aXRsZSIsIm1heCIsIm1pbiIsImNsYXNzTmFtZSIsImRpdiIsImNvbmZpZyIsImRhdGEiLCJtYXJnaW4iLCJ0b3AiLCJsZWZ0IiwicmlnaHQiLCJ2ZXJ0aWNhbCIsImRhdGFLZXkiLCJ0aWNrIiwiYXhpc0xpbmUiLCJ0aWNrTGluZSIsInRpY2tNYXJnaW4iLCJtaW5UaWNrR2FwIiwiaW50ZXJ2YWwiLCJwYWRkaW5nIiwiY29udGVudCIsIm5hbWVLZXkiLCJtYXAiLCJfIiwiaW5kZXgiLCJ4Iiwic3Ryb2tlIiwic3Ryb2tlRGFzaGFycmF5IiwidmFsdWUiLCJwb3NpdGlvbiIsInN0eWxlIiwiZm9udFNpemUiLCJmaWxsIiwidHJhbnNmb3JtIiwidHlwZSIsInN0cm9rZVdpZHRoIiwiZG90IiwiaW5mbyIsImZsZXgiLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/LineChart2.tsx\n"));

/***/ })

});