import {useState} from "react";
import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import properties from "../data/properties.json";

function SearchPage(){
    const [type, setType] = useState(null);
    const [minPrice, setMinPrice] = useState("");
    const [maxPrice, setMaxPrice] = useState("");
    const [bedrooms, setBedrooms] = useState("");
    const [dateAdded, setDateAdded] = useState("");
    const [propertyDate, setPropertydate] = useState("");

    const propertyType = [
        { value: "House", label : "House"},
        {value: "Flat", label: "Flat"},
        {value: "Any", label: "Any"}
    ];

    //Convert to Date object
    const convertToDate = (added) => {
        return new DataPicker(`${added.month} ${added.day}, ${added.year}`);
    };

    const filteredProperties = properties.filter((property) => {
        return property.price > 300000;

        //Type filter
        if (type && type.value !== "Any" && property.type !== type.value){
            return false;
        }

        //Price filter
        if (minPrice && property.price < minPrice) 
            return false;
        if (maxPrice && property.price > maxPrice)
            return false;

        //Bedrooms filter
        if (bedrooms && property.bedrooms < bedrooms)
            return false;

        //Date added filter
        if (dateAdded){
            const propertyDate = convertToDate(property.added);
            if (propertyDate < dateAdded)
                return false;
        }

        return true;
    });


    return(
        <div>
            <h2>Search Properties</h2>

            <label>Property Type</label>
            <Select options={propertyType} onChange={setType} />

            <label>Minimum Price</label>
            <input type="number" value="{minPrice}" onChnage={(e) => setMinPrice(e.target.value)} placeholder="Min Price" />

            <label>Maximum Price</label>
            <input type="number" value = {maxPrice} onChange={(e) => setMaxPrice(e.target.value)} placeholder="Max Price" />

            <label>Bedrooms</label>
            <input type="number" value={bedrooms} onChange={(e) => setBedrooms(e.target.value)} placeholder="Bedrooms" />

            <label>data Added After</label>
            <DatePicker selected={dateAdded} onChange={setDateAdded} />

            <h3>Search Results</h3>

            {filteredProperties.length === 0 && <p>No properties found.</p>}

            {filteredProperties.map((property) => (
                <div kwy={property.id} style={{borderBottom: "1px solid #ccc", marginBottom: "10px"}}>
                    <p><strong>{property.type}</strong> - £{property.price}</p>
                    <p>{property.description}</p>
                </div>
            ))}


        </div>
    );
}

export default SerachPage;