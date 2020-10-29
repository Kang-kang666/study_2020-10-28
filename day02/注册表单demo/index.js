//get element
const form = document.getElementById("form");
const name = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password1 = document.getElementById("password1");


//定义事件里的函数
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = "form-control error";
    const small = formControl.querySelector('small');
    small.innerText = message;
}

function showSuccess(input, message) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}

//校验邮箱
function isValidEmail(email){
    const re = /^([a-zA-Z0-9_\.]+)\@([a-zA-Z0-9_\-\.]+)\.[a-zA-Z]{2,6}$/;
    return re.test(String(email));
}


//事件监听

form.addEventListener("submit", function(e){
    e.preventDefault();

    if( username.value ===""){
        showError(username, "用户名为必须填写");
    }else{
        showSuccess(username);
    }

    if( email.value ===""){
        showError(email, "用户名为必须填写");
    }else if(!isValidEmail(email.value)) {
        showError(email, "邮箱格式错误")
    }
    else{
        showSuccess(email);
    }

    if( password.value ===""){
        showError(password, "用户名为必须填写");
    }else{
        showSuccess(password);
    }

    if( password2.value ===""){
        showError(password2, "用户名为必须填写");
    }else{
        showSuccess(password2);
    }
})
