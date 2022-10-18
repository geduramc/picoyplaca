import dotenv from 'dotenv'
import '@babel/polyfill'
import fs from 'fs'
import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import db from './models/index.js'

import CitiesRoutes from './routes/Cities.routes.js'
import TypesRoutes from './routes/Types.routes.js'
import RestrictionsRoutes from './routes/Restrictions.routes.js'

dotenv.config();
const app = express();
const app_config = JSON.parse(fs.readFileSync('./src/app.config.json', 'utf-8'));
const pkg = JSON.parse(fs.readFileSync('./package.json', 'utf-8'));

//settings
app.set('port', process.env.PORT || app_config.app.port);
app.set('pkg', pkg);

//middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

//routes
app.get('/', (req, res) => {
	res.json({
		name: app.get('pkg').name,
		author: app.get('pkg').author,
		description: app.get('pkg').description,
		version: app.get('pkg').version
	});
});

app.use('/api/cities', CitiesRoutes);
app.use('/api/types', TypesRoutes);
app.use('/api/restrictions', RestrictionsRoutes);

db.sequelize.sync()
	.then(result => {
		app.listen(app.get('port'), () => {
			console.log(`[port: ${app.get('port')}] server running...`);
		})
	}).catch(err => {
		console.log(err);
	});

export default app;