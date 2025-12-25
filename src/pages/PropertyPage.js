import { useParams } from "react-router-dom";
import properties from "../data/properties.json";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

function PropertyPage() {
  const { id } = useParams();
  const property = properties.find((p) => p.id === id);
  const safeLocation = encodeURIComponent(property.location);

  if (!property) {
    return <p>Property not found</p>;
  }

  return (
    <div>
      <h2>
        {property.type} – £{property.price.toLocaleString()}
      </h2>

      <img
        src={property.picture}
        alt={property.type}
        style={{ width: "100%", maxWidth: "600px", marginBottom: "20px" }}
      />

      <Tabs>
        <TabList>
          <Tab>Description</Tab>
          <Tab>Floor Plan</Tab>
          <Tab>Map</Tab>
        </TabList>

        <TabPanel>
          <p>{property.description}</p>
          <p><strong>Bedrooms:</strong> {property.bedrooms}</p>
          <p><strong>Tenure:</strong> {property.tenure}</p>
        </TabPanel>

        <TabPanel>
          <img
            src="images/floorplan-placeholder.png"
            alt="Floor Plan"
            style={{ width: "100%", maxWidth: "500px" }}
          />
        </TabPanel>

        <TabPanel>
          <iframe
            title="map"
            width="100%"
            height="300"
            loading="lazy"
            src={`https://www.google.com/maps?q=${safeLocation}&output=embed`}
          ></iframe>
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default PropertyPage;