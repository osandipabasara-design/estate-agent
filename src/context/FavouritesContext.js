import { useContext } from "react";
import { FavouritesContext } from "../context/FavouritesContext";

function FavouritesContext(){
    const { favourites, removefavourite, clearFavourites } = useContext(FavouritesContext);

    if (favourites.length === 0){
        return <p>No favourites yet.</p>
    }

    return (
        <div>
            <h3>Favourites</h3>

            {favourites.map((property) => (
                <div key={property.id} style={{marginBottom: "10px"}}>
                    <p>
                        {property.type} - £{property.price.toLocaleString()}
                    </p>
                    <button onClick={() => removefavourite(property.id)}>
                    ❌ Remove
                    </button>
                </div>
            ))}

            <button onClick={clearFavourites}>
                Clear All
            </button>
        </div>
    );
}

export default FavouritesContext;