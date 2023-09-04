const form = document.getElementById("sign-in-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
	event.preventDefault();
    const data = new FormData(event.target);
    const dataObject = Object.fromEntries(data.entries());
    const payload = {
        user_input_value_tag:              dataObject.email,
        password:           dataObject.password,
    }
    console.log(payload)
    axios.post("http://localhost:5001/api/signin/client",payload).then((res)=>{
        document.cookie = `user_token=${res.data}`;
        window.location.href = "home.html";
    }).catch((error)=>{
        console.log(error)
        return error;
    })
}