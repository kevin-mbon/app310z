import { useContext } from "react";
import FavoriteContext from "../components/layout/store/FavoritesContext";
import MeetUpList from "../components/layout/meetups/MeetUpList";

function FavoritesPage(){

    const FavoriteCtx = useContext(FavoriteContext)

    let content;
    if(FavoriteCtx.totalFavorites ===0){
        content = <p>There's no favorites meetup. You may start add some</p>
    }else{
        content = <MeetUpList meetups={FavoriteCtx.favorites} />
    }
    return <section>
        <h1>Favorites Page</h1>
        {content}
        </section>
}

export default FavoritesPage;