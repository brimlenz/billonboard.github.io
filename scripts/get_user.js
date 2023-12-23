const delete_account_button = document.getElementById('confirm-delete-account');

let data; 
let uid;
let payload = {
    first_name: `${data?.first_name}`,
    last_name: `${data?.last_name}`,
    email: `${data?.email}`,
    mobile: `${data?.mobile}`,
    gender: `${data?.gender}`,
    // user_name: `${data?.user_name}`,
    // last_name: `${data?.first_name}`,
    // last_name: `${data?.first_name}`,
    // last_name: `${data?.first_name}`,
    // last_name: `${data?.first_name}`,
}

//cookie handler

let cookie = document.cookie;
if(cookie === ''){
    window.location.href = "index.html";
}else{
// Split the cookie string by ';'
    const cookieParts = cookie.split(';');
    // Initialize a variable to store the token value
    let tokenValue;

    // Loop through the cookie parts to find the one containing 'user_token'
    for (const i = 0; i < cookieParts.length; i++) {
        const cookiePart = cookieParts[i].trim();
        if (cookiePart.startsWith('user_token=')) {
            // Extract the value after '='
            tokenValue = cookiePart.split('=')[1];
            break; // Exit the loop once the token is found
        }
    }

    // Print the token value
    //decode jwt token
    const decoded_token = parseJwt(tokenValue);
    uid = decoded_token?.uid;
    //fect user data
    FetchUserData(uid);
}
//fetch user data
function FetchUserData(uid){
    axios.get(`http://localhost:5001/api/get/user/${uid}`)
        .then(function(response) {
        data = response?.data;
        console.log(data)
        DisplayData(data);
    })
    .catch(function(error) {
        console.error('An error occurred:', error);
    });
}

// document.addEventListener('DOMContentLoaded', function () {
//     const first_name_input = document.getElementById('firstName');
//     first_name_input.addEventListener('input', (e) => {
//         console.log("Input event fired"); // Debugging line
//         // editedFirstName = e.target.value; // Update the edited first name when the user makes changes
//         // console.log(editedFirstName); // Log the value to the console
//     });
//     DisplayData(data)
// });

// token decoder
function parseJwt (token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
}

function DisplayData(data){
    const container = document.getElementById('profile-container');
    // Create a parent container for all components
    const parentContainer = document.createElement('div');

    // Part 1: Add section one to the parent container
    const ProfileImageSection = document.createElement('div');
    ProfileImageSection.classList.add('ProfileImageSection');
    ProfileImageSection.innerHTML = `
        <div
            class="row g-3 mb-6 justify-content-center ">
            <!-- Profile picture-->
            <div class="avatar avatar-5xl avatar-bordered me-4">
                <img class="rounded-circle " src="../../assets/img/team/30.webp" alt="" />
            </div>
        </div>
    `;
    parentContainer.appendChild(ProfileImageSection);


    const DetailsSection = document.createElement('div');
    DetailsSection.addEventListener('input', (e) => {
      
        console.log("Input event fired"); // Debugging line
        // editedFirstName = e.target.value; // Update the edited first name when the user makes changes
        let value = e.target.value
        if(e.target.id === 'firstName'){
            payload.first_name = value;
            console.log(e.target.value); // Log the value to the console
        }
        if(e.target.id === 'lastName'){
            payload.last_name = value;
            console.log(e.target.value); // Log the value to the console
        }
        if(e.target.id === 'emailSocial'){
            payload.email = value;
            console.log(e.target.value); // Log the value to the console
        }
        if(e.target.id === 'phone'){
            payload.mobile = value;
            console.log(e.target.value); // Log the value to the console
        }
        if(e.target.id === 'address'){
            payload.address = value;
            console.log(e.target.value); // Log the value to the console
        }
        // }
        console.log(payload)
    });
    DetailsSection.classList.add('DetailsSection');
    DetailsSection.innerHTML = `
    <div class="row g-3 mb-6 justify-content-center ">
        <div class="col-12 col-sm-6">
            <h4 class="mb-4">Personal Information</h4>
            <div class="form-icon-container mb-3">
                <div class="form-floating">
                    <input
                        class="form-control form-icon-input"
                        id="firstName"
                        type="text"
                        placeholder="First Name" 
                        value="${data?.first_name}"
                    />
                    <label 
                        class="text-700 form-icon-label"
                        for="firstName"
                    >
                        FIRST NAME 
                    </label>
                </div>
                <span class="fa-solid fa-user text-900 fs--1 form-icon"></span>
            </div>
            <div class="form-icon-container mb-3">
                <div class="form-floating">
                    <input
                        class="form-control form-icon-input"
                        id="lastName"
                        type="text"
                        placeholder="last Name" 
                        value="${data?.last_name}"
                    />
                    <label class="text-700 form-icon-label" for="lastName">LAST NAME </label>
                </div>
                <span class="fa-solid fa-user text-900 fs--1 form-icon"></span>
            </div>
            <div class="form-icon-container mb-3">
                <div class="form-floating">
                    <input
                        class="form-control form-icon-input"
                        id="emailSocial"
                        type="email"
                        placeholder="Email" 
                        value="${data?.email}"
                    />
                    <label class="text-700 form-icon-label" for="emailSocial" >ENTER YOUR EMAIL</label>
                </div>
                <span class="fa-solid fa-envelope text-900 fs--1 form-icon"></span>
            </div>
            <div class="form-icon-container mb-3">
                <div class="form-floating">
                    <input 
                        class="form-control form-icon-input"
                        id="phone" 
                        type="tel"
                        placeholder="Phone" 
                        value="${data?.mobile}"
                    />
                    <label class="text-700 form-icon-label" for="phone">ENTER YOUR PHONE</label>
                </div>
                <span class="fa-solid fa-phone text-900 fs--1 form-icon"></span>
            </div>
            <div class="form-icon-container mb-3">
                    <div class="form-floating">
                        <input
                            class="form-control form-icon-input"
                            id="address" 
                            type="text"
                            placeholder="1234 Main St" 
                            value="${data?.company_address}"
                        />
                        <label class="text-700 form-icon-label" for="phone">ENTER YOUR ADDRESS</label>
                    </div>
                    <span class="fa-solid fa-map text-900 fs--1 form-icon"></span>
            </div>
            <div class="form-icon-container mb-3">
                <div class="form-floating ">
                    <textarea class="form-control" id="floatingTextarea2" placeholder="Tell us about your role " style="height: 100px" value="${data?.position}"></textarea>
                    <label class="text-700 form-icon-label" for="phone">ENTER YOUR ROLE</label>
                </div>
                <span class="fa-solid fa-user text-900 fs--1 form-icon"></span>
            </div>
            <div class="mb-3">
                <label class="form-label" for="basic-form-gender">Gender</label>
                <select class="form-select" id="basic-form-gender" aria-label="Default select example" value="${data?.gender}">
                    <option selected="selected">Select your gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
            </div>
            <div class="mb-3">
                <label class="form-label">Upload Profile Picture</label>
                <input class="form-control" type="file" />
            </div>
            <div class="text-end mb-6">
                <div>
                    <button class="btn btn-phoenix-secondary me-2">Cancel Changes</button>
                    <button class="btn btn-phoenix-primary">Save Information</button>
                </div> 
            </div>
        </div>
    </div>
    `;
    parentContainer.appendChild(DetailsSection);

    const SettingSection = document.createElement('div');
    SettingSection.classList.add('SettingSection');
    SettingSection.innerHTML = `
    <div class="row g-3 mb-6 justify-content-center">
        <div class="col-12 col-sm-6">
            <h4 class="mb-4">Change Password</h4>
            <div class="form-icon-container mb-3">
                <div class="form-floating">
                <input 
                    class="form-control form-icon-input" 
                    id="oldPassword" 
                    type="password"
                    placeholder="Old password" 
                    value="${data?.password}"
                />
                <label class="text-700 form-icon-label" for="oldPassword">Old Password</label>
            </div>
            <span class="fa-solid fa-lock text-900 fs--1 form-icon"></span>
        </div>
        <div class="form-icon-container mb-3">
            <div class="form-floating">
                <input 
                    class="form-control form-icon-input"
                    id="newPassword"
                    type="password"
                    placeholder="New password"
                />
                <label class="text-700 form-icon-label" for="newPassword">New Password</label>
            </div>
            <span class="fa-solid fa-key text-900 fs--1 form-icon"></span>
        </div>
        <div class="form-icon-container">
            <div class="form-floating">
                <input
                    class="form-control form-icon-input"
                    id="newPassword2"
                    type="password"
                    placeholder="Confirm New password" 
                />
                <label class="text-700 form-icon-label" for="newPassword2">Confirm New Password</label>
            </div>
            <span class="fa-solid fa-key text-900 fs--1 form-icon"></span>
        </div>
        <div class="text-end mb-6">
            <div>
                <button class="btn btn-phoenix-secondary me-2">Cancel Changes</button>
                <button class="btn btn-phoenix-primary">Save Information</button>
            </div>
        </div>
    </div>
    `;
    parentContainer.appendChild(SettingSection);

    container.appendChild(parentContainer);
}
//account deleter handler
delete_account_button.addEventListener('click', () => {
    DeleteAccount(data)
});

const DeleteAccount = async(data)=>{
    alert(data?._id)
    axios.delete(`http://localhost:5001/api/delete/user/${data?._id}`).then(function(response) {
        alert('account deleted')
        console.log('account deleted');
        SignOut();
    }).catch(function(error) {
      console.error('An error occurred:', error);
    });
}

function SignOut() {
    document.cookie = 'user_token' + '=; Max-Age=0';
    window.location.href = "index.html";
}

// //account edit handler
// // const payload = {
// //     first_name : data?.first_name,
// // }


// // Initialize the variable to store the edited first name
// let editedFirstName = data?.first_name; // Set the initial value based on fetched data

// console.log("Event listener registered");
// first_name_input.addEventListener('input', (e) => {
//     console.log("Input event fired"); // Debugging line
//     editedFirstName = e.target.value; // Update the edited first name when the user makes changes
//     console.log(editedFirstName); // Log the value to the console
// });