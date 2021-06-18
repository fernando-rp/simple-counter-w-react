import React from "react";
import PropTypes from "prop-types";
//import PropTypes from "prop-types";

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

SecondsCounter.propTypes = {
	num6: PropTypes.any,
	num5: PropTypes.any,
	num4: PropTypes.any,
	num3: PropTypes.any,
	num2: PropTypes.any,
	num1: PropTypes.any
};

export default SecondsCounter;
