const tbody = document.getElementById("gioHangBody");
let tong = 0;

gioHang.forEach((item,index) => {
  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td><img src="${item.hinh}" width="50"></td>
    <td>${item.ten}</td>
    <td>${item.soLuong}</td>
    <td>${formatVND(item.soLuong*item.gia)}</td>
    <td>
            <button onclick="xoaMotSanPham(${index})" style="color:red; cursor:pointer;">
                🗑️ Xóa
            </button>
        </td>
  `;
  tbody.appendChild(tr);
  tong += item.soLuong * item.gia;
});

document.getElementById("tongTien").textContent = formatVND(tong);

function xoaHet(){
  localStorage.removeItem("gioHang");
  location.reload();
}
