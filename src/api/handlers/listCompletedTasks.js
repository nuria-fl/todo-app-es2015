let listCompletedTasks = (tasks, req, res)=>{
	var doneTasks = tasks.filter( elem => elem.completed === true );
	res.render('completed', {
		title: 'Todo',
		tasks: doneTasks,
		currentUrl: req.url
	});
};

export default listCompletedTasks;