// Video item compoent display one video item with image and litle details

// Css
import "../assets/css/VideoListcss.css"

export default function ({ video, onVideoSelect }) {

	return (
		<div className="video-item item" onClick={() => onVideoSelect(video)}>
			<img alt={video.snippet.title} className="ui image" src={video.snippet.thumbnails.medium.url} />
			<div className="content">
				<div className="header">
					Video #{video.snippet.title}
				</div>
			</div>
		</div>

	)
}