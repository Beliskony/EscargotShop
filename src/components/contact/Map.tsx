import { GoogleMap, LoadScript } from "@react-google-maps/api";

const mapContainerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 5.3545, // Latitude (Exemple: Abidjan)
  lng: -4.0017, // Longitude
};

const SimpleMap = () => {
  return (
    <LoadScript googleMapsApiKey="TA_CLE_API_ICI">
      <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={12} />
    </LoadScript>
  );
};

export default SimpleMap;
