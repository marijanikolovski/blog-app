import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { AppPosts } from "./pages/AppPosts";

export const Router = () => {
  return (
    <div>
      <Switch>
        <Route path="/posts">
          <AppPosts />
        </Route>
        <Route path="/post">
          <Redirect to="/" />
        </Route>
      </Switch>
    </div>
  );
};
