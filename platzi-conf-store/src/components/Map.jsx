import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Map = () => {
	const mapContainerStyle = {
		height: "50vh",
		width: "100%",
	}

	const defaultCenter = {
		lat: 69, lng: 69
	}
	
	return(
		<LoadScript googleMapsApiKey='AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw'>
			<GoogleMap
				MapContainerStyle={mapContainerStyle}
				zoom={9}
				center={defaultCenter}
			>
				<Marker position={defaultCenter} />
			</GoogleMap>
		</LoadScript>
	);
}

export default Map;