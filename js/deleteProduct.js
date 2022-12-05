var url = 'https://itdut-s7.ddns.net:8082/api/Product';

var options = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
    },
};
var id = (location.href).split("=")[1];
var urlAPI = url + "/" + id;
fetch(urlAPI, options)
    .then((response) => response.json())
    .then((data) => {
        appendData(data);
    });

function appendData(data) {
    document.getElementById("productName").value = data['productName'];
    document.getElementById("brand").value = data['brandName'];
    document.getElementById('decription').value = data['decription'];
    document.getElementById('imageUrl').value = data['imageUrl'];
    document.getElementById('price').value = data['price'];
}

function Xoa() {
    var options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
        //body: JSON.stringify(body)
    };
    fetch(urlAPI, options);
    alert("Đã xoá");
    window.location = "ListDeleteProduct.html";
}
/*var url = 'https://itdut-s7.ddns.net:8082/api/Product';

var id = (location.href).split("=")[1];
var urlAPI = url + "/" + id;

var options = {
    method: 'DELETE',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(body)
};
fetch(urlAPI, options);
window.location = "../view/ViewAdmin/DeleteProduct.html";*/