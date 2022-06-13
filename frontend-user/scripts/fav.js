// Navigate to Landing Page

document.getElementById('back-nav').onclick = function () {
    document.location = "landing.html"
}


// Get the stored user id given by the token

let user_id = localStorage.getItem("id")


// ----- Get All user favs ----- //

let fav_row = ""

axios({
    method: 'get',
    url: 'http://127.0.0.1:8000/api/get_favs/' + user_id
    // ^^^ Get All Favorites belonging to this user by passing their id
})
.then(function (response) {
    let favs = response.data.favorites

    // Loop through elements and display them

    for (let i = 0; i < favs.length; i++) {

        let name = favs[i].item_name
        let price = favs[i].item_price
        // console.log(name + " " + price)

        fav_row += `
        <div class="item">
            <div class="item_name">
                <p>${name}</p>
            </div>
            <div class="item_price">
                <p>${price}</p>
            </div>
            <div class="remove">
                <button>Remove</button>
            </div>
        </div>
        `
    }
    document.getElementById("fav-list").innerHTML += fav_row

})

