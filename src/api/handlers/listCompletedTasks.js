let listCompletedTasks = (tasks, req, res)=>{
	var doneTasks = tasks.filter( elem => elem.completed === true );
	doneTasks.sort( (a,b) => new Date(b.completedDate) - new Date(a.completedDate) );
	res.render('completed', {
		title: 'Todo',
		tasks: doneTasks,
		currentUrl: req.url
	});
};

export default listCompletedTasks;