import { useState } from 'react';
import drinks from '../components/AddCocktailItem'
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const AddCocktail = () => {
    const [strDrink, setStrDrink] = useState("");
    const [strCategory, setStrCategory] = useState("");
    const [strDrinkThumb, setStrDrinkThumb] = useState("");
    const [strInstructions, setStrInstructions] = useState("");
    const [strIngredient1, setStrIngredient1] = useState("");
    const [strIngredient2, setStrIngredient2] = useState("");
    const [strIngredient3, setStrIngredient3] = useState("");
    const [strMeasure1, setStrMeasure1] = useState("");
    const [strMeasure2, setStrMeasure2] = useState("");
    const [strMeasure3, setStrMeasure3] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const userAddCocktail =
        {
            strDrink, strCategory, strDrinkThumb, strInstructions, strIngredient1, strIngredient2, strIngredient3, strMeasure1, strMeasure2, strMeasure3
        }

        console.log(userAddCocktail);
        console.log(drinks)

        fetch('http://localhost:3000/addCocktail', {
            method: 'POST',
            headers: { 'Content-Type': "application/json" },
            body: JSON.stringify(userAddCocktail)
        }).then(() => {
            console.log('new Cocktail added')
            console.log()
        })
    }

    return (
        <div className="addYourCocktail_container">
            <Navbar />
            <article>
                <h2> Cocktails & Drinks!</h2>
                <p>Welcome to the world of Cocktails & Drinks!</p>
            </article>

            <form onSubmit={handleSubmit}>
                <div className="addName">
                    <input
                        name="add"
                        id="inputName"
                        type="text"
                        placeholder="Name"
                        value={strDrink}
                        onChange={(e) => setStrDrink(e.target.value)} />
                </div>
                <div className="addCategory">
                    <input
                        name="add"
                        type="text"
                        placeholder="Category"
                        value={strCategory}
                        onChange={(e) => setStrCategory(e.target.value)} />
                </div>
                <div className="addURL">
                    <input
                        name="add"
                        type="text"
                        placeholder="Add your URL"
                        value={strDrinkThumb}
                        onChange={(e) => setStrDrinkThumb(e.target.value)} />
                </div>
                <div className="addInstructions">
                    <textarea name="add"
                        type="text"
                        placeholder="Instructions"
                        value={strInstructions}
                        onChange={(e) => setStrInstructions(e.target.value)}
                        cols="30" rows="10">
                    </textarea>
                </div>
                <div className="addIngredient1">
                    <input
                        name="add"
                        type="text"
                        placeholder="Ingredient 1"
                        value={strIngredient1}
                        onChange={(e) => setStrIngredient1(e.target.value)} />
                </div>
                <div className="addMeasure1">
                    <input
                        name="add"
                        type="text"
                        placeholder="Measure Ingredient 1"
                        value={strMeasure1}
                        onChange={(e) => setStrMeasure1(e.target.value)} />
                </div>
                <div className="addIngredient2">
                    <input
                        name="add"
                        type="text"
                        placeholder="Ingredient 2"
                        value={strIngredient2}
                        onChange={(e) => setStrIngredient2(e.target.value)} />
                </div>
                <div className="addMeasure2">
                    <input
                        name="add"
                        type="text"
                        placeholder="Measure Ingredient 2"
                        value={strMeasure2}
                        onChange={(e) => setStrMeasure2(e.target.value)} />
                </div>
                <div className="addIngredient3">
                    <input
                        name="add"
                        type="text"
                        placeholder="Ingredient 3"
                        value={strIngredient3}
                        onChange={(e) => setStrIngredient3(e.target.value)} />
                </div>
                <div className="addMeasure3">
                    <input
                        name="add"
                        type="text"
                        placeholder="Measure Ingredient 3"
                        value={strMeasure3}
                        onChange={(e) => setStrMeasure3(e.target.value)} />
                </div>
                <div className="submitBtn">
                    <input type="submit" value="Submit" />
                </div>
            </form>
            <div className="div_img1"></div>
            <div className="div_img2"></div>
            <div className="div_img"></div>
            <Link to="/">Back to Home</Link>
        </div >
    )
}

export default AddCocktail

