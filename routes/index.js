exports.index = function(req, res){
	res.render('default',{
		title: 'Home',
		classname: 'home',
		users: ['Julz','Mike','June','Marycon']});
}

exports.about = function(req, res){
	res.render('default',{
		title: 'About us',
		classname: 'about'
	});
}
