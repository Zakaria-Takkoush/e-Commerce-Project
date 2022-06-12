// ----- Login ----- //


let sign_in = document.getElementById("log-in");

sign_in.addEventListener("click", function(event) {
    event.preventDefault()

    // Extract credentials
    let email = document.getElementById("email").value
    let password = document.getElementById("pass").value

    let data = new FormData();
    data.append('email', email);
    data.append('password', password);

    axios({
    method: 'post',
    url: 'http://127.0.0.1:8000/api/login',
    data: data,

    })
    .then(function (response) {
        console.log(response.status)
        let token = response.data.access_token;
        if (response.status === 200) {   // if the user exists:
            user_token = localStorage.setItem("token", token)     // save token in local storage
            document.location = "page.html"; // direct the user to the control panel
        }
    }
  )
})