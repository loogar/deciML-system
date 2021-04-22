import React from 'react';
import {MapContainer, TileLayer, Marker} from 'react-leaflet';

const Map = (props) => {
  return (
    <div>
      <MapContainer
        center={props.position}
        zoom={3}
        style={{
          height: '400px',
        }}
      >
        <TileLayer
          attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
          url={`https://{s}.tile.osm.org/{z}/{x}/{y}.png`}
        />
        <Marker position={props.position}></Marker>
      </MapContainer>
      {/* show map with center and marker position by passing data through props */}
    </div>
  );
};

export default Map;
