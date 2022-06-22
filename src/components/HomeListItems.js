import { Link } from 'react-router-dom';

const HomeListItems = (props) => {

	const onClickHandler = (e) => {
		props.searchHandler('')
	}

	return (
		<Link to={'/cocktails'} state={props.url} onClick={onClickHandler}>
			<div className={`home_list_item ${props.className}`} >
				<h2>{props.name}</h2>
				<p>{props.desc}</p>
			</div>
		</Link>
	);
};

export default HomeListItems;
