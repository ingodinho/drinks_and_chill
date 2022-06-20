import categories from '../components/categories';
import HomeListItems from '../components/HomeListItems';
import Search from '../components/Search'

const HomeList = () => {

	return (
		<div className='home_list'>
            <Search/> 
			<div className="list_grid">
                {categories.map((el,i) => (
                    <HomeListItems
                        className={`style${Math.floor((i % 6) + 1)} ${
                            i % 2 === 0 ? 'left' : 'right'
                        }`}
                        key={el.id}
                        name={el.name}
                        desc={el.description}
                        url={el.url}
                    />
                ))}
            </div>
		</div>
	);
};

export default HomeList;