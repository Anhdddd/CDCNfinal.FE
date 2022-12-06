const endpoint = 'https://itdut-s7.ddns.net:8082/api/Product';
const ul = document.getElementById('containerProduct')

let bankHolidays;
let england;

fetch(endpoint)
	.then(blob => blob.json())
	.then(data => handleDates(data));

function formatMoney(n, currency) {
	return n.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,') + currency;
}

function handleDates(data) {
	bankHolidays = data;
	const html = bankHolidays.map((items) => {
		return `
		<tr>
		<td>${items.id}</td>
		<td>${items.productName}</td>
		<td><img style="width:70px;" src="${items.imageUrl}"</td>
		<td>${formatMoney(items.price, ' đ')}</td>
		<td><button type="button" onclick="XN(${items.id})">Xoá</button></td>
	</tr>
                
						`;
	}).join('');
	ul.innerHTML += html;
}

function XN(id) {
	var urlAPI = 'https://itdut-s7.ddns.net:8082/api/Product' + '/' + id;
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
