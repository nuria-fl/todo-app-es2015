let listCompletedTasks = (tasks, req, res)=>{
	var doneTasks = tasks.filter(function(elem){
		return elem.completed === true;
	});
	res.render('completed', {
		title: 'Todo',
		tasks: doneTasks,
		currentUrl: req.url
	});
};

export default listCompletedTasks;