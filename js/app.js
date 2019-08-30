'use strict';

const moment = require('moment');
const colorArray = [
	'#EB6896',
	'#C36894',
	'#836890',
	'#46698D',
	'#0F6A8B'
]

class App {
	constructor() {
		this.container = document.getElementById('container');
		this.date = document.getElementById('date');
		this.time = document.getElementById('time');
		this.setup();
		this.update();
		setInterval(() => {
			this.update();
		}, 1000);
	}
	setup() {
		this.container.classList.add(`background-${Math.floor(Math.random() * 5)}`);
		this.container.style.backgroundColor = colorArray[Math.floor(Math.random() * colorArray.length)];
	}
	update() {
		this.date.innerHTML = moment().format('MMMM Do YYYY');
		this.time.innerHTML = moment().format('h:mm:ss a');
	}
}

new App();
