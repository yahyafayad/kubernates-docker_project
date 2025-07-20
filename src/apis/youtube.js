import axios from "axios"
const KEY = "AIzaSyDGs-z8c58kRwGcokTErFTLlPSVTxZz3CM";

export default axios.create({
	baseURL: "https://www.googleapis.com/youtube/v3",
	params: {
		part: "snippet",
		maxResults: 5,
		key: KEY
	}
});


