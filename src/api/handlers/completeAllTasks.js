let completeAllTasks = (tasks, req, res)=>{
	tasks.forEach( elem => {
		elem.completed = true;
		elem.completedDate = new Date();
	});
	res.end();
};

export default completeAllTasks;