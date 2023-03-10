import classes from './Header.module.css'
import { Fragment } from 'react';
import mealsImage from  '../../assets/meals.jpg';
import HeaderCartButton from './HeaderCartButton';


const Header = (props) =>{
    return (
        <Fragment>
            <header className={classes.header}>
                <h1 >
                    
                     Special meals</h1>
                <HeaderCartButton onClick={props.onCartClick}/>
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImage} alt='A table full of delicious Food!'/>
            </div>
            

        </Fragment>
    
        
    );
};
export default Header;