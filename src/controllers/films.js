import FilmModel from "../models/film.js";
let films = [
  {
    id: 1,
    title: "Barbie",
    rating: "7.0",
    description:
      "Barbie suffers a crisis that leads her to question her world and her existence.",
    imdbLink:
      "https://www.imdb.com/title/tt1517268/?ref_=nv_sr_srsg_0_tt_6_nm_2_q_barbue",
  },
  {
    id: 2,
    title: "Oppenheimer",
    rating: "8.5",
    description:
      "The story of American scientist, J. Robert Oppenheimer, and his role in the development of the atomic bomb.",
    imdbLink:
      "https://www.imdb.com/title/tt15398776/?ref_=nv_sr_srsg_0_tt_4_nm_4_q_oppe",
  },
];

const GET_RANDOM_FILM = (req, res) => {
  const randomIndex = Math.floor(Math.random() * films.length);

  const randomFilm = films[randomIndex];
  return res.json({ film: randomFilm });
};

const GET_FILMS = async (req, res) => {
  const films = await FilmModel.find();

  return res.status(200).json({ Films: films });
};

const ADD_FILM = async (req, res) => {
  console.log(req.body);
  const film = new FilmModel({
    title: req.body.title,
    rating: req.body.rating,
    description: req.body.description,
    imdbLink: req.body.imdbLink,
  });

  const response = await film.save();
  return res
    .status(201)
    .json({ film: response, message: "Film added successfully" });
};

const GET_FILM_BY_ID = async (req, res) => {
  const films = await FilmModel.findOne({ _id: req.params.id });

  return res.status(200).json({ Films: films });
};

const UPDATE_FILM = (req, res) => {
  const index = films.findIndex((film) => {
    return film.id === Number(req.params.id);
  });

  if (index === -1) {
    return res
      .status(400)
      .json({ message: `film with this id ${req.params.id} does not exist` });
  }

  films[index] = { ...films[index], ...req.body };
  return res.status(200).json({ film: "film" });
};

const DELETE_FILM = (req, res) => {
  const filteredFilms = films.filter((tree) => {
    return tree.id !== Number(req.params.id);
  });

  films = filteredFilms;

  return res.status(200).json({ films: films });
};

export {
  GET_RANDOM_FILM,
  GET_FILMS,
  GET_FILM_BY_ID,
  ADD_FILM,
  UPDATE_FILM,
  DELETE_FILM,
};
