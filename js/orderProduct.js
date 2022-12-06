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

function formatMoney(n, currency) {
    return n.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,') + currency;
}
function appendData(data) {
    document.getElementById("productName").innerHTML = data['productName'];
    document.getElementById("imageUrl").src = data['imageUrl'];
    document.getElementById("brandName").innerHTML = data['brandName'];
    document.getElementById("decription").innerHTML = data['decription'];
    document.getElementById("price").innerHTML = formatMoney(data['price'], ' đ');
}

function Order()
{
    urlAPI = 'https://itdut-s7.ddns.net:8082/orders';

    var body = {
        "productId": id,
        "phoneNumber": document.getElementById("phoneNumber").value,
        "customerAddress": document.getElementById("customerAddress").value,
        "customerName": document.getElementById("customerName").value
    }
    var options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
    };
    fetch(urlAPI, options);
    alert("Đặt hàng thành công");
}