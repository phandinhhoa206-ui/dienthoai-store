const sp = JSON.parse(localStorage.getItem("selectedProduct"));

document.getElementById("ten").textContent = sp.ten;
document.getElementById("gia").textContent = formatVND(sp.gia);
document.getElementById("moTa").textContent = sp.moTa;

const gal = document.getElementById("gallery");
sp.gallery.forEach(h=>{
  const img=document.createElement("img");
  img.src=h;
  gal.appendChild(img);
});

const input = document.getElementById("soLuong");
const tien = document.getElementById("tien");

input.oninput = ()=>{
  let sl = Number(input.value);
  if(sl<0||isNaN(sl)) sl=input.value=0;
  tien.textContent="Thành tiền: "+formatVND(sl*sp.gia);
}

function them(){
  let sl=Number(input.value);
  if(sl<=0) return alert("Chưa chọn số lượng");
  themVaoGio(sp.id, sl);
}

function back(){ location.href="index.html"; }
function cart(){ location.href="cart.html"; }
