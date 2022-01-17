import React from "react";

class Contact extends React.Component {
	constructor(props) {
		super(props);
		this.state = { name: "", compagny: "", mail: "", message: "" };

		this.handleInputChange = this.handleInputChange.bind(this);
	}

	handleInputChange(e) {
		const target = e.target;
		const value = target.value;
		const name = target.name;

		this.setState({
			[name]: value,
		});
	}

	handleSubmit(e) {
		alert("Form submit ");
		e.preventDefault();
	}

	render() {
		return (
			<div className="content">
				<div className="details">
					<a href="tel:+33634354817">
						<img src="./assets/icons/phone.svg" alt="phone" />
						+33634354817
					</a>
					<a href="mailto:alexisferrandis@protonmail.com">
						<img src="./assets/icons/mail.svg" alt="mail" />
						alexisferrandis@protonmail.com
					</a>
				</div>

				<form onSubmit={this.handleSubmit}>
					<div className="form">
						<div>
							<label>
								Name :<br />
								<input name="name" type="text" value={this.state.name} onChange={this.handleInputChange} required />
							</label>
							<br />
							<label>
								Compagny :<br />
								<input name="compagny" type="text" value={this.state.compagny} onChange={this.handleInputChange} />
							</label>
							<br />
							<label>
								Mail :<br />
								<input name="mail" type="text" value={this.state.mail} onChange={this.handleInputChange} required />
							</label>
							<br />
						</div>

						<label>
							Message :<br />
							<textarea name="message" type="text" placeholder="Hello, is it possible to..." value={this.state.message} onChange={this.handleInputChange} required />
						</label>
						<br />
					</div>
					<input type="submit" value="Send" className="submit" />
				</form>

				<div className="social">
					<a href="https://github.com/AlexisFerrandis">
						<img src="./assets/icons/github.svg" alt="github" />
					</a>
					<a href="https://www.linkedin.com/in/alexis-ferrandis-5b5343106/">
						<img src="./assets/icons/linkedin.svg" alt="linkdin" />
					</a>
					<a href="https://twitter.com/AlexisFerrandis">
						<img src="./assets/icons/twitter.svg" alt="twitter" />
					</a>
				</div>
			</div>
		);
	}
}
export default Contact;
