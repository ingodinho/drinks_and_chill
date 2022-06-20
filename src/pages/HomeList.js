import { useState, useEffect } from 'react';

const HomeList = () => {

    // const link = 'www.thecocktaildb.com/api/json/v1/1/search.php?i=vodka';
    // const link = 'www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita';
    // const link = 'www.thecocktaildb.com/api/json/v1/1/filter.php?i=Vodka';
    // const [cocktails, setCocktails] = useState([]);

    // fetch("www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
    //     .then(response => response.json())
    //     .then(json => console.log(json.drinks))

    const [drink, setDrink] = useState([]);

    useEffect(() => {
        fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
            .then((res) => res.json())
            .then((json) => setDrink(json.drinks));
    }, []);
    console.log(drink);


    return (
        <div>TEST</div>
    )
}

export default HomeList;
