import { Link } from 'react-router-dom';

const CocktailListItem = (props) => {
	return (
		<Link to={`/cocktails/${props.id}`}>
			<div className='cocktail_list_item'>
				<img src={props.img} alt='cocktail' />
				<h3>{props.name}</h3>
			</div>
		</Link>
	);
};

export default CocktailListItem;
