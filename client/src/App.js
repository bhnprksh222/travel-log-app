import * as React from 'react';
import { useState, useEffect } from 'react';
import ReactMapGL from 'react-map-gl';

import  listLogEntries  from './API';

const App = () => {
  const [viewport, setViewport] = useState({
    width: '100vw',
    height: '100vh',
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 3
  });

  useEffect(() => {
    (async () => {
      const logEntries = await listLogEntries();
      console.log(logEntries);
    })();

    return () => {
      // clean up things
    };

  }, []);

  return (
    <ReactMapGL
      {...viewport}
      mapStyle='mapbox://styles/bhnprksh222/ckd74a43f0l0j1ipf6c1dpvp4'
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      onViewportChange={nextViewport => setViewport(nextViewport)}
    />
  );
}

export default App;