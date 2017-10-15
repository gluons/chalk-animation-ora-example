const ora = require('ora');
const chalkAnimation = require('chalk-animation');

const spinner = ora(' ');
const rainbow = chalkAnimation.rainbow('Lorem ipsum dolor sit amet').stop();

setInterval(function () {
	spinner.text = rainbow.frame().substring(11);
	spinner.render();
}, 50);
