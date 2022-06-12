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
        <div class="category">
        <p>${name}</p>
        </div> `
        }
        document.getElementById("categories").innerHTML += category_row;

})