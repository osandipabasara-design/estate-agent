import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import SearchPage from "../pages/SearchPage";
import { BrowserRouter } from "react-router-dom";
import { FavouritesProvider } from "../context/FavouritesContext";


test ("renders search page heading", () => {
    render(
        <FavouritesProvider>
            <BrowserRouter>
                <SearchPage></SearchPage>
            </BrowserRouter>
        </FavouritesProvider>
    );

    const heading = screen.getByText(/search properties/i);
    expect(heading).toBeInTheDocument();
});

test("renders search inputs", () => {
    render(
        <FavouritesProvider>
            <BrowserRouter>
                <SearchPage></SearchPage>
            </BrowserRouter>
        </FavouritesProvider>
    );

    expect(screen.getByText(/minimum price/i)).toBeInTheDocument();
    expecct(screen.getByText(/maximum price/i)).toBeInTheDocument();
    expect(screen.getByText(/bedrooms/i)).toBeInTheDocument();
});