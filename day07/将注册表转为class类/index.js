// alert("这是一个表单注册");
class zhuce {
    constructor () {
        this.form = document.getElementById("form");
        this.name = document.getElementById("username");
        this.email = document.getElementById("email");
        this.password = document.getElementById("password");
        this.password2 = document.getElementById("password2");
    }
    //定义事件里的函数
    showError(input, message) {
        const formControl = input.parentElement;
        formControl.className = "form-control error";
        const small = formControl.querySelector('small');
        small.innerText = message;
    }
    //定义事件里的函数
    showSuccess(input) {
        const formControl = input.parentElement;
        formControl.className = "form-control success";
    }
    //封装校验函数
    checkItem(inputArr) {
        inputArr.forEach(input => {
            if(input.value.trim() === "") {
                this.showError(input, `${input.placeholder}是必填项`);
            } else{
                this.showSuccess(input);
            }
        })
    }
    //长度校验函数
    checkLength(input, min, max) {
            if(input.value.length < min ){
                this.showError(input, `至少需要${min}个字符`);
            }else if(input.value.length > max ){
                this.showError(input, `至多需要${max}个字符`);
            } else {
                this.showSuccess(input);
        }
    }
    //邮箱校验函数
    checkEmail(email){
        const re = /^([a-zA-Z0-9_\.]+)\@([a-zA-Z0-9_\-\.]+)\.[a-zA-Z]{2,6}$/;
        if(re.test(email.value.trim())){
            this.showSuccess(email);
        } else {
            this.showError(email, "邮箱内容错误");
        }
    }   
    //校验两次密码是否输入一致
    checkPasswordSame (password, password2) {
        if ( password.value !== password2.value) {
            this.showError(password2, '密码不匹配');
        }
    }
}
// 声明一个注册类实例
var zhuce1 = new zhuce();
//添加一个监听事件
zhuce1.form.addEventListener("submit", function(e){
    e.preventDefault();
    zhuce1.checkItem([username, email, password, password2]);
    zhuce1.checkLength(username, 3, 15);
    zhuce1.checkLength(password, 6,12);
    zhuce1.checkEmail(email);
    zhuce1.checkPasswordSame(password, password2);
})

window.onbeforeunload = function() { 
    　　return "确定离开页面吗？"; 
}
