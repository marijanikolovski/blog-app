import React from "react";
import { axiosInstance } from "./AxiosService";

class PostService {
  async getAll() {
    try {
      const { data } = await axiosInstance.get("/posts");
      return data;
    } catch (error) {
      console.log(error);
    }
    return [];
  }

  async get(id) {
    try {
      const { data } = await axiosInstance.get(`posts/${id}`);
      return data;
    } catch (error) {
      console.log(error);
    }
    return null;
  }

  async add(newPost) {
    try {
      const { data } = await axiosInstance.post("/posts", newPost);
      return data;
    } catch (error) {
      console.log(error);
    }
    return [];
  }

  async edit(id, newPost) {
    try {
      const { data } = await axiosInstance.put(`posts/${id}`, newPost);
      return data;
    } catch (error) {
      console.log(error);
    }
    return null;
  }
}

export default new PostService();
