import * as React from 'react';
import { useState, useEffect } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';


import  listLogEntries  from './API';

const App = () => {
  const [logEntries, setLogEntries] = useState([]);
  const [showPopup, setShowPopup] = useState([]);
  const [viewport, setViewport] = useState({
    width: '100vw',
    height: '100vh',
    latitude: 22.9734,
    longitude: 78.6569,
    zoom: 4
  });

  useEffect(() => {
    (async () => {
      const logEntries = await listLogEntries();
      setLogEntries(logEntries);
    })(); 

  }, []);

  return (
    <ReactMapGL
      {...viewport}
      mapStyle='mapbox://styles/bhnprksh222/ckd77zqx6012m1jrosf6e06ks'
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      onViewportChange={nextViewport => setViewport(nextViewport)}
    >
      {
        logEntries.map(entry => (
          <>
            <Marker 
              key={entry._id}
              latitude={entry.latitude} 
              longitude={entry.longitude} 
            >
              <div
                onClick={() => setShowPopup({
                  ...showPopup,
                  [entry._id]: true,
                })}
                style={{
                  cursor: 'pointer'
                }}
              >
                  <img 
                    className="marker" 
                    style={{
                      height: `${6 * viewport.zoom}`,
                      width: `${6 * viewport.zoom}`
                    }}
                    src="https://i.imgur.com/y0G5YTX.png" 
                    alt="marker" 
                  />
              </div>
            </Marker>
            {
              showPopup[entry._id] ? (
                <Popup
                  latitude={entry.latitude} 
                  longitude={entry.longitude}
                  closeButton={true}
                  closeOnClick={false}
                  onClose={() => setShowPopup({
                    ...showPopup,
                    [entry._id]: false,
                  })}
                  anchor="top" >
                  <div className="popup">
                    <h3>{entry.title}</h3>
                    <p>{entry.comments}</p>
                  </div> 
                </Popup>
              ) : null
            }
          </>
        ))
      }
    </ReactMapGL>
  );
}

export default App;