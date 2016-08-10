let funcs = {};
var tasks = [];
var counter = 0;

// add middleware here
funcs.listTasks = (req, res)=>{
	var toDoTasks = tasks.filter(function(elem){
		return elem.completed === false;
	});
	res.render('index', {
		title: 'Todo',
		tasks: toDoTasks,
		currentUrl: req.url
	});
}

funcs.newTask = (req, res)=>{
	var newTask = {
		id: ++counter,
		name: req.body.name,
		createdDate: new Date(),
		completed: false
	};
	tasks.push(newTask);
	
	res.redirect('/');
}

funcs.deleteTask = (req, res)=>{
	var taskId = parseInt(req.query.id);
	var itemToDelete = null;
	tasks.forEach(function(elem, i){
		if(elem.id === taskId){
			itemToDelete = i;
		}
	});
	tasks.splice(itemToDelete, 1);
	res.end();
}

funcs.completeTask = (req, res)=>{
	var taskId = parseInt(req.query.id);
	tasks.forEach(function(elem){
		if(elem.id === taskId){
			elem.completed = true;
			elem.completedDate = new Date();
		}
	});
	res.end();
}

funcs.completeAllTasks = (req, res)=>{
	tasks.forEach(function(elem){
		elem.completed = true;
		elem.completedDate = new Date();
	});
	res.end();
}

funcs.listCompletedTasks = (req, res)=>{
	var doneTasks = tasks.filter(function(elem){
		return elem.completed === true;
	});
	res.render('completed', {
		title: 'Todo',
		tasks: doneTasks,
		currentUrl: req.url
	});
}

export default funcs;