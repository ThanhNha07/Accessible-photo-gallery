/* Hàm cập nhật hình ảnh chính khi rê chuột/focus vào ảnh thu nhỏ */
function upDate(previewPic) {
    const imageDiv = document.getElementById('image');
    imageDiv.style.backgroundImage = `url('${previewPic.src}')`;
    imageDiv.innerHTML = previewPic.alt;
}

/* Hàm khôi phục lại trạng thái ban đầu khi di chuột ra/blur */
function unDo() {
    const imageDiv = document.getElementById('image');
    imageDiv.style.backgroundImage = "url('')";
    imageDiv.innerHTML = "Rê chuột hoặc dùng phím Tab để chọn ảnh bên dưới.";
}

/* Hàm tự động thêm tabindex cho 6 ảnh khi trang web tải xong */
function addTabindex() {
    console.log("Trang web đã tải xong! Bắt đầu thêm tabindex...");
    
    const images = document.querySelectorAll('.preview');
    
    for (let i = 0; i < images.length; i++) {
        images[i].setAttribute('tabindex', '0');
    }
}