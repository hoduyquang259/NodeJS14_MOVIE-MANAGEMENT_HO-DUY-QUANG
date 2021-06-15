const express = require("express");
const app = express();
// set up app sử dụng data JSON
app.use(express.json());

/**
 * method: get
 * url: "/" <==> http://localhost:8000/
 *
 */
app.get("/", (req, res) => {
  res.send("Hello World!");
});

let listMovie = [
  {
    id: "1",
    name: "Xtreme",
    totalMovieTime: 112,
    poster:
      "https://resizing.flixster.com/SH_m7Ze-5XWRlUcwZnlx1PGaYcY=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzL2E0NjNmOWY3LTFhZWItNGNlMS05M2QzLTMyNDA1MjA2ZmFlMi5qcGc=",
    trailer: "https://www.youtube.com/watch?v=X2O1OW6i820",
  },
  {
    id: "2",
    name: "The Pirates",
    totalMovieTime: 129,
    poster:
      "https://m.media-amazon.com/images/M/MV5BZjI3ZmFmNGItZjkwOC00OGU5LWFkZjctNWRkZmM4OWY5Yzk5XkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_.jpg",
    trailer: "https://www.youtube.com/watch?v=dOnUyuFaFDA",
  },
  {
    id: "3",
    name: "Sweet & Sour",
    totalMovieTime: 102,
    poster: "https://image.bongngocdn.com/upload/poster-chua-amp-ngot-2021.jpg",
    trailer: "https://www.youtube.com/watch?v=2CFeVRhzi_g",
  },
];

//Chuẩn restFullApi
/**
 * api: lấy tất cả danh sách phim
 * url: "/api/movies"
 * method: get
 */
app.get("/api/movies", (req, res) => {
  res.send(listMovie);
});

/**
 * api: thêm phim
 * url: "/api/movies"
 * method: post
 */
app.post("/api/movies", (req, res) => {
  const { name, totalMovieTime, poster, trailer } = req.body;
  const newMovie = {
    id: Math.random().toString(),
    name,
    totalMovieTime,
    poster,
    trailer,
  };
  listMovie = [...listMovie, newMovie];
  res.status(200).send(newMovie);
});
/**
 * api: lấy chi tiết phim
 * url: "/api/movies/:id"
 * method: get
 */
app.get("/api/movies/:id", (req, res) => {
  const { id } = req.params;
  const movieDetail = listMovie.find((movie) => movie.id == id);
  if (movieDetail) {
    res.status(200).send(movieDetail);
  } else {
    res.status(404).send("Not Found!");
  }
});

/**
 * api: cập nhật phim
 * url: "/api/movies/:id"
 * method: put
 */

app.put("/api/movies/:id", (req, res) => {
  const { id } = req.params;
  const { name, totalMovieTime, poster, trailer } = req.body;
  const index = listMovie.findIndex((movie) => movie.id == id);
  if (index !== -1) {
    let updateMovie = listMovie[index];
    updateMovie = { ...updateMovie, name, totalMovieTime, poster, trailer };
    listMovie[index] = updateMovie;
    res.status(200).send(updateMovie);
  } else {
    res.status(404).send("Not Found!");
  }
});
/**
 * api: xóa phim
 * url: "/api/movies/:id"
 * method: delete
 */
app.delete("/api/movies/:id", (req, res) => {
  const { id } = req.params;
  const index = listMovie.findIndex((movie) => movie.id == id);
  if (index !== -1) {
    const deleteMovie = listMovie[index];
    listMovie.splice(index, 1);
    res.status(200).send(deleteMovie);
  } else {
    res.status(404).send("Not Found!");
  }
});

const port = 8000;
app.listen(port, () => {
  console.log(`app run port ${port}`);
});
