function DisplayNavs(){
    const container = document.getElementById('navbarSupportedContent');
    // Create a parent container for all components
    const parentContainer = document.createElement('div');

    const AuthNavs = document.createElement('div');
    AuthNavs.classList.add('AuthNavs');
    AuthNavs.innerHTML = `
        <div class="d-grid d-lg-flex align-items-center">
            <a  
                class="btn btn-link text-900 order-1 order-lg-0 ps-3 me-2"
                href="login.html"
            >
                LOGIN
            </a>
            <a
                class="btn btn-phoenix-primary order-0" 
                href="sign-up.html"
            >
                <span class="fw-bold">Register</span>
            </a>
        </div>
    `;
    parentContainer.appendChild(AuthNavs);
    container.appendChild(parentContainer);
}
function DisplayAccount(){
    const container = document.getElementById('navbarSupportedContent');
    // Create a parent container for all components
    const parentContainer = document.createElement('div');

    const AuthNavs = document.createElement('div');
    AuthNavs.classList.add('AuthNavs');
    AuthNavs.innerHTML = `
        <div class="d-grid d-lg-flex align-items-center bg-primary border-radius-rounded">
            <a class="btn btn-primary" href="profile.html">
                <span class="me-2 text-900"
                    data-feather="user">
                </span>
                <span>Profile</span>
            </a>
        </div>
    `;
    parentContainer.appendChild(AuthNavs);
    container.appendChild(parentContainer);
}
try {
function getCookie() {
    const cookie = document.cookie;
    if(cookie === ''){
        DisplayNavs()
    }else{
        DisplayAccount()
    }
}

getCookie();
} catch (error) {
console.log(error)
}