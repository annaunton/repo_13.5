
var os = require('os');

function calculateTime () {

	var uptime = os.uptime();

	var hour = Math.floor(uptime/3600);
	var minutes = Math.floor((uptime - hour*3600)/60); 
	var seconds = (uptime % 60).toFixed(0);
	var days = Math.floor(hour/24);

	console.log (uptime);

	if (uptime < 60) {
		console.log('Uptime: ', uptime.toFixed(0), 'sek');
	} else if (uptime >= 60 && uptime < 3600) {
		console.log ('Uptime: ', minutes, 'min', seconds, 'sek' );	
	} else if (uptime >= 3600 && uptime <86400) {
		console.log ('Uptime: ', hour, 'h', minutes, 'min', seconds, 'sek');               
	} else {
		console.log ('Uptime: ', days, 'days', (hour - (days*24)), 'h', minutes, 'min', seconds, 'sek');
	}
}

exports.print = calculateTime;