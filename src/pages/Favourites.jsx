import Card from "../components/Card/Card";

function Favourites({ items, onAddToFavourite }) {
	return (
		<div className="content p-40">
			<div className="d-flex justify-between align-center mb-40">
				<h1>Мои Закладки</h1>
			</div>

			<div className="d-flex flex-wrap">
				{items.map((item) => (
					<Card
						key={item.id}
            id={item.id}
						title={item.name}
						price={item.price}
						image={item.imageUrl}
						favourited={true}
            onFav={onAddToFavourite}
					/>
				))}
			</div>
		</div>
	);
}

export default Favourites;
