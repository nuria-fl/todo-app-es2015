let listTasks = (tasks, req, res) => {
	var toDoTasks = tasks.filter(function(elem){
		return elem.completed === false;
	});
	res.render('index', {
		title: 'Todo',
		tasks: toDoTasks,
		currentUrl: req.url
	});
};

export default listTasks;