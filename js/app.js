'use strict';

const moment = require('moment');
const classArray = [
	'pink',
	'yellow',
	'green',
	'blue'
];

class App {
	constructor() {
		this.body = document.body;
		this.date = document.getElementById('date');
		this.time = document.getElementById('time');
		this.setup();
		this.update();
		setInterval(() => {
			this.update();
		}, 1000);
	}
	setup() {
		this.body.classList.add(`gradient-${classArray[Math.floor(Math.random() * classArray.length)]}`);
	}
	update() {
		this.date.innerHTML = moment().format('MMMM Do YYYY');
		this.time.innerHTML = moment().format('h:mm:ss a');
	}
}

new App();