import { Link } from 'react-router-dom';

const CocktailListItem = (props) => {
	console.log(props.className);
	return (
		<Link to={`/cocktails/${props.id}`}>
			<div className={`cocktail_list_item style ${props.className}`}>
				<img src={props.img} alt='cocktail' />
				<h3>{props.name}</h3>
			</div>
		</Link>
	);
};

export default CocktailListItem;
