// về trang chủ
const gohome=document.getElementById("backhome");
gohome.addEventListener("click", () => {
    window.location.href="index.html";
})


// 2. Lấy và load dữ liệu từ localStorage lên trang chi tiết
const dulieuNhan = JSON.parse(localStorage.getItem("dulieuTrangChu"));

function hienThiChiTiet(data) {
    // Kiểm tra nếu không có dữ liệu
    if (!data) {
        document.body.innerHTML = "<p style='text-align:center; margin-top:50px;'>Không tìm thấy thông tin thành viên.</p>";
        return;
    }

    const detailContainer = document.getElementById("noidung");

    // Tạo nội dung chính (Sử dụng innerHTML để giao diện gọn gàng)
    detailContainer.innerHTML = `
        <h1>${data.name}</h1>
        <img src="${data.image}" alt="${data.name}" style="max-width:100%; height:auto; border-radius:8px;">
        <p style="margin-top: 20px; line-height: 1.6;">${data.description}</p>
        
        <hr>
        <h2>Profile & Gallery</h2>
        <div id="image-gallery" class="image-gallery"></div>
    `;

    // 3. Hiển thị gallery ảnh bổ sung
    const galleryContainer = document.getElementById("image-gallery");

    // Vòng lặp tự động tạo 4 ảnh bổ sung
    for (let i = 2; i <= 5; i++) {
        const img = document.createElement("img");
        
        // Tạo đường dẫn ảnh tự động dựa trên tên thành viên
        const folderName = data.id.toLowerCase();
        img.src = `images/phan_dinh_hoa/phandinhhoa_${i}.jpg`;
        img.alt = `${data.name} ${i}`;
        
        // Thêm một chút style cho ảnh trong gallery
       
        img.style.borderRadius = "5px";
        img.style.objectFit = "cover";

        galleryContainer.appendChild(img);
    }
}

// Gọi hàm thực thi
hienThiChiTiet(dulieuNhan);