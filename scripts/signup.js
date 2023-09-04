const form = document.getElementById("sign-up-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
	event.preventDefault();
    const data = new FormData(event.target);
    const dataObject = Object.fromEntries(data.entries());
	console.log(dataObject);
    const payload = {
        first_name:         dataObject.firstname,	
        last_name:          dataObject.lastName,
        password:           dataObject.password,
        account_type:       'client',
        mobile:             dataObject.phone,
        email:              dataObject.email,
    }
    console.log(payload)
    axios.post("http://localhost:5001/api/signup/client",payload).then((res)=>{
        document.cookie = `user_token=${res.data}`;
        window.location.href = "home.html";
    }).catch((error)=>{
        console.log(error)
    })
}