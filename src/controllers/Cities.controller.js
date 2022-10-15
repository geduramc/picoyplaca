import db from '../models/index.js'

const CitiesModel = db.CitiesModel;

export const getAll = async (req, res) => {
  await CitiesModel.findAll()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
}