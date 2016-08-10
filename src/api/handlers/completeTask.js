let completeTask = (tasks, req, res)=>{
	var taskId = parseInt(req.query.id);
	tasks.forEach(function(elem){
		if(elem.id === taskId){
			elem.completed = true;
			elem.completedDate = new Date();
		}
	});
	res.end();
};

export default completeTask;