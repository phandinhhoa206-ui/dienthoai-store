const locations = [
    {
        id: "phan_dinh_hoa",
        name:"Phan Đình Hóa - 24TTH02 - 24T01011",
        area:"đăk lăk",
        image:"./images/phan_dinh_hoa/phandinhhoa_1.jpg",
        description:"Hành trình xây dựng thế giới di động của Hóa"
    },

   
];

// Lấy phần tử container 

const cardContainer=document.getElementById("card-container");

//Tạo các thẻ thành viên và thêm vào container

locations.forEach(location => {
    // 1. tạo thẻ card
    const card=document.createElement("div");
    card.classList.add("card");

    //2. gán nội dung cho html cho card gọn gàng và dễ đọc
    card.innerHTML=`
    <img src="${location.image}" alt="${location.name}">
    <h2>${location.name}</h2>
    <p> Nơi sinh: ${location.area}</p>

    `;

    // 3. gán sự kiện click chuột
    card.addEventListener("click", () => {
        localStorage.setItem("dulieuTrangChu", JSON.stringify(location));
        window.location.href="chitietthanhvien.html";
    });

    // 4. append card và contener
    cardContainer.appendChild(card);

    
});