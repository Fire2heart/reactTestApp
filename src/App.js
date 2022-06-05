import React from "react";
import WhishList from "./components/whishList/WhishList";
import AddItem from "./components/AddItem";
import SearchItem from "./components/SearchItem";
import ChangeColor from "./components/changeColor/ChangeColor";
import ReactLoading from "react-loading";
import apiRequest from "./components/apiRequest";

function App() {
	const API_URL = "http://localhost:3500/data";

	const [addItem, setAddItem] = React.useState("");
	const [items, setItems] = React.useState([]);
	const [search, setSearch] = React.useState("");
	const [isLoading, setIsLoading] = React.useState(true);
	const [myError, setMyError] = React.useState(null);

	const addNewItem = async (item) => {
		const id = items.length ? items[items.length - 1].id + 1 : 1;
		const newItem = { id, checked: false, name: item };
		const listItems = [...items, newItem];
		setItems(listItems);

		const postOption = {
			method: 'POST',
			headers: {
				'Content-type': 'application/json'
			},
			body: JSON.stringify(newItem)
		}
		const result = await apiRequest(API_URL, postOption);
		result && setMyError(result);
	};

	const changeBox = async (id) => {
		const listItems = items.map((item) =>
			item.id === id
				? {
						...item,
						checked: !item.checked,
				  }
				: item
		);
		setItems(listItems);

		const myItem = items.filter((item) => item.id === id);
		const PatchOption = {
			method: 'PATCH',
			headers: {
				'Content-type': 'application/json'
			},
			body: JSON.stringify({checked: myItem[0].checked})
		}
		const result = await apiRequest(`${API_URL}/${id}`, PatchOption);
		result && setMyError(result);
	};

	const deleteItem = async (id) => {
		const listItems = items.filter((item) => item.id !== id);
		setItems(listItems);
		
		const DeleteOption = {method: 'DELETE'}
		const result = await apiRequest(`${API_URL}/${id}`, DeleteOption);
		result && setMyError(result);
	};

	const handleAdd = (e) => {
		e.preventDefault();
		if (!addItem) return;
		addNewItem(addItem);
		setAddItem("");
	};

	React.useEffect(() => {
		setTimeout(() => {
			fetchApi();
		}, 1500);
		const fetchApi = async () => {
			try {
				const response = await fetch(API_URL);
				if (!response.ok) throw Error("You are invalid");
				const listItems = await response.json();
				setItems(listItems);
			} catch (error) {
				setMyError(error.message);
			} finally {
				setIsLoading(!isLoading);
			}
		};
	}, []);

	return (
		<div className="container">
			<div className="options">
				<SearchItem search={search} setSearch={setSearch} />
				<AddItem
					addItem={addItem}
					setAddItem={setAddItem}
					handleAdd={handleAdd}
				/>
			</div>
			{isLoading && (
				<>
					<ReactLoading
						className="loading"
						type="spinningBubbles"
						width={50}
						height={50}
						color={"black"}
					/>
					<p>Loading...</p>
				</>
			)}
			{myError && <p style={{ color: "red", fontSize: "36px" }}>{myError}</p>}
			{!isLoading && !myError && (
				<WhishList
					items={items.filter((item) =>
						item.name.toLowerCase().includes(search.toLowerCase())
					)}
					setItems={setItems}
					changeBox={changeBox}
					deleteItem={deleteItem}
				/>
			)}
			<ChangeColor />
		</div>
	);
}

export default App;
