var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames, __getOwnPropSymbols = Object.getOwnPropertySymbols, __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty, __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: !0, configurable: !0, writable: !0, value }) : obj[key] = value, __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    __hasOwnProp.call(b, prop) && __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b))
      __propIsEnum.call(b, prop) && __defNormalProp(a, prop, b[prop]);
  return a;
};
var __markAsModule = (target) => __defProp(target, "__esModule", { value: !0 });
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    __hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0 && (target[prop] = source[prop]);
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source))
      exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop) && (target[prop] = source[prop]);
  return target;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 == "object" || typeof module2 == "function")
    for (let key of __getOwnPropNames(module2))
      !__hasOwnProp.call(target, key) && (copyDefault || key !== "default") && __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  return target;
}, __toESM = (module2, isNodeMode) => __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: !0 } : { value: module2, enumerable: !0 })), module2), __toCommonJS = /* @__PURE__ */ ((cache) => (module2, temp) => cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp))(typeof WeakMap != "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  publicPath: () => publicPath,
  routes: () => routes
});

// node_modules/@remix-run/dev/dist/compiler/shims/react.ts
var React = __toESM(require("react"));

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_server = require("react-dom/server"), import_react = require("@remix-run/react");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_react.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  return responseHeaders.set("Content-Type", "text/html"), new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  CatchBoundary: () => CatchBoundary,
  default: () => root_default2,
  links: () => links2,
  loader: () => loader,
  meta: () => meta
});
var import_react3 = require("@remix-run/react"), import_remix2 = require("@clerk/remix"), import_ssr = require("@clerk/remix/ssr.server");

// app/styles/routes/root/root.css
var root_default = "/build/_assets/root-ZVHHYOKW.css";

// app/components/navbar/Navbar.tsx
var import_remix = require("@clerk/remix"), import_react2 = require("@remix-run/react");

// app/styles/components/navbar/navbar.css
var navbar_default = "/build/_assets/navbar-FBDEASGH.css";

// app/components/navbar/Navbar.tsx
var links = () => [{ rel: "stylesheet", href: navbar_default }];
function Navbar() {
  return /* @__PURE__ */ React.createElement("nav", {
    className: "topnav"
  }, /* @__PURE__ */ React.createElement(import_react2.Link, {
    to: "/"
  }, "Home"), /* @__PURE__ */ React.createElement(import_react2.NavLink, {
    to: "/budget"
  }, "Budget"), /* @__PURE__ */ React.createElement(import_react2.NavLink, {
    to: "/accounts"
  }, "Accounts"), /* @__PURE__ */ React.createElement("div", {
    className: "user-button-wrapper"
  }, /* @__PURE__ */ React.createElement(import_remix.UserButton, null)));
}

// app/root.tsx
var links2 = () => [...links(), { rel: "stylesheet", href: root_default }], meta = () => ({ title: "Mony" }), loader = (args) => (0, import_ssr.rootAuthLoader)(args, { loadUser: !0 }), CatchBoundary = (0, import_remix2.ClerkCatchBoundary)();
function App() {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en-NZ"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), /* @__PURE__ */ React.createElement(import_react3.Meta, null), /* @__PURE__ */ React.createElement(import_react3.Links, null)), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement(Navbar, null), /* @__PURE__ */ React.createElement("main", null, /* @__PURE__ */ React.createElement(import_react3.Outlet, null)), /* @__PURE__ */ React.createElement(import_react3.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_react3.Scripts, null), /* @__PURE__ */ React.createElement(import_react3.LiveReload, null)));
}
var root_default2 = (0, import_remix2.ClerkApp)(App);

// app/routes/accounts.$accountId.tsx
var accounts_accountId_exports = {};
__export(accounts_accountId_exports, {
  default: () => AccountPage,
  links: () => links4,
  loader: () => loader2
});
var import_node = require("@remix-run/node");

// app/styles/routes/accounts/accounts.css
var accounts_default = "/build/_assets/accounts-43PHYYBI.css";

// app/routes/accounts.$accountId.tsx
var import_ssr2 = require("@clerk/remix/ssr.server"), import_react4 = require("@remix-run/react");

// app/helpers/akahu.ts
var import_akahu = require("akahu"), appToken = process.env.AKAHU_APP_TOKEN || "", userToken = process.env.AKAHU_USER_TOKEN || "", akahu = new import_akahu.AkahuClient({ appToken }), getAccounts = () => akahu.accounts.list(userToken), getAccount = (accountId) => akahu.accounts.get(userToken, accountId), listTransactions = (accountId) => akahu.accounts.listTransactions(userToken, accountId);

// app/styles/components/accounts/TransactionList.css
var TransactionList_default = "/build/_assets/TransactionList-C465GE2M.css";

// app/components/accounts/TransactionList.tsx
var links3 = () => [{ rel: "stylesheet", href: TransactionList_default }], TransactionList = ({ transactions }) => /* @__PURE__ */ React.createElement("table", {
  className: "transaction-list"
}, /* @__PURE__ */ React.createElement("thead", null, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", null, "Date"), /* @__PURE__ */ React.createElement("th", null, "Amount"), /* @__PURE__ */ React.createElement("th", null, "Description"), /* @__PURE__ */ React.createElement("th", null, "Type"))), /* @__PURE__ */ React.createElement("tbody", null, transactions.items.map((transaction) => {
  let transactionDate = new Date(transaction.date), transactionDateString = `${transactionDate.getDate()}/${transactionDate.getMonth()}/${transactionDate.getFullYear()}`;
  return /* @__PURE__ */ React.createElement("tr", {
    key: transaction._id,
    className: "transaction"
  }, /* @__PURE__ */ React.createElement("td", {
    className: "transaction--date"
  }, transactionDateString), /* @__PURE__ */ React.createElement("td", {
    className: "transaction--amount"
  }, transaction.amount), /* @__PURE__ */ React.createElement("td", {
    className: "transaction--description"
  }, transaction.description), /* @__PURE__ */ React.createElement("td", {
    className: "transaction--type"
  }, transaction.type));
})));

// app/routes/accounts.$accountId.tsx
var links4 = () => [...links3(), { rel: "stylesheet", href: accounts_default }], loader2 = async ({ params, request }) => {
  let { userId } = await (0, import_ssr2.getAuth)(request);
  if (!userId)
    return (0, import_node.redirect)("/sign-in?redirect_url=" + request.url);
  let accountId = params.accountId;
  if (!accountId)
    throw new Error("Account not found");
  let account = await getAccount(accountId), transactions = await listTransactions(accountId);
  return (0, import_node.json)({ account, transactions });
};
function AccountPage() {
  let { account, transactions } = (0, import_react4.useLoaderData)();
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h1", null, account.name), /* @__PURE__ */ React.createElement(TransactionList, {
    transactions
  }));
}

// app/routes/sign-in/$.tsx
var __exports = {};
__export(__exports, {
  default: () => SignInPage
});
var import_remix3 = require("@clerk/remix");
function SignInPage() {
  return /* @__PURE__ */ React.createElement(import_remix3.SignIn, {
    path: "/sign-in",
    routing: "path"
  });
}

// app/routes/sign-up/$.tsx
var __exports2 = {};
__export(__exports2, {
  default: () => SignUpPage
});
var import_remix4 = require("@clerk/remix");
function SignUpPage() {
  return /* @__PURE__ */ React.createElement(import_remix4.SignUp, {
    path: "/sign-up",
    routing: "path"
  });
}

// app/routes/accounts.tsx
var accounts_exports = {};
__export(accounts_exports, {
  ErrorBoundary: () => ErrorBoundary,
  default: () => Accounts,
  links: () => links6,
  loader: () => loader3
});
var import_node2 = require("@remix-run/node");
var import_react5 = require("@remix-run/react");

// app/styles/components/accounts/AccountPanel.css
var AccountPanel_default = "/build/_assets/AccountPanel-LEUWAR2B.css";

// app/components/accounts/AccountPanel.tsx
var links5 = () => [{ rel: "stylesheet", href: AccountPanel_default }];
function AccountPanel({ name, balance }) {
  let formatter = Intl.NumberFormat("en-NZ", {
    style: "currency",
    currency: "NZD"
  });
  return /* @__PURE__ */ React.createElement("div", {
    className: "account-panel"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "account-panel--name"
  }, name), /* @__PURE__ */ React.createElement("div", {
    className: "account-panel--balance"
  }, formatter.format(balance)));
}

// app/routes/accounts.tsx
var import_ssr3 = require("@clerk/remix/ssr.server"), links6 = () => [...links5(), { rel: "stylesheet", href: accounts_default }];
function ErrorBoundary({ error }) {
  return console.error(error), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h2", null, "There was a problemo \u{1F62D}"), /* @__PURE__ */ React.createElement("div", null, error.message));
}
var loader3 = async ({ request }) => {
  let { userId } = await (0, import_ssr3.getAuth)(request);
  if (!userId)
    return (0, import_node2.redirect)("/sign-in?redirect_url=" + request.url);
  let accounts = await getAccounts();
  return (0, import_node2.json)(accounts);
};
function Accounts() {
  let accounts = (0, import_react5.useLoaderData)();
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h1", null, "Accounts"), /* @__PURE__ */ React.createElement("div", {
    className: "account-list"
  }, accounts.map((account) => {
    let { _id, name, balance } = account;
    return /* @__PURE__ */ React.createElement(import_react5.Link, {
      key: _id,
      to: _id
    }, /* @__PURE__ */ React.createElement(AccountPanel, {
      name,
      balance: (balance == null ? void 0 : balance.current) || 0
    }));
  })));
}

// app/routes/budget.tsx
var budget_exports = {};
__export(budget_exports, {
  default: () => Budget,
  links: () => links7,
  loader: () => loader4
});
var import_node3 = require("@remix-run/node");

// app/styles/routes/budget/budget.css
var budget_default = "/build/_assets/budget-F7TH7FKM.css";

// app/routes/budget.tsx
var import_ssr4 = require("@clerk/remix/ssr.server"), links7 = () => [{ rel: "stylesheet", href: budget_default }], loader4 = async ({ request }) => {
  let { userId } = await (0, import_ssr4.getAuth)(request);
  return userId ? (0, import_node3.json)({ ok: !0 }) : (0, import_node3.redirect)("/sign-in?redirect_url=" + request.url);
};
function Budget() {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, "This is yo budget"));
}

// app/routes/user/$.tsx
var __exports3 = {};
__export(__exports3, {
  default: () => UserProfilePage
});
var import_remix5 = require("@clerk/remix");
function UserProfilePage() {
  return /* @__PURE__ */ React.createElement(import_remix5.UserProfile, {
    path: "/user",
    routing: "path"
  });
}

// app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index,
  links: () => links9
});

// app/styles/components/button/button.css
var button_default = "/build/_assets/button-ILOJOQTS.css";

// app/components/button/Button.tsx
var import_react6 = require("@remix-run/react"), links8 = () => [{ rel: "stylesheet", href: button_default }];
function Button(_a) {
  var _b = _a, {
    children,
    to,
    variant = "default"
  } = _b, buttonProps = __objRest(_b, [
    "children",
    "to",
    "variant"
  ]);
  let button = /* @__PURE__ */ React.createElement("button", __spreadValues({}, buttonProps), children);
  return variant === "link" && to ? /* @__PURE__ */ React.createElement(import_react6.Link, {
    to
  }, button) : variant === "navlink" && to ? /* @__PURE__ */ React.createElement(import_react6.NavLink, {
    to
  }, button) : button;
}

// app/styles/routes/index/index.css
var index_default = "/build/_assets/index-AND6RLJP.css";

// app/routes/index.tsx
var links9 = () => [...links8(), { rel: "stylesheet", href: index_default }];
function Index() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "welcome"
  }, /* @__PURE__ */ React.createElement("h1", null, "Welcome to Mony"), /* @__PURE__ */ React.createElement("p", null, "Mony is currently in development. The expected launch date is February 2023."), /* @__PURE__ */ React.createElement("div", {
    className: "button-group"
  }, /* @__PURE__ */ React.createElement(Button, {
    variant: "link",
    to: "/sign-up"
  }, "Sign Up"), /* @__PURE__ */ React.createElement(Button, {
    variant: "link",
    to: "/sign-in"
  }, "Sign In")));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "84c30ba3", entry: { module: "/build/entry.client-TMYDYM4U.js", imports: ["/build/_shared/chunk-NX6Y6MUM.js", "/build/_shared/chunk-BNRLY3XL.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-RERAT3AQ.js", imports: ["/build/_shared/chunk-A563IWXS.js", "/build/_shared/chunk-CRVPKOPF.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !0, hasErrorBoundary: !1 }, "routes/accounts": { id: "routes/accounts", parentId: "root", path: "accounts", index: void 0, caseSensitive: void 0, module: "/build/routes/accounts-7FIJW555.js", imports: ["/build/_shared/chunk-VXUIXYIJ.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !0 }, "routes/accounts.$accountId": { id: "routes/accounts.$accountId", parentId: "root", path: "accounts/:accountId", index: void 0, caseSensitive: void 0, module: "/build/routes/accounts.$accountId-TB3LN2JB.js", imports: ["/build/_shared/chunk-VXUIXYIJ.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/budget": { id: "routes/budget", parentId: "root", path: "budget", index: void 0, caseSensitive: void 0, module: "/build/routes/budget-JQ7D7EIM.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-YRV3B5KK.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/sign-in/$": { id: "routes/sign-in/$", parentId: "root", path: "sign-in/*", index: void 0, caseSensitive: void 0, module: "/build/routes/sign-in/$-BB24MMST.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/sign-up/$": { id: "routes/sign-up/$", parentId: "root", path: "sign-up/*", index: void 0, caseSensitive: void 0, module: "/build/routes/sign-up/$-VUZSXP55.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/user/$": { id: "routes/user/$", parentId: "root", path: "user/*", index: void 0, caseSensitive: void 0, module: "/build/routes/user/$-OSX2NGHG.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, url: "/build/manifest-84C30BA3.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/accounts.$accountId": {
    id: "routes/accounts.$accountId",
    parentId: "root",
    path: "accounts/:accountId",
    index: void 0,
    caseSensitive: void 0,
    module: accounts_accountId_exports
  },
  "routes/sign-in/$": {
    id: "routes/sign-in/$",
    parentId: "root",
    path: "sign-in/*",
    index: void 0,
    caseSensitive: void 0,
    module: __exports
  },
  "routes/sign-up/$": {
    id: "routes/sign-up/$",
    parentId: "root",
    path: "sign-up/*",
    index: void 0,
    caseSensitive: void 0,
    module: __exports2
  },
  "routes/accounts": {
    id: "routes/accounts",
    parentId: "root",
    path: "accounts",
    index: void 0,
    caseSensitive: void 0,
    module: accounts_exports
  },
  "routes/budget": {
    id: "routes/budget",
    parentId: "root",
    path: "budget",
    index: void 0,
    caseSensitive: void 0,
    module: budget_exports
  },
  "routes/user/$": {
    id: "routes/user/$",
    parentId: "root",
    path: "user/*",
    index: void 0,
    caseSensitive: void 0,
    module: __exports3
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  }
};
module.exports = __toCommonJS(stdin_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
