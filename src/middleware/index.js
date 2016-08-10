let tasks = {};
let arrTasks = [];
let counter = 0;

tasks.listTasks = (req, res)=>{
	var toDoTasks = arrTasks.filter(function(elem){
		return elem.completed === false;
	});
	res.render('index', {
		title: 'Todo',
		tasks: toDoTasks,
		currentUrl: req.url
	});
};

tasks.newTask = (req, res)=>{
	var newTask = {
		id: ++counter,
		name: req.body.name,
		createdDate: new Date(),
		completed: false
	};
	arrTasks.push(newTask);
	
	res.redirect('/');
};

tasks.deleteTask = (req, res)=>{
	var taskId = parseInt(req.query.id);
	var itemToDelete = null;
	arrTasks.forEach(function(elem, i){
		if(elem.id === taskId){
			itemToDelete = i;
		}
	});
	arrTasks.splice(itemToDelete, 1);
	res.end();
};

tasks.completeTask = (req, res)=>{
	var taskId = parseInt(req.query.id);
	arrTasks.forEach(function(elem){
		if(elem.id === taskId){
			elem.completed = true;
			elem.completedDate = new Date();
		}
	});
	res.end();
};

tasks.completeAllTasks = (req, res)=>{
	arrTasks.forEach(function(elem){
		elem.completed = true;
		elem.completedDate = new Date();
	});
	res.end();
};

tasks.listCompletedTasks = (req, res)=>{
	var doneTasks = arrTasks.filter(function(elem){
		return elem.completed === true;
	});
	res.render('completed', {
		title: 'Todo',
		tasks: doneTasks,
		currentUrl: req.url
	});
};

export default tasks;