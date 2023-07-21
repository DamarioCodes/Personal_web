"use strict";
exports.id = 140;
exports.ids = [140];
exports.modules = {

/***/ 1140:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ layouts_Layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/layouts/Footer.js
var Footer = __webpack_require__(8894);
// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__(358);
// EXTERNAL MODULE: ./src/layouts/utils.js
var utils = __webpack_require__(827);
;// CONCATENATED MODULE: ./src/layouts/Header.js




const Header = ({ headerColor , isTransparent  })=>{
    (0,external_react_.useEffect)(()=>{
        utils/* tony.stickyNav */.k.stickyNav();
        utils/* tony.scrollToActiveNav */.k.scrollToActiveNav();
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx("header", {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Accordion, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                    className: `navbar header-nav header-${headerColor ? headerColor : "white"} ${isTransparent ? "header-transparent" : ""} navbar-expand-lg`,
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "container",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                className: "navbar-brand",
                                href: "index.html",
                                children: [
                                    "D-codes ",
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "theme-bg"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Accordion.Toggle, {
                                as: "button",
                                className: "navbar-toggler",
                                type: "button",
                                eventKey: "toggle",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {}),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {}),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {})
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Accordion.Collapse, {
                                eventKey: "toggle",
                                className: "navbar-collapse justify-content-end",
                                id: "navbar-collapse-toggle",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                    className: "navbar-nav ml-auto nav-ul",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                className: "nav-link active",
                                                href: "#home",
                                                children: "Home"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                className: "nav-link",
                                                href: "#about",
                                                children: "About Me"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                className: "nav-link",
                                                href: "#services",
                                                children: "My approach"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                className: "nav-link",
                                                href: "#work",
                                                children: "Portfolio"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                className: "nav-link",
                                                href: "#contactus",
                                                children: "Contact ME"
                                            })
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                }),
                " "
            ]
        })
    });
};
/* harmony default export */ const layouts_Header = (Header);

;// CONCATENATED MODULE: ./src/layouts/Layout.js




const Layout = ({ children , headerColor , isTransparent  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(layouts_Header, {
                headerColor: headerColor,
                isTransparent: isTransparent
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("main", {
                children: children
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Footer/* default */.Z, {})
        ]
    });
};
/* harmony default export */ const layouts_Layout = (Layout);


/***/ })

};
;