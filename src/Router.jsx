import React from "react";
import { Switch, Route } from "react-router-dom";
import { AddPost } from "./pages/AddPost";
import { AppPosts } from "./pages/AppPosts";
import { SinglePost } from "./pages/SinglePost";

export const Router = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/posts">
          <AppPosts />
        </Route>
        <Route path="/post/:id">
          <SinglePost />
        </Route>
        <Route path="/add">
          <AddPost />
        </Route>
        <Route path="/edit/:id">
          <AddPost />
        </Route>
        <Route path="/">
          <AppPosts />
        </Route>
      </Switch>
    </div>
  );
};
