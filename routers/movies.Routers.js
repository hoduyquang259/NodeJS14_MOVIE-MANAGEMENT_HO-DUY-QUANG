const express = require("express");
const {
  getListMovies,
  addNewMovie,
  getDetailMovie,
  updateMovie,
  deleteMovie,
} = require("../controllers/movies.controllers");

const moviesRouters = express.Router();
//Chuẩn restFullApi
/**
 * api: lấy tất cả danh sách phim
 * url: "/api/movies"
 * method: get
 */
moviesRouters.get("/", getListMovies);

/**
 * api: thêm phim
 * url: "/api/movies"
 * method: post
 */
moviesRouters.post("/", addNewMovie);
/**
 * api: lấy chi tiết phim
 * url: "/api/movies/:id"
 * method: get
 */
moviesRouters.get("/:id", getDetailMovie);

/**
 * api: cập nhật phim
 * url: "/api/movies/:id"
 * method: put
 */

moviesRouters.put("/:id", updateMovie);
/**
 * api: xóa phim
 * url: "/api/movies/:id"
 * method: delete
 */
moviesRouters.delete("/:id", deleteMovie);

module.exports = { moviesRouters };
