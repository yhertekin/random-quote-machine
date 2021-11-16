import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

import "./App.css";

const App = () => {
	const [quote, setQuote] = useState();
	const [author, setAuthor] = useState();

	const changeColor = () => {
		let r = Math.floor(Math.random() * 255);
		let g = Math.floor(Math.random() * 255);
		let b = Math.floor(Math.random() * 255);
		const color = `rgba(${r},${g},${b})`;

		document.body.style.backgroundColor = color;
		document.body.style.color = color;
		document.getElementById("new-quote").style.backgroundColor = color;
		document.getElementById("tweet-quote").style.color = color;
	};

	const changeQuote = async () => {
		const { data } = await axios.get(
			"https://api.quotable.io/random?maxLength=80"
		);
		setQuote(data.content);
		setAuthor(data.author);
		changeColor();
	};

	useEffect(() => {
		changeQuote();
	}, []);

	return (
		<div id="quote-box">
			<div id="text">
				<i className="fas fa-quote-right" id="quote-icon"></i>
				<p>{quote}</p>
			</div>
			<div id="author">- {author}</div>
			<div id="bottom">
				<a id="tweet-quote" href="twitter.com/intent/tweet" target="_blank">
					<i className="fab fa-twitter-square"></i>
				</a>
				<button id="new-quote" onClick={changeQuote}>
					New quote
				</button>
			</div>
		</div>
	);
};

export default App;
