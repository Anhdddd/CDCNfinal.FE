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
	var ReverseArray = [];
	var length = bankHolidays.length;
	for (var i = length - 1; i >= 0; i--) {
		ReverseArray.push(bankHolidays[i]);
	}
	for (var i = 0; i < length; i++) {
		const html = `
				<tr>
				<td>${ReverseArray[i].id}</td>
				<td>${ReverseArray[i].product.productName}</td>
				<td>${formatMoney(ReverseArray[i].product.price, ' đ')}</td>
				<td>${ReverseArray[i].customerName}</td>
				<td>${ReverseArray[i].customerAddress}</td>
				<td>${ReverseArray[i].phoneNumber}</td>
				<td>${ReverseArray[i].status}</td>
				<td><button type="button" onclick="XN(${ReverseArray[i].id})">Xác nhận</button></td>
				<td><button type="button" onclick="HUY(${ReverseArray[i].id})">Huỷ bỏ</button></td>
			</tr>
						`;
		ul.innerHTML += html;
	}
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