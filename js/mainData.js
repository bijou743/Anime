const mainData = () => {
	fetch('https://glo-academy-anime-intensive-default-rtdb.firebaseio.com/anime.json').then(response => {
		return response.json()
	}).then(data => {
		console.log(data)
	})
}

mainData()