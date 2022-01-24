import React, { useState } from "react";

const Chatbot = () => {
	const questions = [
		/* 0 */ ["hey", "coucou", "hello"],
		/* 1 */ ["comment ca va", "ca va"],
		/* 2 */ ["petou", "petou"],
		/* 3 */ ["bien", "super", "cool", "je vais bien"],
		/* 4 */ ["bof", "triste", "fatigué", "mal"],
		/* 5 */ ["raconte moi un histoire", "raconte moi un blague"],
		/* 6 */ ["merci", "merci beaucoup"],
		/* 7 */ ["au revoir", "bye", "a la prochaine"],
	];

	const answers = [/* 0 */ ["Hello !", "Salut !", "Bienvenue !", "Café !"], /* 1 */ ["Je vais bien, et toi?", "Super, mais j'ai trop mangé...", "Cha va, y tu?"], /* 2 */ ["petou", "petou"], /* 3 */ ["Ca me fait plaisir alors !"], /* 4 */ ["Bah alors... Comment ca se fait?"], /* 5 */ ["A propos de quoi?", "Il était une fois"], /* 6 */ ["NP", "Pas de problème", "Ca me fait plaisir"], /* 7 */ ["A la prochaine", "Au revoir"]];

	const [userMessage, setUserMessage] = useState("");
	const [suggestions, setSuggestions] = useState("");

	const [error, setError] = useState(false);

	const handleSubmit = () => {
		userMessage.replace(/[^\w\s\d]/gi, "");
		const chatArea = document.getElementById("chatArea");
		const messageDOM = `<div class="user box"><p>${userMessage}</p></div>`;
		if (userMessage.length < 24 && userMessage.length >= 3) {
			chatArea.innerHTML += messageDOM;
			setUserMessage("");
			setError(false);
		} else {
			setError(true);
		}
	};

	const handleMessage = (msg) => {
		msg.toLocaleLowerCase();
		msg.replace(/ un /g, "").replace(/ une /g, "").replace(/ le /g, "").replace(/ la /g, "").replace(/ je /g, ""); /*to continue*/
	};

	// TODO TODO TODO

	// const interaction = (questionsArray, answerArray, textmsg) =>  {
	// 	let i;
	// 	for (let x = 0; x < questionsArray.length; x++) {
	// 		for (let y = 0; y < answerArray.length; y++) {
	// 			if (questionsArray[x][y] === textmsg) {
	// 				let items = answerArray[x];
	// 				i = items[Math.floor(Math.random() * items.length)];
	// 			}
	// 		}
	// 	}
	// 	return i;
	// }

	return (
		<div className="chatbot-content">
			<div id="chatArea">
				<div className="bot box">
					<img src="../assets/img/projects/chatbot/chatbot.gif" alt="T.bot" />
					<div className="msg-display">
						<p>
							Bonjour, je suis T.bot.
							<br />
							Chatbot à votre service.
						</p>
					</div>
				</div>
			</div>
			<div className="suggestions">
				<button>Hello</button>
				<button>Bonjour</button>
			</div>
			<div className="text-input">
				{error && <p className="error">message incorrect</p>}
				<input name="userMessage" type="text" placeholder="Bien le bonjour !" value={userMessage} onChange={(e) => setUserMessage(e.target.value)} />
				<button type="button" onClick={handleSubmit}>
					<img src="../assets/icons/paper-plane.svg" alt="envoyer" />
				</button>
			</div>
		</div>
	);
};

export default Chatbot;
