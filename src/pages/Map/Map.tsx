import { useNavigate } from "react-router";
import { Map } from "../../components/Map/Map";
import { useSearchParams } from "react-router-dom";

const DEFAULT_LOCATION = 0;

export const MapPage = () => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();

    const latitude = Number(searchParams.get("lat")) || DEFAULT_LOCATION;
    const longitude = Number(searchParams.get("lng")) || DEFAULT_LOCATION;

    const handleNavigateBack = () => navigate(-1);

    return (
        <>
            <button onClick={handleNavigateBack}>Back</button>
            <Map latitude={latitude} longitude={longitude} />
        </>
    );
};
