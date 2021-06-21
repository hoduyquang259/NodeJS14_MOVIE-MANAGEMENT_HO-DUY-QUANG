const { Movie } = require("../models");
// let listMovie = [
//   {
//     id: "1",
//     name: "Xtreme",
//     totalMovieTime: 130,
//     poster:
//       "https://resizing.flixster.com/SH_m7Ze-5XWRlUcwZnlx1PGaYcY=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzL2E0NjNmOWY3LTFhZWItNGNlMS05M2QzLTMyNDA1MjA2ZmFlMi5qcGc=",
//     trailer: "https://www.youtube.com/watch?v=X2O1OW6i820",
//   },
//   {
//     id: "2",
//     name: "The Pirates",
//     totalMovieTime: 129,
//     poster:
//       "https://m.media-amazon.com/images/M/MV5BZjI3ZmFmNGItZjkwOC00OGU5LWFkZjctNWRkZmM4OWY5Yzk5XkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_.jpg",
//     trailer: "https://www.youtube.com/watch?v=dOnUyuFaFDA",
//   },
//   {
//     id: "3",
//     name: "Sweet & Sour",
//     totalMovieTime: 102,
//     poster: "https://image.bongngocdn.com/upload/poster-chua-amp-ngot-2021.jpg",
//     trailer: "https://www.youtube.com/watch?v=2CFeVRhzi_g",
//   },
// ];
//Get all listMovie
const getListMovies = async (req, res) => {
  try {
    let listMovie = await Movie.findAll();
    res.status(200).send(listMovie);
  } catch (error) {
    res.status(500).send(error);
  }
};

//Add new Movie
const addNewMovie = async (req, res) => {
  const { name, totalMovieTime, poster, trailer } = req.body;
  try {
    const newMovie = await Movie.create({
      //   id: Math.random().toString(),
      name,
      totalMovieTime,
      poster,
      trailer,
    });
    {
    }
    listMovie = [...listMovie, newMovie];
    res.status(200).send(newMovie);
  } catch (error) {
    res.status(500).send(error);
  }
};

//Get detail movie
const getDetailMovie = async (req, res) => {
  const { id } = req.params;
  try {
    const detailMovie = await Movie.findByPk(id);
    if (detailMovie) {
      res.status(200).send(detailMovie);
    } else {
      res.status(404).send("Not Found!");
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

//Update movie
const updateMovie = async (req, res) => {
  const { id } = req.params;
  const { name, totalMovieTime, poster, trailer } = req.body;
  try {
    const [countUpdate] = await Movie.update(
      {
        name,
        totalMovieTime,
        poster,
        trailer,
      },
      {
        where: {
          id,
        },
      }
    );
    if (countUpdate > 0) {
      res.status(200).send("Update successfully!");
    } else {
      res.status(404).send("Not Found!");
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

//Delete Movie
const deleteMovie = async (req, res) => {
  const { id } = req.params;
  try {
    await Movie.destroy({
      where: {
        id,
      },
    });
    res.status(200).send(`Delete movie has id: ${id} successfully!`);
  } catch (error) {
    res.status(500).send(error);
  }
};
module.exports = {
  getListMovies,
  addNewMovie,
  getDetailMovie,
  updateMovie,
  deleteMovie,
};
