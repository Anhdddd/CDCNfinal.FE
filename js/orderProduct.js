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
    document.getElementById("productName").value = data['productName'];
    document.getElementById("price").innerHTML = formatMoney(data['price'], ' đ');
}