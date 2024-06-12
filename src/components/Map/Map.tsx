import GoogleMapReact from "google-map-react";

type MapProps = {
    latitude: number;
    longitude: number;
};

export const Map = ({ latitude, longitude }: MapProps) => {
    return (
        <div style={{ height: "100vh", width: "100%" }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: "" }}
                defaultCenter={{
                    lat: latitude,
                    lng: longitude,
                }}
                defaultZoom={11}
            ></GoogleMapReact>
        </div>
    );
};
