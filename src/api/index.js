import { version } from '../../package.json';
import { Router } from 'express';
import facets from './facets';

export default () => {
	let api = Router();

	var tasks = [];
	var counter = 0;

	api.get('/', (req, res)=>{
		var toDoTasks = tasks.filter(function(elem){
			return elem.completed === false;
		});
		res.render('index', {
			title: 'Todo',
			tasks: toDoTasks,
			currentUrl: req.url
		});
	})

	api.post('/', (req, res)=>{
		var newTask = {
			id: ++counter,
			name: req.body.name,
			createdDate: new Date(),
			completed: false
		};
		tasks.push(newTask);
		
		res.redirect('/');
	});
	api.put('/', (req, res)=>{
		var taskId = parseInt(req.query.id);
		tasks.forEach(function(elem){
			if(elem.id === taskId){
				elem.completed = true;
				elem.completedDate = new Date();
			}
		});
		res.end();
	});
	api.delete('/', (req, res)=>{
		var taskId = parseInt(req.query.id);
		var itemToDelete = null;
		tasks.forEach(function(elem, i){
			if(elem.id === taskId){
				itemToDelete = i;
			}
		});
		tasks.splice(itemToDelete, 1);
		res.end();
	});
	api.put('/alldone', (req, res)=>{
		tasks.forEach(function(elem){
			elem.completed = true;
			elem.completedDate = new Date();
		});
		res.end();
	});

	api.get('/completed', (req, res)=>{
		var doneTasks = tasks.filter(function(elem){
			return elem.completed === true;
		});
		res.render('completed', {
			title: 'Todo',
			tasks: doneTasks,
			currentUrl: req.url
		});
	});

	return api;
}
