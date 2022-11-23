const endpoint = 'http://duongtruongvu21.ddns.net:8888/api/Product';
const ul = document.getElementById('containerProduct')

let bankHolidays;
let england;

fetch(endpoint)
    .then(blob => blob.json())
    .then(data => handleDates(data));

function handleDates(data) {
    bankHolidays = data;
    const html = bankHolidays.map((items) => {
        return `
						<div class="col-2th">
							<div class="card">
								<div class="image">
									<img src="${items.imageUrl}">
								</div>
								<div class="name">
									<p>${items.productName}</p>
								</div>
								<div class="price">
									<p>${items.price} VND</p>
								</div>
							</div>
						</div>
                
						`;
    }).join('');
    ul.innerHTML = html;
}