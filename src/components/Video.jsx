import React from 'react';

function Video() {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100vh' }}>
      <video 
        src="public/video.mp4" 
        autoPlay
        loop
        muted
        style={{
          position: 'absolute',
          top: '-20px', /* Move video up slightly */
          left: '0',
          width: '100%',
          height: '80%',
          objectFit: 'cover',
          zIndex: '-10',/* Ensure the video stays behind the header */
          opacity: '0.85' /* Make the video slightly transparent */
        }}
      />
      <div style={{ position: 'relative', zIndex: '1' }}>
        {/* You can place other content here */}
      </div>
    </div>
  );
}

export default Video;
