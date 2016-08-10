let deleteTask = (tasks, req, res)=>{
	var taskId = parseInt(req.query.id);
	var itemToDelete = null;
	tasks.forEach(function(elem, i){
		if(elem.id === taskId){
			itemToDelete = i;
		}
	});
	tasks.splice(itemToDelete, 1);
	res.end();
};

export default deleteTask;