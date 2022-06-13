// Navigate to Landing Page

document.getElementById('back-nav').onclick = function () {
    document.location = "landing.html"
}

let user_id = localStorage.getItem("id")

// ----- Get All user favs ----- //

axios({
    method: 'get',
    url: 'http://127.0.0.1:8000/api/get_favs/' + user_id
})
.then(function (response) {
    console.log(response)
})