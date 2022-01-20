import React from "react";

const Form = () => {
	return (
		<div className="form-component">
			<div className="form-container">
				<form>
					<img src="../assets/icons/search.svg" alt="netfloux" />
					<input type="text" placeholder="Renseignez un titre" id="search-input" />
				</form>
			</div>
		</div>
	);
};

export default Form;
