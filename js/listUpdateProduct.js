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
		<td><a href="UpdateProduct.html?idUpdate=${items.id}">xxx</a></td>
	</tr>
                
						`;
	}).join('');
	ul.innerHTML += html;
}
