function renderItems(collection) {
	// The `ul` where the items will be inserted
	const collectionList = document.getElementById('collection')

	// Loop through each item in the collection array
	collection.forEach(function(item) {
		// Use a conditional to check if the complaint type is red.png
		if (item.complaint_type === 'pruple.png') {
			const itemDetails =
				`
				<img src="${item.complaint_type}" />
				<div class="details">
					<p>${item.street_name}</p>
					<p>${item.created_date}</p>
				</div>
				`
			collectionList.insertAdjacentHTML('beforeend', itemDetails) // Which can we then insert
		}
	})
}

// Fetch gets your JSON file.
fetch('collection.json')
	.then(function(response) {
		return response.json();	
	})
	.then(function(collection){
		// And passes the data to the function, above!
		renderItems(collection) // In reverse order
	})
