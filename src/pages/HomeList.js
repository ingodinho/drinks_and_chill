import { useState, useEffect } from 'react';

const HomeList = () => {

    // const link = 'www.thecocktaildb.com/api/json/v1/1/search.php?i=vodka';
    // const link = 'www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita';
    const link = 'www.thecocktaildb.com/api/json/v1/1/filter.php?i=Vodka';
    const [cocktails, setCocktails] = useState([]);

    fetch(link)
        .then(response => {
            console.log(response);
            return response.json()
        })
        .then(json => console.log(json))

    // useEffect( () => {
    //     fetch(link)
    //     .then(response => {
    //         console.log(response);   
    //         return response.json()
    //     })
    //     .then(json => console.log(json))
    // }, [])

    return (
        <div>TEST</div>
    )
}

export default HomeList;
