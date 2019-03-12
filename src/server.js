import React from "react";
import ReactDOMServer from "react-dom/server";
import Income, { SSRincome } from "./charts/income/";

// const React = require("react");
// const ReactDOMServer = require("react-dom/server");
// const Income = require("./charts/income/");

const result = ReactDOMServer.renderToStaticMarkup(<SSRincome />);

// const result =  ReactDOMServer.default.renderToString(React.default.createElement(Income.default, null));

console.log(result);
