const container = document.getElementById("cacloaidienthoai");

function hienthiDienThoai(){
  const fragment = document.createDocumentFragment();

  danhsachDienThoai.forEach(dienthoai=>{
    const card = document.createElement("div");
    card.className="phone-card";

    // Click mở chi tiết chỉ gắn vào ảnh + tên
    const img = document.createElement("img");
    img.src = dienthoai.hinh;
    img.onclick = ()=>moChiTiet(dienthoai);

    const ten = document.createElement("h3");
    ten.textContent = dienthoai.ten;
    ten.onclick = ()=>moChiTiet(dienthoai);

    const gia = document.createElement("p");
    gia.textContent = "Giá: "+formatVND(dienthoai.gia);

    const input = document.createElement("input");
    input.type="number"; input.min=0; input.value=0;

    const tien = document.createElement("p");
    tien.textContent="Thành tiền: "+formatVND(0);

    input.addEventListener("input", ()=>{
      let sl = Number(input.value);
      if(sl<0||isNaN(sl)) sl=input.value=0;
      tien.textContent="Thành tiền: "+formatVND(sl*dienthoai.gia);
    });

    const btn = document.createElement("button");
    btn.textContent="Thêm vào giỏ";
    btn.onclick = ()=>{
      let sl = Number(input.value);
      if(sl<=0) return alert("Chưa chọn số lượng");
      themVaoGio(dienthoai.id, sl);
    };

    card.append(img,ten,gia,input,tien,btn);
    fragment.appendChild(card);
  });

  container.appendChild(fragment);
}

function moChiTiet(dienthoai){
  localStorage.setItem("selectedProduct", JSON.stringify(dienthoai));
  window.location.href="detail.html";
}
