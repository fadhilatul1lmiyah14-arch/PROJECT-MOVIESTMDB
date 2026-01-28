import { createContext, useReducer, useEffect } from "react";

export const FavoritesContext = createContext();

// state awal
const initialState = {
  favorites: JSON.parse(localStorage.getItem("favorites")) || [],
};

// reducer
function favoritesReducer(state, action) {
  switch (action.type) {
    case "ADD_FAVORITE":
      return {
        favorites: [...state.favorites, action.payload],
      };

    case "REMOVE_FAVORITE":
      return {
        favorites: state.favorites.filter(
          (movie) => movie.id !== action.payload
        ),
      };

    default:
      return state;
  }
}

// provider
export function FavoritesProvider({ children }) {
  const [state, dispatch] = useReducer(favoritesReducer, initialState);

  // simpan ke localStorage setiap ada perubahan
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(state.favorites));
  }, [state.favorites]);

  return (
    <FavoritesContext.Provider value={{ state, dispatch }}>
      {children}
    </FavoritesContext.Provider>
  );
}
