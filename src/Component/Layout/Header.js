import React from "react";
import classes from './Header.module.css';
// import mealsImage from '../../assets/meals.jpg';
import indianMeal from '../../assets/veg-meals.jpg';
import HeaderCartButton from "./HeaderCartButton";
const Header = (props) => {
    return (
      <React.Fragment>
        <header className={classes.header}>
          <h1>ReactMeals</h1>
          <HeaderCartButton onClick={props.onShowCart} />
        </header>
        <div className={classes["main-image"]}>
          <img src={indianMeal} alt="A table full of Indian Desi Food" />
        </div>
      </React.Fragment>
    )
}

export default Header;