import classes from './meetUpItem.module.css'
import Card from '../ui/Card';
import FavoriteContext from '../store/FavoritesContext';
import { useContext } from 'react';

function MeetUpItem(props){
   const FavoriteCtx = useContext(FavoriteContext)
  const itemIsFavorite = FavoriteContext.itemIsFavorite(props.id);
   function toggleFavoriteStatusHandler(){
    if(itemIsFavorite){
        FavoriteCtx.removeFavorite(props.id)
    }else{
        FavoriteCtx.addFavorite({
            id:props.id,
            title: props.title,
            description:props.description,
            image: props.image,
            address: props.address
        })
    }

    }
    return <li className={classes.item}>
        <Card>
        <div className={ classes.image}> 
            <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}> 
            {props.title}
            <address>{props.address}</address>
        <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
            <button onClick={toggleFavoriteStatusHandler}>{itemIsFavorite ? 'remove from favorite':'to favorite'}</button>
        </div>
        </Card>
    </li>
}
export default MeetUpItem;