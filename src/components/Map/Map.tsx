import MapGl, { CircleLayer, Layer, Source } from 'react-map-gl';

const REACT_APP_MAPBOX_API_KEY = process.env.REACT_APP_MAPBOX_API_KEY


type MapProps = {
    latitude: number;
    longitude: number;
};

const layerStyle: CircleLayer = {
    id: 'point',
    type: 'circle',
    paint: {
        'circle-radius': 10,
        'circle-color': '#007cbf'
    }
};

export const Map = ({ latitude, longitude }: MapProps) => {
    const geojson: GeoJSON.FeatureCollection = {
        type: 'FeatureCollection',
        features: [
            { type: 'Feature', geometry: { type: 'Point', coordinates: [longitude, latitude] }, properties: {} }
        ]
    };

    return (
        <div style={{ height: "100vh", width: "100%" }}>

            <MapGl
                mapboxAccessToken={REACT_APP_MAPBOX_API_KEY}
                initialViewState={{
                    longitude: longitude,
                    latitude: latitude,
                    zoom: 10
                }}
                style={{ width: '100%', height: '100%' }}
                mapStyle="mapbox://styles/mapbox/streets-v9"
            >

                <Source id="my-data" type="geojson" data={geojson}>
                    <Layer {...layerStyle} />
                </Source>
            </MapGl>
        </div>
    );
};
