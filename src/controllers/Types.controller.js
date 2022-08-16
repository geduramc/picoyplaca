import db from '../models/index.js'

const TypesModel = db.TypesModel;

export const getAll = async (req, res) => {
    await TypesModel.findAll()
        .then((data)=>{
            res.json(data);
        })
        .catch((err)=>{
            res.json(err);
        });
}