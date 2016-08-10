import { version } from '../../package.json';
import { Router } from 'express';
import funcs from '../middleware/index';

export default () => {
	let api = Router();
	
	api.get('/', funcs.listTasks);
	api.post('/', funcs.newTask );
	api.put('/', funcs.completeTask);
	api.delete('/', funcs.deleteTask);
	api.put('/alldone', funcs.completeAllTasks);
	api.get('/completed', funcs.listCompletedTasks);

	return api;
}
