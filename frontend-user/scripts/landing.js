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
                    <p>Price: ${price}</p>
                </div>
                <div class="like">
                    <i onClick="addFav(${id})" class="fa-regular fa-heart"></i>
                </div>
            </div>
            `              
            }
            document.getElementById("items").innerHTML += item_row;
})
}

// Get the user profile

const token = localStorage.getItem("token")

axios.post("http://127.0.0.1:8000/api/profile", {}, {
  headers: {
    'Authorization': `Bearer ` + token
  }
}).then(function (response) {
    console.log(response.data)
    let user_id = response.data.id
    let f_name = response.data.first_name
    let l_name = response.data.last_name
    stored_id = localStorage.setItem("id" , user_id)
    document.getElementById("welcome-user").innerText = `Welcome, ${f_name} ${l_name}`
})

// ----- Add an Item to favorites ----- //

function addFav(item_id) {

    stored_id = localStorage.getItem("id")
    
    //Axios Function - Post

    let data = new FormData();
    data.append('user_id', stored_id);
    data.append('item_id', item_id);
    axios({
        method: 'post',
        url: 'http://127.0.0.1:8000/api/add_fav',
        data: data,
    })
    .then(function (response) {
        console.log(response.data);
        alert("Item Added to Favorites")
    }
    )
}


// Navigate to Favorites Page

document.getElementById('favs-nav').onclick = function () {
    document.location = "favorites.html"
}