//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// import "@fortawesome/fontawesome-free/css/all.min.css";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import SecondsCounter from "./component/secondscounter.js";

//render your react application

let num1 = 0;
let num2 = 0;
let num3 = 0;
let num4 = 0;
let num5 = 0;
let num6 = 0;

setInterval(() => {
	if (num1 < 9) {
		num1++;
	} else {
		num1 = 0;
		num2++;
	}

	if (num2 > 9) {
		num2 = 0;
		num3++;
	}

	if (num3 > 9) {
		num3 = 0;
		num4++;
	}

	if (num4 > 9) {
		num4 = 0;
		num5++;
	}

	if (num5 > 9) {
		num5 = 0;
		num6++;
	}
	if (num6 > 9) {
		num1 = 0;
		num2 = 0;
		num3 = 0;
		num4 = 0;
		num5 = 0;
		num6 = 0;
	}

	ReactDOM.render(
		<SecondsCounter
			num1={num1}
			num2={num2}
			num3={num3}
			num4={num4}
			num5={num5}
			num6={num6}
		/>,
		document.querySelector("#app")
	);
}, 1000);
