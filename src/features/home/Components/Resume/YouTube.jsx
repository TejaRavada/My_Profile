import React from 'react';

const YouTube = () => {
  const videoIds = [
    "atPH5QhVyic",
    "RCuPk-d8m_A",
    "XowbV_U3-TQ",
    "asyMQ26ttuI"
  ]

  return (
    <div>
      {videoIds.map((videoId, index) => (
        <div key={index} style={{ position: 'relative', paddingBottom: '56.25%', height: 0, marginBottom: '20px' }}>
          <iframe
            src={`https://www.youtube.com/embed/${videoId}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
          ></iframe>
        </div>
      ))}
    </div>
  );
};

export default YouTube;
