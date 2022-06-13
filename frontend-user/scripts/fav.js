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

        let item_id = favs[i].item_id
        let name = favs[i].item_name
        let price = favs[i].item_price
        // console.log(name + " " + price)

        fav_row += `
        <div class="item">
            <div class="item_name">
                <p>${name}</p>
            </div>
            <div class="item_price">
                <p>Price: ${price}</p>
            </div>
            <div class="remove">
                <button onClick="removeFav(${item_id})" >Remove</button>
            </div>
        </div>
        `
    }
    document.getElementById("fav-list").innerHTML += fav_row

})

// ----- Remove Favorite ----- //

function removeFav(item_id) {

let data = new FormData();

    data.append('user_id', user_id);
    data.append('item_id', item_id);

    axios({
        method: 'post',
        url: 'http://127.0.0.1:8000/api/remove_fav/' + user_id + "/" + item_id,
        data: data,
    })
        .then(function (response) {
            // let result = response.data;
            // console.log(result);
            location.reload();
        }
        )

}
