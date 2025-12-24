function PropertyCard({property}){
    return(
        <div style={{border: "1px solid #ddd", borderRadius: "8px", padding: "15px", marginBottom: "15px", display: "flex", gap: "15px"}}>
            <img src={property.picture} alt={property.type} style={{width: "150px", height: "100px", objectFit: "cover"}}></img>

            <div>
                <h4>{property.type} - £{property.price.toLocaleString()}</h4>
                <p>{property.description}</p>
                <p><strong>Bedrooms:</strong> {property.bedrooms}</p>
                <p><strong>Location: </strong> {property.location}</p>
            </div>

        </div>
    );
}

export default PropertyCard;