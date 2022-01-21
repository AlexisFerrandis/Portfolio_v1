import React from "react";
// import axios from "axios";

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
		e.preventDefault();
		const nameError = document.querySelector(".name.error");
		const mailError = document.querySelector(".email.error");
		const messageError = document.querySelector(".message.error");

		const name = e.target.name.value;
		const compagny = e.target.compagny.value;
		const mail = e.target.mail.value;
		const message = e.target.message.value;

		if (name.length < 30 || name.length > 3 || /^([A-Za-z]{3,20})?([-]{0,1})?([A-Za-z]{3,20})$/.test(name)) {
			nameError.innerHTML = "";
			if (mail.length < 30 || mail.length > 3 || /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(mail)) {
				mailError.innerHTML = "";
				if (message.length < 30 || message.length > 3 || /^([A-Za-z]{3,20})?([-]{0,1})?([A-Za-z]{3,20})$/.test(message)) {
					messageError.innerHTML = "";

					let data = {
						userName: name,
						userCompagny: compagny,
						userMail: mail,
						userMessage: message,
					};

					console.log(data);
				} else messageError.innerHTML = "Veuillez renseigner un message correct";
			} else mailError.innerHTML = "Veuillez renseigner un email correct";
		} else nameError.innerHTML = "Veuillez renseigner un nom correct";
	}

	render() {
		return (
			<div className="content">
				<div className="details">
					<a href="tel:+33634354817">
						<img src="../assets/icons/phone.svg" alt="phone" />
						+33634354817
					</a>
					<a href="mailto:alexisferrandis@protonmail.com">
						<img src="../assets/icons/mail.svg" alt="mail" />
						alexisferrandis@protonmail.com
					</a>
				</div>

				<form onSubmit={this.handleSubmit}>
					<div className="form">
						<div>
							<label htmlFor="name">
								Nom <span>*</span> :<br />
								<input name="name" type="text" value={this.state.name} onChange={this.handleInputChange} required maxLength="24" pattern="[a-z A-Z]{2,30}" />
								<div className="name error"></div>
							</label>
							<br />
							<label htmlFor="compagny">
								Entreprise :<br />
								<input name="compagny" type="text" value={this.state.compagny} onChange={this.handleInputChange} maxLength="24" pattern="[a-z A-Z]{2,30}" />
							</label>
							<br />
							<label htmlFor="mail">
								Mail <span>*</span> :<br />
								<input name="mail" type="text" value={this.state.mail} onChange={this.handleInputChange} required maxLength="24" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$" />
								<div className="mail error"></div>
							</label>
							<br />
						</div>

						<label htmlFor="message">
							Message <span>*</span> :<br />
							<textarea name="message" type="text" placeholder="Bonjour, serait-il possible de ..." value={this.state.message} onChange={this.handleInputChange} required maxLength="300" />
							<div className="message error"></div>
						</label>
						<br />
					</div>
					<input type="submit" value="Envoyer" className="submit" />
				</form>

				<div className="social">
					<a href="https://github.com/AlexisFerrandis">
						<img src="../assets/icons/github.svg" alt="github" />
					</a>
					<a href="https://www.linkedin.com/in/alexis-ferrandis-5b5343106/">
						<img src="../assets/icons/linkedin.svg" alt="linkdin" />
					</a>
					<a href="https://twitter.com/AlexisFerrandis">
						<img src="../assets/icons/twitter.svg" alt="twitter" />
					</a>
				</div>
			</div>
		);
	}
}
export default Contact;
