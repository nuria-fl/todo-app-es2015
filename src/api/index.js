import { version } from '../../package.json';
import { Router } from 'express';
import tasks from '../middleware/index';

export default () => {
	let api = Router();

	api.get( '/', tasks.listTasks);
	api.post( '/', tasks.newTask );
	api.put( '/', tasks.completeTask );
	api.delete( '/', tasks.deleteTask );
	api.put( '/alldone', tasks.completeAllTasks );
	api.get( '/completed', tasks.listCompletedTasks );

	return api;
};