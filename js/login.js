var baseURL = 'http://duongtruongvu21.ddns.net:8888/api';

function isValidate()
{
    var username = document.getElementById("usernameIF").value;
    var password = document.getElementById("passwordIF").value;
    if (username == null || username == "")
    {
        document.getElementById('message').innerHTML = 'Vui lòng nhập tên tài khoản!'; 
        return false;
    }
    else if (password == null || password == "")
    {
        document.getElementById('message').innerHTML = 'Vui lòng nhập mật khẩu!';
        return false;
    }
    document.getElementById('message').innerHTML = '';
    return true;
}

function Login() {
    if (!isValidate())
    {
        return;
    }
    var urlAPI = baseURL + "/Auth/Login"
    var body = {
        "username": document.getElementById("usernameIF").value,
        "password": document.getElementById("passwordIF").value,
    }

    // cấu hình cho API
    var options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
    };

    // gọi API
    fetch(urlAPI, options)
        .then((response) => response.json())
        .then((json) => {
            console.log(json) // api xử lí xong phản hồi thì hiển thị ra
            if (json['IsSuccess']) {
                alert("Đăng nhập thành công!!");
                window.location = "ListProduct.html";
            } else {
                alert("Đăng nhập thất bại!!\nDo " + json['Data'][0]);
            }
        });
}

function Register() {
    if (!isValidate())
    {
        return;
    }
    var urlAPI = baseURL + "/Auth/Register"
    var body = {
        "username": document.getElementById("usernameIF").value,
        "password": document.getElementById("passwordIF").value,
    }

    // cấu hình cho API
    var options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
    };

    // gọi API
    fetch(urlAPI, options)
        .then((response) => response.json())
        .then((json) => {
            console.log(json) // api xử lí xong phản hồi thì hiển thị ra
            if (json['IsSuccess']) {
                alert("Đăng ký thành công!!");
            } else {
                alert("Đăng ký thất bại!!\nDo " + json['Data'][0]);
            }
        });
}