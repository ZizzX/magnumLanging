import addedClassName from '../helpers/addedClass.js';

class VideoFrame {
	render(classname, videoSrc) {
		const iframeElementWrapper = document.createElement('div');
		addedClassName(iframeElementWrapper, classname);
		
		iframeElementWrapper.innerHTML =
				`
					<iframe
					width="100%"
					height="100%"
					src=${videoSrc}
					title="YouTube video player" frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowfullscreen></iframe>
				`;
		
		return iframeElementWrapper;
	}
}

export default VideoFrame;
