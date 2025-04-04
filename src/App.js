import React from "react";
import axios from "axios";

import { Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Drawer from "./components/Drawer";
import Home from "./pages/Home";
import Favourites from "./pages/Favourites";

function App() {
	const [items, setItems] = React.useState([]);
	const [cartItems, setCartItems] = React.useState([]);
	const [fav, setFav] = React.useState([]);
	const [searchValue, setSearchValue] = React.useState("");
	const [cardOpened, setCardOpened] = React.useState(false);

	React.useEffect(() => {
		axios.get("https://b663fe059daecda8.mokky.dev/items").then((res) => {
			setItems(res.data);
		});
		axios.get("https://b663fe059daecda8.mokky.dev/cart").then((res) => {
			setCartItems(res.data);
		});
		axios.get("https://b663fe059daecda8.mokky.dev/favourites").then((res) => {
			setFav(res.data);
		});
	}, []);

	const onAddToCart = async (obj) => {
		const { data } = await axios.post(
			"https://b663fe059daecda8.mokky.dev/cart",
			obj,
		);
		setCartItems((prev) => [...prev, data]);
	};
	const onAddToFavourite = async (obj, id) => {
		if (fav.find((favObj) => favObj.id === id)) {
			await axios.delete(
				`https://b663fe059daecda8.mokky.dev/favourites/${id}`,
			);
			setFav((prev) => prev.filter((item) => item.id !== id));
		} else {
			const { data } = await axios.post(
				"https://b663fe059daecda8.mokky.dev/favourites",
				obj,
			);
			setFav((prev) => [...prev, data]);
		}
	};

	const onRemoveItem = (id) => {
		axios.delete(`https://b663fe059daecda8.mokky.dev/cart/${id}`).then(() => {
			setCartItems((prev) => prev.filter((item) => item.id !== id));
		});
	};

	const onChangeSearchInput = (event) => {
		setSearchValue(event.target.value);
	};

	return (
		<div className="wrapper clear">
			{cardOpened && (
				<Drawer
					items={cartItems}
					onClose={() => setCardOpened(false)}
					onRemove={onRemoveItem}
				/>
			)}
			{/* если левая часть true, то выполни правую часть. если false, то не выполняй правую часть */}
			<Header onClickCart={() => setCardOpened(true)} />

			<Routes>
				<Route
					path="/"
					exact
					element={
						<Home
							searchValue={searchValue}
							items={items}
							onChangeSearchInput={onChangeSearchInput}
							setSearchValue={setSearchValue}
							onAddToFavourite={onAddToFavourite}
							onAddToCart={onAddToCart}
						/>
					}
				/>
			</Routes>
			<Routes>
				<Route
					path="/Favourites"
					exact
					element={
						<Favourites items={fav} onAddToFavourite={onAddToFavourite} />
					}
				/>
			</Routes>
		</div>
	);
}

export default App;
