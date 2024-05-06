import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Map = ({ center, zoom }) => {
    return (
        <LoadScript googleMapsApiKey="AIzaSyBUTpK3b_HsCycOsxbQSozw_Ai8t_407k8">
            <GoogleMap
                zoom={zoom}
                center={center}
                mapContainerStyle={{
                    width: '100%',
                    height: '500px',
                    margin: 'auto'
                }}
            >
                <Marker position={center} /> {/* You can add more Markers */}
            </GoogleMap>
        </LoadScript>
    );
}

export default Map;
