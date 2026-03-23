let gioHang = JSON.parse(localStorage.getItem("gioHang")) || [];

// về trang chủ
const gohome=document.getElementById("backhome");
    if(gohome){
gohome.addEventListener("click", () => {
    window.location.href="index.html";
});}



function luuGioHang(){
  localStorage.setItem("gioHang", JSON.stringify(gioHang));
}

function formatVND(x){
  return x.toLocaleString("vi-VN",{style:"currency",currency:"VND"});
}

function themVaoGio(id, soLuong){
  const dienthoai = danhsachDienThoai.find(h=>h.id==id);
  const item = gioHang.find(i=>i.id===id);

  if(item){
    item.soLuong += soLuong;
  }else{
    gioHang.push({...dienthoai, soLuong});
  }
  luuGioHang();
  alert("Đã thêm vào giỏ");
}

function thanhToan() {
    // 1. Kiểm tra xem giỏ hàng có trống không
    if (gioHang.length === 0) {
        alert("Giỏ hàng của bạn đang trống, không thể thanh toán!");
        return;
    }

    // 2. Tính lại tổng tiền để hiển thị trong thông báo (nếu cần)
    let tongTienHienTai = document.getElementById("tongTien").textContent;

    // 3. Hỏi xác nhận khách hàng
    let check = confirm(`Tổng đơn hàng của bạn là: ${tongTienHienTai}\nBạn có chắc chắn muốn đặt hàng không?`);

    if (check) {
        // 4. Thực hiện xóa giỏ hàng sau khi đặt thành công
        localStorage.removeItem("gioHang");
        
        // 5. Thông báo và chuyển hướng hoặc load lại trang
        alert("🎉 Đặt hàng thành công! Cảm ơn bạn đã mua sắm.");
        window.location.href = "index.html"; // Quay về trang chủ
    }
}


function xoaMotSanPham(index) {
    // 1. Hỏi xác nhận trước khi xóa (tùy chọn)
    let check = confirm("Bạn có chắc chắn muốn xóa sản phẩm này khỏi giỏ hàng?");
    
    if (check) {
        // 2. Xóa 1 phần tử tại vị trí index
        gioHang.splice(index, 1);
        
        // 3. Cập nhật lại LocalStorage
        localStorage.setItem("gioHang", JSON.stringify(gioHang));
        
        // 4. Load lại trang để thấy kết quả đã cập nhật
        location.reload();
    }
}
