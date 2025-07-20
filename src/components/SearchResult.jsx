/*  Search Result component to show selected
  video and video list form search result
 */
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

export default function ({ selectedVideo, videos, onVideoSelect }) {

	return (<div className="ui grid">
		<div className="row">
			<div className="eleven wide column">
				<VideoDetail video={selectedVideo} />
			</div>
			<div className="five wide column">
				<VideoList videos={videos} onVideoSelect={onVideoSelect} />
			</div>
		</div>
	</div>)

}