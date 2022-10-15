import db from '../models/index.js'

const RestrictionsModel = db.RestrictionsModel;
const TypeModel = db.TypeModel;
const CitiesModel = db.CitiesModel;

export const getAll = async (req, res) => {
  await RestrictionsModel.findAll({
    include: [{ all: true }]
  })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
}

export const getByCityType = async (req, res) => {
  await RestrictionsModel.findAll({
    where: { CityId: req.body.CityId, TypeId: req.body.TypeId },
    include: [{ all: true }]
  })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
}