const signout = document.getElementById("sign-out");

signout.addEventListener("click", SignOut);

function SignOut() {
    document.cookie = 'user_token' + '=; Max-Age=0';
    window.location.href = "index.html";
}