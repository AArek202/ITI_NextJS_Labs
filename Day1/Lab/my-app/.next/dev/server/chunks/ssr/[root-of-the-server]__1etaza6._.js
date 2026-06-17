module.exports = [
"[externals]/react-dom [external] (react-dom, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("react-dom", () => require("react-dom"));

module.exports = mod;
}),
"[project]/NextJS/Day1/Lab/my-app/components/NavbarLayout.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>NavbarLayout
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$NextJS$2f$Day1$2f$Lab$2f$my$2d$app$2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/NextJS/Day1/Lab/my-app/node_modules/next/link.js [ssr] (ecmascript)");
;
;
function NavbarLayout({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("nav", {
                className: "bg-gray-800 text-white p-4 flex gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$NextJS$2f$Day1$2f$Lab$2f$my$2d$app$2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/products",
                        children: "Products"
                    }, void 0, false, {
                        fileName: "[project]/NextJS/Day1/Lab/my-app/components/NavbarLayout.tsx",
                        lineNumber: 12,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$NextJS$2f$Day1$2f$Lab$2f$my$2d$app$2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/shop",
                        children: "Shop & Filter"
                    }, void 0, false, {
                        fileName: "[project]/NextJS/Day1/Lab/my-app/components/NavbarLayout.tsx",
                        lineNumber: 13,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$NextJS$2f$Day1$2f$Lab$2f$my$2d$app$2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/quotes",
                        children: "SSR Quotes"
                    }, void 0, false, {
                        fileName: "[project]/NextJS/Day1/Lab/my-app/components/NavbarLayout.tsx",
                        lineNumber: 14,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/NextJS/Day1/Lab/my-app/components/NavbarLayout.tsx",
                lineNumber: 11,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("main", {
                children: children
            }, void 0, false, {
                fileName: "[project]/NextJS/Day1/Lab/my-app/components/NavbarLayout.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/NextJS/Day1/Lab/my-app/components/NavbarLayout.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
}),
"[project]/NextJS/Day1/Lab/my-app/pages/products/index.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProductsPage,
    "getStaticProps",
    ()=>getStaticProps
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$NextJS$2f$Day1$2f$Lab$2f$my$2d$app$2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/NextJS/Day1/Lab/my-app/node_modules/next/link.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$NextJS$2f$Day1$2f$Lab$2f$my$2d$app$2f$node_modules$2f$next$2f$image$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/NextJS/Day1/Lab/my-app/node_modules/next/image.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$NextJS$2f$Day1$2f$Lab$2f$my$2d$app$2f$components$2f$NavbarLayout$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/NextJS/Day1/Lab/my-app/components/NavbarLayout.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$NextJS$2f$Day1$2f$Lab$2f$my$2d$app$2f$context$2f$ToastContext$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/NextJS/Day1/Lab/my-app/context/ToastContext.tsx [ssr] (ecmascript)");
;
;
;
;
;
;
const PAGE_SIZE = 9;
function ProductsPage({ products }) {
    const [currentPage, setCurrentPage] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(1);
    const { addToast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$NextJS$2f$Day1$2f$Lab$2f$my$2d$app$2f$context$2f$ToastContext$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["useToast"])();
    if (!Array.isArray(products) || products.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
            className: "p-8 text-gray-500",
            children: "No products found."
        }, void 0, false, {
            fileName: "[project]/NextJS/Day1/Lab/my-app/pages/products/index.tsx",
            lineNumber: 20,
            columnNumber: 12
        }, this);
    }
    const totalPages = Math.ceil(products.length / PAGE_SIZE);
    const paginated = products.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: "container mx-auto p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                className: "text-3xl font-bold mb-6",
                children: "Our Products"
            }, void 0, false, {
                fileName: "[project]/NextJS/Day1/Lab/my-app/pages/products/index.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-3 gap-6",
                children: paginated.map((product)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$NextJS$2f$Day1$2f$Lab$2f$my$2d$app$2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: `/products/${product.id}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "border rounded-lg p-4 shadow hover:shadow-lg transition cursor-pointer bg-white",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$NextJS$2f$Day1$2f$Lab$2f$my$2d$app$2f$node_modules$2f$next$2f$image$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    src: product.thumbnail || "/placeholder.png",
                                    alt: product.title,
                                    width: 256,
                                    height: 256,
                                    className: "w-64 h-64 object-contain mx-auto"
                                }, void 0, false, {
                                    fileName: "[project]/NextJS/Day1/Lab/my-app/pages/products/index.tsx",
                                    lineNumber: 37,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                    className: "font-semibold text-lg line-clamp-1",
                                    children: product.title
                                }, void 0, false, {
                                    fileName: "[project]/NextJS/Day1/Lab/my-app/pages/products/index.tsx",
                                    lineNumber: 44,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                    className: "text-gray-600 mt-2",
                                    children: [
                                        "$",
                                        product.price
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/NextJS/Day1/Lab/my-app/pages/products/index.tsx",
                                    lineNumber: 47,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                    className: "text-yellow-500 text-sm",
                                    children: [
                                        "★ ",
                                        product.rating
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/NextJS/Day1/Lab/my-app/pages/products/index.tsx",
                                    lineNumber: 48,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/NextJS/Day1/Lab/my-app/pages/products/index.tsx",
                            lineNumber: 36,
                            columnNumber: 13
                        }, this)
                    }, product.id, false, {
                        fileName: "[project]/NextJS/Day1/Lab/my-app/pages/products/index.tsx",
                        lineNumber: 35,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/NextJS/Day1/Lab/my-app/pages/products/index.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "flex justify-center items-center gap-2 mt-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                        onClick: ()=>setCurrentPage((p)=>Math.max(p - 1, 1)),
                        disabled: currentPage === 1,
                        className: "px-4 py-2 rounded border bg-white text-gray-700 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed",
                        children: "← Prev"
                    }, void 0, false, {
                        fileName: "[project]/NextJS/Day1/Lab/my-app/pages/products/index.tsx",
                        lineNumber: 58,
                        columnNumber: 9
                    }, this),
                    Array.from({
                        length: totalPages
                    }, (_, i)=>i + 1).map((page)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                            onClick: ()=>setCurrentPage(page),
                            className: `px-4 py-2 rounded border transition ${currentPage === page ? "bg-blue-600 text-white border-blue-600" : "bg-white text-gray-700 hover:bg-gray-50"}`,
                            children: page
                        }, page, false, {
                            fileName: "[project]/NextJS/Day1/Lab/my-app/pages/products/index.tsx",
                            lineNumber: 67,
                            columnNumber: 11
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                        onClick: ()=>setCurrentPage((p)=>Math.min(p + 1, totalPages)),
                        disabled: currentPage === totalPages,
                        className: "px-4 py-2 rounded border bg-white text-gray-700 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed",
                        children: "Next →"
                    }, void 0, false, {
                        fileName: "[project]/NextJS/Day1/Lab/my-app/pages/products/index.tsx",
                        lineNumber: 80,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/NextJS/Day1/Lab/my-app/pages/products/index.tsx",
                lineNumber: 57,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                className: "text-center text-sm text-gray-400 mt-3",
                children: [
                    "Page ",
                    currentPage,
                    " of ",
                    totalPages,
                    " · ",
                    products.length,
                    " products"
                ]
            }, void 0, true, {
                fileName: "[project]/NextJS/Day1/Lab/my-app/pages/products/index.tsx",
                lineNumber: 89,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/NextJS/Day1/Lab/my-app/pages/products/index.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
ProductsPage.getLayout = function getLayout(page) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$NextJS$2f$Day1$2f$Lab$2f$my$2d$app$2f$components$2f$NavbarLayout$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
        children: page
    }, void 0, false, {
        fileName: "[project]/NextJS/Day1/Lab/my-app/pages/products/index.tsx",
        lineNumber: 97,
        columnNumber: 10
    }, this);
};
const getStaticProps = async ()=>{
    try {
        const res = await fetch("https://dummyjson.com/products?limit=100");
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        const products = data.products ?? [];
        return {
            props: {
                products
            },
            revalidate: 60
        };
    } catch (err) {
        console.error("Failed to fetch products:", err);
        return {
            props: {
                products: []
            }
        };
    }
};
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1etaza6._.js.map