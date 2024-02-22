import {Link} from 'react-router-dom'
import classes from './navBar.module.css'
import { useContext } from 'react';
import FavoriteContext from './store/FavoritesContext';
function NavBar(){

    const FavoriteCtx = useContext(FavoriteContext);
    return (
        <header className={classes.header}>
            <div className= {classes.logo} >App310z</div>
            <ul>
                <li>
             <Link to={'/'}>All meet up</Link>
                </li>
                <li>
             <Link to={'/new-meet'}>New meet up</Link>
                </li>
                <li>
             <Link to={'/Favorites'}>Favorites <span className={classes.badge}>{FavoriteCtx.totalFavorites}</span></Link>
                </li>
            </ul>
        </header>
    )
}

export default NavBar;