import React from "react";
import classes from './AvailableMeals.module.css';
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";


const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Sushi',
      description: 'Finest fish and veggies',
      price: 100,
    },
    {
      id: 'm2',
      name: 'Schnitzel',
      description: 'A german specialty!',
      price: 200,
    },
    {
      id: 'm3',
      name: 'Barbecue Burger',
      description: 'American, raw, meaty',
      price: 500,
    },
    {
      id: 'm4',
      name: 'Green Bowl',
      description: 'Healthy...and green...',
      price: 300,
    },
  ];

const AvailableMeals = () => {
    const mealsList = DUMMY_MEALS.map((meal) => 
    (<MealItem 
      key={meal.id}
      id = {meal.id}
      name={meal.name}
      price={meal.price}
      description={meal.description}
    />));
    
    return (
        <section className={classes.meals}>
            <Card>
                <ul>{mealsList}</ul>
                
            </Card>    
        </section>
    );

};

export default AvailableMeals;