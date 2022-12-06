const endpoint = 'https://itdut-s7.ddns.net:8082/orders';
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
		<td>${items.product.productName}</td>
		<td>${formatMoney(items.product.price, ' đ')}</td>
		<td>${items.customerName}</td>
		<td>${items.customerAddress}</td>
		<td>${items.phoneNumber}</td>
		<td>${items.status}</td>
		<td><button type="button" onclick="XN(${items.id})">Xác nhận</button></td>
		<td><button type="button" onclick="HUY(${items.id})">Huỷ bỏ</button></td>
	</tr>
                
						`;
	}).join('');
	ul.innerHTML += html;
}

function XN(id) {
	var urlAPI = 'https://itdut-s7.ddns.net:8082/orders/confirm/' + id;
	// console.log(urlAPI);
	var options = {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json',
		}
	};

	fetch(urlAPI, options).then(() => {
		location.reload();
	})
}

function HUY(id) {
	var urlAPI = 'https://itdut-s7.ddns.net:8082/orders/cancel/' + id;

	var options = {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json',
		}
	};

	fetch(urlAPI, options).then(() => {
		location.reload();
	})
}