/*var urlAPI = 'https://itdut-s7.ddns.net:8082/api/Product/20';

var body = {
    "id": 20,
    "productName": "SamSung Galaxy S77",
    "brandName": "SamSung",
    "decription": "Dynamic AMLED 2X, 6.1Inch, FHD",
    "imageUrl": "https://cdn.tgdd.vn/Product/Images/42/231110/Galaxy-S22-Black-600*600.jpg",
    "price": 17999876
}

var options = {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(body)
};
fetch(urlAPI, options);*/

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

function ChinhSua() {
    var body = {
        "id": id,
        "productName": document.getElementById("productName").value,
        "brandName": document.getElementById("brand").value,
        "decription": document.getElementById('decription').value,
        "imageUrl": document.getElementById('imageUrl').value,
        "price": document.getElementById('price').value
    }

    var options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
    };
    fetch(urlAPI, options);
    alert("da chinh: " + id);
    window.location = "ListUpdateProduct.html";
}