// Pop-up windows
// Get the modal
var add_item_popup = document.getElementById("add-item-popup");
var add_category_popup = document.getElementById("add-category-popup");
var edit_item_popup = document.getElementById("edit-item-popup");
var edit_category_popup = document.getElementById("edit-category-popup");

// Get the button that opens the pop-up
var add_item_btn = document.getElementById("add-item-btn");
var add_category_btn = document.getElementById("add-category-btn");
var edit_item_btn = document.getElementById("edit-item-btn");
var edit_category_btn = document.getElementById("edit-category-btn");

// When the user clicks on the button, open the form
add_item_btn.onclick = function () {
    add_item_popup.style.display = "block";
}
add_category_btn.onclick = function () {
    add_category_popup.style.display = "block";
}
edit_item_btn.onclick = function () {
    edit_item_popup.style.display = "block";
}
// edit_category_btn.onclick = function () {
//     edit_category_popup.style.display = "block";
// }

// When the user clicks anywhere outside of the pop_up, close it
window.onclick = function (event) {
  if (event.target == add_item_popup) {
    add_item_popup.style.display = "none";
  }
  if (event.target == add_category_popup) {
    add_category_popup.style.display = "none";
  }
  if (event.target == edit_item_popup) {
    edit_item_popup.style.display = "none";
  }
//   if (event.target == edit_category_popup) {
//     edit_category_popup.style.display = "none";
//   }
}


// Get All Categories

let cat_row = ""
axios({
    method: 'get',
    url: 'http://127.0.0.1:8000/api/display_cats'
})
.then(function (response) {
    let categories = response.data.categories;
    console.log(categories);

    for (let i = 0; i < categories.length; i++) {
        console.log(categories[i]);
        const id = categories[i].id;
        const name = categories[i].name;
    
        //Apend each new item to the items table
    
        cat_row += `
            <tr>
            <td>${id}</td>
            <td>${name}</td>
            <td>Edit</td>
            <td>Delete</td>  
            </tr>`
        }
        document.getElementById("categories").innerHTML += cat_row;
})

// // Get all Items

// let item_row = ""
// axios({
//     method: 'get',
//     url: 'http://127.0.0.1:8000/api/display_items'
// })
//     .then(function (response) {
//         let items = response.data;
//         console.log(items);

//         for (let i = 0; i < items.length; i++) {
//             const id = items[i].id;
//             const name = items[i].name;
//             const price = items[i].price;
//             const category = items[i].cat_name;
        
//             //Apend each new item to the items table
        
//             item_row += `
//                 <tr>
//                 <td>${id}</td>
//                 <td>${name}</td>
//                 <td>${price}</td>
//                 <td>${category}</td>
//                 <td>Edit</td>
//                 <td>Delete</td>  
//                 </tr>`
//             }
//             document.getElementById("items").innerHTML += item_row;
// })


    //     // Adding every item in the database as the below div 
    //         for (let i = 0; i < restaurants.length; i++) {
    //             table += `
    //             <tr>
    //             <td>${restaurants[i].resto_id}</td>
    //             <td>${restaurants[i].resto_name}</td>
    //             <td>${restaurants[i].phone_number}</td>
    //             <td>${restaurants[i].cat_id}</td>
    //             <td>${restaurants[i].city_id}</td>
    //             <td>${restaurants[i].description}</td>   
    //             <td class="edit" onclick="editResto(${restaurants[i].resto_id})" id="edit" ><i class="fa-solid fa-pen-to-square"></i></td>
    //             <td onclick="deleteResto(${restaurants[i].resto_id})" class="delete" id="delete"><i class="fa-solid fa-xmark"></i></td>
    //             </tr>`;
    //         }
    //         document.getElementById("tbody").innerHTML = table;
    //         edit.addEventListener("click", function () {
    //             resto_name.value = "restaurants[idd].resto_name";
    //             phone_number.value = "restaurants[idd].phone_number";
    //             city_id.value = "restaurants[idd].city_id";
    //             cat_id.value = "restaurants[idd].cat_id";
    //             desc.value = "restaurants[idd].description";
    //         })
    //     }
    // )


// let add_resto = document.getElementById("create");
// let edit = document.getElementById("edit");
// let delete_resto = document.getElementById("delete");
// let all_restaurants;
// // params: resto_name,phone_number,city_id,desc,cat

// let resto_name = document.getElementById("resto_name").value
// let phone_number = document.getElementById("phone_number").value
// let city_id = document.getElementById("city").value
// let cat_id = document.getElementById("cate").value
// let desc = document.getElementById("description").value

// add_resto.addEventListener("click", function (event) {
//     event.preventDefault()



//     //Axios Function - Post

//     let data = new FormData();
//     data.append('resto_name', resto_name);
//     data.append('phone_number', phone_number);
//     data.append('description', desc);
//     data.append('cat_id', cat_id);
//     data.append('city_id', city_id);
//     axios({
//         method: 'post',
//         url: 'http://localhost/FoodWay-Backend/add_resto.php',
//         data: data,
//     })
//         .then(function (response) {
//             let result = response.data;
//             console.log(result);
//         }
//         )

// })


// // This api call is for to get all items in the database and add them into the table of the admin
// axios({
//     method: 'get',
//     url: 'http://127.0.0.1:8000/api/display_items',
// })
//     .then(function (response) {
//         let items = response.data;
//         console.log(items);
//         // Adding every resto in the database as the below div 
//             for (let i = 0; i < restaurants.length; i++) {
//                 table += `
//                 <tr>
//                 <td>${restaurants[i].resto_id}</td>
//                 <td>${restaurants[i].resto_name}</td>
//                 <td>${restaurants[i].phone_number}</td>
//                 <td>${restaurants[i].cat_id}</td>
//                 <td>${restaurants[i].city_id}</td>
//                 <td>${restaurants[i].description}</td>   
//                 <td class="edit" onclick="editResto(${restaurants[i].resto_id})" id="edit" ><i class="fa-solid fa-pen-to-square"></i></td>
//                 <td onclick="deleteResto(${restaurants[i].resto_id})" class="delete" id="delete"><i class="fa-solid fa-xmark"></i></td>
//                 </tr>`;
//             }
//             document.getElementById("tbody").innerHTML = table;
//             edit.addEventListener("click", function () {
//                 resto_name.value = "restaurants[idd].resto_name";
//                 phone_number.value = "restaurants[idd].phone_number";
//                 city_id.value = "restaurants[idd].city_id";
//                 cat_id.value = "restaurants[idd].cat_id";
//                 desc.value = "restaurants[idd].description";
//             })
//         }
//     )

// // On click on the delete button of the resto, the resto will be deleted from the database using the delete resto api
// delete_resto.addEventListener("click", deleteResto());

// function deleteResto(resto_id) {
//     let data = new FormData();
//     data.append('id', resto_id);
//     axios({
//         method: 'post',
//         url: 'http://localhost/FoodWay-Backend/delete_resto.php',
//         data: data,
//     })
//         .then(function (response) {
//             let result = response.data;
//             console.log(result);
//         }
//         )
// }
