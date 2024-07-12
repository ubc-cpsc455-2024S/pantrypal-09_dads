
// Hard-coded queries which can be modified for frontend and can be used as examples

var createUser = (username, email, password) => {

	const myHeaders = new Headers();
	myHeaders.append("Content-Type", "application/json");

	const raw = JSON.stringify({
		"username": "abc",
		"email": "s@gmail.com",
		"passwordHash": "123"
	});

	const requestOptions = {
		method: "POST",
		headers: myHeaders,
		body: raw,
		redirect: "follow"
	};

	fetch("http://localhost:3000/auth/creator", requestOptions)
		.then((response) => response.text())
		.then((result) => console.log(result))
		.catch((error) => console.error(error));

}

var getUser = () =>  {
	const raw = "";

	const requestOptions = {
		method: "GET",
		body: raw,
		redirect: "follow"
	};
	
	fetch("http://localhost:3000/auth/handler?username=abc&passwordHash=123", requestOptions)
		.then((response) => response.text())
		.then((result) => console.log(result))
		.catch((error) => console.error(error));

}

var updateUserIngredient = () =>  {
	const myHeaders = new Headers();
	myHeaders.append("Content-Type", "application/json");
	
	const raw = JSON.stringify({
		"username": "abc",
		"ingredients": {
			"potato": 2,
			"tomato": 1
		}
	});
	
	const requestOptions = {
		method: "POST",
		headers: myHeaders,
		body: raw,
		redirect: "follow"
	};
	
	fetch("http://localhost:3000/ingredients/update", requestOptions)
		.then((response) => response.text())
		.then((result) => console.log(result))
		.catch((error) => console.error(error));
}


var generateRecipe = () =>  {
	const myHeaders = new Headers();
	myHeaders.append("Content-Type", "application/json");
	
	const raw = JSON.stringify({
		"username": "abc"
	});
	
	const requestOptions = {
		method: "POST",
		headers: myHeaders,
		body: raw,
		redirect: "follow"
	};
	
	fetch("http://localhost:3000/recipes/generate", requestOptions)
		.then((response) => response.text())
		.then((result) => console.log(result))
		.catch((error) => console.error(error));
}

var likeRecipe = () =>  {
	const myHeaders = new Headers();
	myHeaders.append("Content-Type", "application/json");
	
	const raw = JSON.stringify({
		"username": "abc"
	});
	
	const requestOptions = {
		method: "POST",
		headers: myHeaders,
		body: raw,
		redirect: "follow"
	};
	
	fetch("http://localhost:3000/recipes/like/669117e52569f4740ef33523", requestOptions)
		.then((response) => response.text())
		.then((result) => console.log(result))
		.catch((error) => console.error(error));
}
