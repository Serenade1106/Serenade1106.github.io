// Function to render your items
function renderItems(collection) {
    // The `ul` where the items will be inserted
    const collectionList = document.getElementById('collection')

    // Loop through each item in the collection array
    collection.forEach(function(item) {

        // This can get annoying, so we can use “template literals” instead
        const itemDetails =
            `
                <a href="${item.linkTo}">
                    link
                </a>
                
                <img src="${item.imageUrl}" />

                <p>${item.author}</p>

                <p><em>${item.singleword}</em></p>

                <a href="${item.imageOriginalUrl}">
                
                    <p>${item.year} / 10 →</p>
                </a>
            `
            collectionList.insertAdjacentHTML('beforeend', itemDetails) // Which can we then insert

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

    
