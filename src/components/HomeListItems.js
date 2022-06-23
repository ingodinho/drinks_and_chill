import { Link } from 'react-router-dom';

const HomeListItems = (props) => {

	const onClickHandler = (e) => {
		props.searchHandler('')
	}

	return (
		<Link to={'/cocktails'} state={props.url} onClick={onClickHandler} className={`home_list_item ${props.className}`}>
				<div className="home_list_item_flex">
					<h2>{props.name}</h2>
					<p>{props.desc}</p>
				</div>
		</Link>
	);
};

export default HomeListItems;
