//get element
const form = document.getElementById("form");
const name = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");


//定义事件里的函数
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = "form-control error";
    const small = formControl.querySelector('small');
    small.innerText = message;
}

function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}

//封装校验函数
function checkItem(inputArr) {
    inputArr.forEach(input => {
        if(input.value.trim() === "") {
            showError(input, `${input.placeholder}是必填项`);
        } else{
            showSuccess(input);
        }
    });
} 

//长度校验函数
function checkLength(input, min, max){
    if(input.value.length < min ){
        showError(input, `至少需要${min}个字符`);
    }else if(input.value.length > max ){
        showError(input, `至多需要${max}个字符`);
    } else {
        showSuccess(input);
    }
}

//邮箱校验函数
function checkEmail(email){
    const re = /^([a-zA-Z0-9_\.]+)\@([a-zA-Z0-9_\-\.]+)\.[a-zA-Z]{2,6}$/;
    if(re.test(email.value.trim())){
        showSuccess(email);
    } else {
        showError(email, "邮箱内容错误");
    }
}

//校验两次密码是否输入一致
function checkPasswordSame (password, password2) {
    if ( password.value !== password2.value) {
        showError(password2, '密码不匹配');
    }
}

//事件监听


form.addEventListener("submit", function(e){
    e.preventDefault();
    checkItem([username, email, password, password2]);
    checkLength(username, 3, 15);
    checkLength(password, 6,12);
    checkEmail(email);
    checkPasswordSame(password, password2);

    // if( username.value ===""){
    //     showError(username, "用户名为必须填写");
    // }else{
    //     showSuccess(username);
    // }

    // if( email.value ===""){
    //     showError(email, "用户名为必须填写");
    // }else if(!isValidEmail(email.value)) {
    //     showError(email, "邮箱格式错误")
    // }
    // else{
    //     showSuccess(email);
    // }

    // if( password.value ===""){
    //     showError(password, "密码必须输入");
    // }else{
    //     showSuccess(password);
    // }

    // if( password2.value ===""){
    //     showError(password2, "确认密码必须输入");
    // }else{
    //     showSuccess(password2);
    // }
})
