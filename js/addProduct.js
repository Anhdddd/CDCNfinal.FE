var urlAPI = 'https://itdut-s7.ddns.net:8082/api/Product';

function ThemSP() {

    var productName = document.getElementById('productName').value;
    var brandName = document.getElementById('brand').value;
    var decription = document.getElementById('decription').value;
    var imageUrl = document.getElementById('imageUrl').value;
    var price = document.getElementById('price').value;

    var body = {
        "productName": productName,
        "brandName": brandName,
        "decription": decription, 
        "imageUrl": imageUrl,
        "price": price
    }

    // cấu hình cho API
    var options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
    };

    // gọi API
    fetch(urlAPI, options);
    alert("Đã thêm thành công!");
    //window.location = "ListUpdateProduct.html";
    //window.location = "InitView.html"; có cái này ko thêm dc
}
