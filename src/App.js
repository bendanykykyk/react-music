import React, {memo} from "react";

import {renderRoutes} from "react-router-config";
import routes from "./router";

import {HashRouter} from "react-router-dom";

import YKAppHeader from "@/components/app-header";
import YKAppFooter from "@/components/app-footer";

import {Provider} from "react-redux";
import store from "./store";

export default memo(function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <YKAppHeader></YKAppHeader>
        {renderRoutes(routes)}
        <YKAppFooter></YKAppFooter>
      </HashRouter>
    </Provider>
  );
});
