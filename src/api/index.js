import { version } from '../../package.json';
import { Router } from 'express';
import listTasks from './handlers/listTasks';
import newTask from './handlers/newTask';
import completeTask from './handlers/completeTask';
import deleteTask from './handlers/deleteTask';
import completeAllTasks from './handlers/completeAllTasks';
import listCompletedTasks from './handlers/listCompletedTasks';

export default () => {
	let api = Router();

	var arrTasks = [];

	api.get( '/', listTasks.bind(null, arrTasks) );
	api.post( '/', newTask.bind(null, arrTasks) );
	api.put( '/', completeTask.bind(null, arrTasks) );
	api.delete( '/', deleteTask.bind(null, arrTasks) );
	api.put( '/alldone', completeAllTasks.bind(null, arrTasks) );
	api.get( '/completed', listCompletedTasks.bind(null, arrTasks) );

	return api;
};