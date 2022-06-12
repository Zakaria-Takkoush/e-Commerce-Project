// ----- Register ----- //

// Post the request to the server

let register = document.getElementById("register")

register.addEventListener("click", function(event) {
    event.preventDefault()

    // Extract credentials
    let first_name = document.getElementById("f-name").value
    let last_name = document.getElementById("l-name").value
    let create_email = document.getElementById("create-email").value
    let create_password = document.getElementById("create-pass").value
    let create_password_confirm = document.getElementById("create-conf-pass").value

    if (create_password !== create_password_confirm) {
        alert("Passwords do not match!")
        return
    }

    //Axios Function - Post
    let data = new FormData();
    data.append('first_name', first_name);
    data.append('last_name', last_name);
    data.append('email', create_email);
    data.append('password', create_password);
    data.append('password_confirmation', create_password_confirm);
    axios({
        method: 'post',
        url: 'http://127.0.0.1:8000/api/register',
        data: data,
    })
    .then(function (response) {
        let result = response.data;
        let message = result.message;  
        // if (message === "User successfully signed up!") {
            document.getElementsByClassName("register")[0].innerHTML += `<h2>${message}</h2>`
        // }
        first_name = "";
        last_name = "";
        create_email = "";
        create_password = "";
        create_password_confirm = "";
        }
    )
})

