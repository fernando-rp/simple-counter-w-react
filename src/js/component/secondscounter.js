import React from "react";
import PropTypes from "prop-types";

SecondsCounter.PropTypes = {
	num1: PropTypes.number,
	num2: PropTypes.number,
	num3: PropTypes.number,
	num4: PropTypes.number,
	num5: PropTypes.number,
	num6: PropTypes.number
};

function SecondsCounter(props) {
	return (
		<div className="container mt-5">
			<div className="row">
				<div className="col display-4">
					<i className="fa fa-clock"></i>
				</div>
				<div className="col display-4">{props.num6}</div>
				<div className="col display-4">{props.num5}</div>
				<div className="col display-4">{props.num4}</div>
				<div className="col display-4">{props.num3}</div>
				<div className="col display-4">{props.num2}</div>
				<div className="col display-4">{props.num1}</div>
			</div>
		</div>
	);
}

export default SecondsCounter;
