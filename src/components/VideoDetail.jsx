// Video detail component shows current selected video which is about to display

export default function ({ video }) {
	if (!video) {
		return <div>no video selected...</div>
	}
	const videoSrc = `https://youtube.com/embed/${video.id.videoId}`;
	return (
		<div>
			<div className="ui embed">
				<iframe src={videoSrc} />
			</div>
			<div className="ui segmant">
				<h4 className="ui header">{video.snippet.title}</h4>
				<p>{video.snippet.description}</p>
			</div>
		</div>
	)
}