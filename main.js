//Get current month and find (winter,fall,summer)
let a=new Date();
	let ses=a.getMonth();
	if(ses>=0 && ses<=3)
	{
		console.log("Summer");
	}
	else if(ses>=4 && ses<=7)
	{
		console.log("Winter");
	}
	else
	{
		console.log("Fall");
	}