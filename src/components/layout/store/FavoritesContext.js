import { createContext, useState } from "react";
const FavoriteContext = createContext(
    {
        favorites:[],
        totalFavorites:0,
        addFavorite:(favoriteMeetUp) =>{},
        removeFavorite:(meetupId) =>{},
        itemIsFavorite: (meetupId) =>{}
    }
);

export function FavoritesContextProvider(props){
    const[userFavorites,setUserFavorites ] = useState([]);
    const context = {
        favorites: userFavorites,
        totalFavorites:userFavorites.length,
        addFavorite: addFavoriteHandler,
        removeFavorite: removeFavoriteHandler,
        itemIsFavorite: itemIsFavoriteHandler
    }

    function addFavoriteHandler(favoriteMeetUp){
        setUserFavorites((prevUserFavorites) => {
       return prevUserFavorites.concat(favoriteMeetUp)
        })
    }

    function removeFavoriteHandler(meetupId){
        setUserFavorites(userFavorites.filter((meetup)=> meetup.id !== meetupId))
    }

    function itemIsFavoriteHandler(meetupId){
        return userFavorites.some(meetup => meetup.id === meetupId);
    }
   return <FavoriteContext.Provider value={context}>
    {props.children}
   </FavoriteContext.Provider>
}

export default FavoriteContext;