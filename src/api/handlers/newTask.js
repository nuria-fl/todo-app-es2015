let counter = 0;

let newTask = (tasks, req, res)=>{
	let task = {
		id: ++counter,
		name: req.body.name,
		createdDate: new Date(),
		completed: false
	};
	tasks.push(task);
	
	res.redirect('/');
};

export default newTask;