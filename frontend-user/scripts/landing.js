// ----- Get Categories ----- //

let category_row = ""

axios({
    method: 'get',
    url: 'http://127.0.0.1:8000/api/landing_cats'
})
.then(function (response) {
    let categories = response.data.categories;

    for (let i = 0; i < categories.length; i++) {
        const id = categories[i].id;
        const name = categories[i].name;

        //Apend each new category to the navbar
        category_row += `
        <div class="category" onClick="getItems(${id})">
        <p>${name}</p>
        </div> `
        }
        document.getElementById("categories").innerHTML += category_row;

})

// ----- Get Items based on Categories ----- //

function getItems(cat_id) {
    // Empty the content page whenever a category is clicked to avoid repitition
    document.getElementById("items").innerHTML = ""
    let item_row = ""
axios({
    method: 'get',
    url: 'http://127.0.0.1:8000/api/landing_items/' + cat_id
})
    .then(function (response) {
        let items = response.data.items_in_Category;
        // console.log(items);

        for (let i = 0; i < items.length; i++) {
            const id = items[i].id;
            const name = items[i].name;
            const price = items[i].price;

            //Apend each new item to the items table
        
            item_row += `
            <div class="item">
                <div class="item_name">
                    <p>${name}</p>
                </div>
                <div class="item_price">
                    <p>${price}</p>
                </div>
                <div class="like">
                    <i class="fa-regular fa-heart"></i>
                </div>
            </div>
            `              
            }
            document.getElementById("items").innerHTML += item_row;
})
}