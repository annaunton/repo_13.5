var os = require('os');
var calcTime = require('./calcTime');
var colors = require('colors');

function getOSinfo () {
	var type = os.type()
	var release = os.release();
	if (type === 'Darwin') {
		type = 'OSX';
	} else if (type === 'Windows_NT') {
		type = 'Windows';
	}
	var cpu = os.cpus()[0].model;
	var userInfo = os.userInfo();

	console.log('System: '.green , type);
	console.log('Release: '.yellow , release);
	console.log('CPU model: '.blue , cpu);
	calcTime.print();
	console.log('User name:'.magenta, userInfo.username);
	console.log('Home dir:'.gray, userInfo.homedir);
}

exports.print = getOSinfo;