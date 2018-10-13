'use strict';

const moment = require('moment');
const colorArray = [
	'#90A5C1',
	'#F0DFA7',
	'#B8B19E',
	'#D56365',
	'#748F63'
]

class App {
	constructor() {
		console.log('hello world');
		this.container = document.getElementById('container');
		this.date = document.getElementById('date');
		this.time = document.getElementById('time');
		this.update = this.update.bind(this);
		this.setup();
		this.update();
		setInterval(() => {
			this.update();
		}, 1000);
	}
	setup() {
		this.container.style.backgroundColor = colorArray[Math.floor(Math.random() * colorArray.length)];
	}
	update() {
		this.date.innerHTML = moment().format('MMMM Do YYYY');
		this.time.innerHTML = moment().format('h:mm:ss a');
	}
}

new App();