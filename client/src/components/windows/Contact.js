import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export const Contact = () => {
	// Input states
	const [name, setName] = useState("");
	const [compagny, setCompagny] = useState("");
	const [mail, setMail] = useState("");
	const [message, setMessage] = useState("");
	const [messageSent, setMessageSent] = useState(false);

	// Error states
	const [nameError, setNameError] = useState(false);
	const [compagnyError, setCompagnyError] = useState(false);
	const [mailError, setMailError] = useState(false);
	const [messageError, setMessageError] = useState(false);

	const form = useRef();

	// Regex
	function inputValidation() {
		if (name.length < 24 && name.length > 3 && /^([A-Za-z]{3,20})?([-]{0,1})?([A-Za-z]{3,20})$/.test(name)) {
			setNameError(false);
			if (compagny.length < 24) {
				setCompagnyError(false);
				if (mail.length < 24 && (mail.length > 6) & /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(mail)) {
					setMailError(false);
					if (message.length < 300 && message.length > 12 && /^([\w-.]{12,300})$/.test(message)) {
						setMessageError(false);
						return true;
					} else {
						setMessageError(true);
						return false;
					}
				} else {
					setMailError(true);
					return false;
				}
			} else {
				setCompagnyError(true);
				return false;
			}
		} else {
			setNameError(true);
			return false;
		}
	}

	// Handle submit
	const sendEmail = (e) => {
		e.preventDefault();

		if (inputValidation()) {
			emailjs.sendForm("", "", form.current, "").then(
				(res) => {
					console.log("Message sent, thank u :)");
					setName("");
					setCompagny("");
					setMail("");
					setMessage("");
					setMessageSent(true);
				},
				(err) => {
					console.log(err.text);
				}
			);
		}
	};

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

			<form ref={form} onSubmit={sendEmail}>
				<div className="form">
					<div>
						<label htmlFor="name">
							Nom <span>*</span> :<br />
							<input name="name" type="text" minLength="3" maxLength="24" pattern="[a-z A-Z]{3,24}" value={name} onChange={(e) => setName(e.target.value)} required />
							{nameError && <div className="error">Nom invalide.</div>}
						</label>
						<br />
						<label htmlFor="compagny">
							Entreprise :<br />
							<input name="compagny" type="text" maxLength="24" pattern="[a-z A-Z]{2,24}" value={compagny} onChange={(e) => setCompagny(e.target.value)} />
							{compagnyError && <div className="error">Le nom est invalide.</div>}
						</label>
						<br />
						<label htmlFor="mail">
							Email <span>*</span> :<br />
							<input name="mail" type="text" minLength="6" maxLength="24" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$" value={mail} onChange={(e) => setMail(e.target.value)} required />
							{mailError && <div className="error">L'email est invalide</div>}
						</label>
						<br />
					</div>

					<label htmlFor="message">
						Message <span>*</span> :<br />
						<textarea name="message" type="text" placeholder="Bonjour, serait-il possible de ..." minLength="12" maxLength="300" value={message} onChange={(e) => setMessage(e.target.value)} required />
						{messageError && <div className="error">Le message contient des erreurs</div>}
					</label>
					<br />
				</div>
				{messageSent && <p className="message-sent">Merci pour votre message, je vous répondrai au plus vite.</p>}
				<input type="submit" value="Envoyer" className="submit" />
			</form>

			<div className="social">
				<a href="https://www.linkedin.com/in/alexis-ferrandis-5b5343106/">
					<img src="../assets/icons/linkedin.svg" alt="linkdin" />
				</a>
				<a href="https://github.com/AlexisFerrandis">
					<img src="../assets/icons/github.svg" alt="github" />
				</a>
				<a href="https://twitter.com/AlexisFerrandis">
					<img src="../assets/icons/twitter.svg" alt="twitter" />
				</a>
			</div>
		</div>
	);
};
export default Contact;
