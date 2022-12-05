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
						<div class="col-2th">
						<a href="UpdateProduct.html?idUpdate=${items.id}">
							<div class="card">
								<div class="image">
									<img src="${items.imageUrl}">
								</div>
								<div class="name">
									<p>${items.productName}</p>
								</div>
								<div class="price">
									<p>${formatMoney(items.price, ' đ')}</p>
								</div>
							</div>
						</a>
						</div>
                
						`;
	}).join('');
	ul.innerHTML = html;
}