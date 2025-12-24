import Select from "React-select";
import DataPicker from "react-datapicker";
import "react-datepicker/dist/react-datepicker.css";

function SerachPage(){
    const propertyType = [
        { value: "House", label : "House"},
        {value: "Flat", label: "Flat"},
        {value: "Bungalow", label: "Bungalow"},
        {value : "Apartment", label : "Apartment"}
    ];

    return(
        <div>
            <h2>Search Properties</h2>

            <label>Property Type</label>
            <Select options={propertyTypes} />

            <label>Minimum Price</label>
            <input type="number" placeholder="Min Price" />

            <label>Maximum Price</label>
            <input type="number" placeholder="Max Price" />

            <label>Bedrooms</label>
            <input type="number" placeholder="Bedrooms" />

            <label>data Added After</label>
            <DatePicker />

            <label>Postcode Area</label>
            <input type="text" placeholder="e.g. NW1" />

        </div>
    );
}

export default SerachPage;