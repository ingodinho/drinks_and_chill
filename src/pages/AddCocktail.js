import { useState } from 'react';
import { Link } from 'react-router-dom';
import './AddCocktail.scss';

const AddCocktail = () => {
	const [strDrink, setStrDrink] = useState('');
	const [strCategory, setStrCategory] = useState('');
	const [strDrinkThumb, setStrDrinkThumb] = useState('');
	const [strInstructions, setStrInstructions] = useState('');
	const [strIngredient1, setStrIngredient1] = useState('');
	const [strIngredient2, setStrIngredient2] = useState('');
	const [strIngredient3, setStrIngredient3] = useState('');
	const [strMeasure1, setStrMeasure1] = useState('');
	const [strMeasure2, setStrMeasure2] = useState('');
	const [strMeasure3, setStrMeasure3] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		const userAddCocktail = {
			strDrink,
			strCategory,
			strDrinkThumb,
			strInstructions,
			strIngredient1,
			strIngredient2,
			strIngredient3,
			strMeasure1,
			strMeasure2,
			strMeasure3,
		};

		fetch('http://localhost:3000/addCocktail', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(userAddCocktail),
		}).then(() => {
			console.log('new Cocktail added');
		});
	};

	return (
		<div className='addYourCocktail_container'>
			<section className='addCocktailSection'>
				<article className='inputArticle'>
					<form onSubmit={handleSubmit} className='form_add_cocktail'>
						<div className='addName'>
							<input
								className='inputFeldAdd'
								name='add'
								id='inputName'
								type='text'
								placeholder='Name'
								value={strDrink}
								onChange={(e) => setStrDrink(e.target.value)}
								required
							/>
						</div>
						<div className='addCategory'>
							<input
								className='inputFeldAdd'
								name='add'
								type='text'
								placeholder='Category'
								value={strCategory}
								onChange={(e) => setStrCategory(e.target.value)}
								required
							/>
						</div>
						<div className='addURL'>
							<input
								className='inputFeldAdd'
								name='add'
								type='text'
								placeholder='Add your URL'
								value={strDrinkThumb}
								onChange={(e) =>
									setStrDrinkThumb(e.target.value)
								}
								required
							/>
						</div>
						<div className='addInstructions'>
							<textarea
								name='add'
								type='text'
								placeholder='Instructions'
								value={strInstructions}
								onChange={(e) =>
									setStrInstructions(e.target.value)
								}
								cols='30'
								rows='10'
								required
							></textarea>
						</div>
						<div className='addIngredient1'>
							<input
								className='inputFeldAdd'
								name='add'
								type='text'
								placeholder='Ingredient 1'
								value={strIngredient1}
								onChange={(e) =>
									setStrIngredient1(e.target.value)
								}
								required
							/>
						</div>
						<div className='addMeasure1'>
							<input
								className='inputFeldAdd'
								name='add'
								type='text'
								placeholder='Measure Ingredient 1'
								value={strMeasure1}
								onChange={(e) => setStrMeasure1(e.target.value)}
							/>
						</div>
						<div className='addIngredient2'>
							<input
								className='inputFeldAdd'
								name='add'
								type='text'
								placeholder='Ingredient 2'
								value={strIngredient2}
								onChange={(e) =>
									setStrIngredient2(e.target.value)
								}
							/>
						</div>
						<div className='addMeasure2'>
							<input
								className='inputFeldAdd'
								name='add'
								type='text'
								placeholder='Measure Ingredient 2'
								value={strMeasure2}
								onChange={(e) => setStrMeasure2(e.target.value)}
							/>
						</div>
						<div className='addIngredient3'>
							<input
								className='inputFeldAdd'
								name='add'
								type='text'
								placeholder='Ingredient 3'
								value={strIngredient3}
								onChange={(e) =>
									setStrIngredient3(e.target.value)
								}
							/>
						</div>
						<div className='addMeasure3'>
							<input
								className='inputFeldAdd'
								name='add'
								type='text'
								placeholder='Measure Ingredient 3'
								value={strMeasure3}
								onChange={(e) => setStrMeasure3(e.target.value)}
							/>
						</div>
						<div className='submitBtn'>
							<input
								className='submitAdd submit_hover'
								type='submit'
								value='Submit'
							/>
						</div>
					</form>
				</article>
				<div className='addCocktail_imgs'>
					<div className='addCocktail_img addCocktail_img_1'></div>
					<div className='addCocktail_img addCocktail_img_2'></div>
					<div className='addCocktail_img addCocktail_img_3'></div>
				</div>
			</section>
			<div className='goBackBttn'>
				<Link className='goBack' to='/'>
					{' '}Back to Home
				</Link>
			</div>
		</div>
	);
};

export default AddCocktail;
