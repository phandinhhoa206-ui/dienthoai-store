// về trang chủ
const gohome=document.getElementById("backhome");
gohome.addEventListener("click", () => {
    window.location.href="index.html";
})


// Tài khoản có sẵn
let accounts = [
    { username: "admin", password: "123" },
    { username: "user1", password: "111" }
];

// Lấy phần tử
const btnLogin = document.getElementById("btnLogin");
const btnRegister = document.getElementById("btnRegister");
const btnLogout = document.getElementById("logoutBtn");

const btnLoginSubmit = document.getElementById("loginSubmit");
const btnRegisterSubmit = document.getElementById("RegisterSubmit");

// Lấy tài khoản đã đăng ký từ localStorage
let savedAccounts = JSON.parse(localStorage.getItem("accounts")) || [];
accounts = accounts.concat(savedAccounts);

// Hiển thị form
function showLogin() {
    hideAll();
    document.getElementById("loginForm").style.display = "block";
}

function showRegister() {
    hideAll();
    document.getElementById("registerForm").style.display = "block";
}

function hideAll() {
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("registerForm").style.display = "none";
}

// Đăng ký
function register() {
    let user = document.getElementById("registerUser").value.trim();
    let pass = document.getElementById("registerPass").value.trim();

    if (!user || !pass) {
        alert("Vui lòng nhập đầy đủ thông tin");
        return;
    }

    // Kiểm tra trùng username
    let isExist = accounts.some(acc => acc.username === user);

    if (isExist) {
        alert("Tên đăng nhập đã tồn tại, vui lòng chọn tên khác!");
        return;
    }

    // Thêm tài khoản mới
    let newAccount = { username: user, password: pass };

    accounts.push(newAccount);
    savedAccounts.push(newAccount);

    localStorage.setItem("accounts", JSON.stringify(savedAccounts));

    alert("Đăng ký thành công!");
    showLogin();
}

// Đăng nhập
function login() {
    let user = document.getElementById("loginUser").value;
    let pass = document.getElementById("loginPass").value;
console.log(accounts)
    let found = accounts.find(acc => acc.username === user && acc.password === pass);

    if (found) {
        // LƯU TRẠNG THÁI: Lưu tên user vào máy
        localStorage.setItem("currentUser", user);

        // Cập nhật giao diện 
        document.getElementById("wellcomeText").innerText = `Xin chào bạn ${user}`;
        document.getElementById("authButtons").style.display = "none";
        document.getElementById("logoutBtn").style.display = "inline-block";
        hideAll();
        alert("Đăng nhập thành công!");
    } else {
        alert("Sai tài khoản hoặc mật khẩu!");
    }
}

// Đăng xuất
function logout() {
    // XÓA TRẠNG THÁI: Gỡ user khỏi localStorage
    localStorage.removeItem("currentUser");

    document.getElementById("wellcomeText").innerText = "Xin chào quý khách";
    document.getElementById("authButtons").style.display = "block";
    document.getElementById("logoutBtn").style.display = "none";
    hideAll()
}

// Kiểm tra trạng thái đăng nhập ngay khi trang web vừa tải xong
window.addEventListener("load", function() {
    let savedUser = localStorage.getItem("currentUser");

    if (savedUser) {
        // Nếu tìm thấy tên người dùng đã lưu: Tự động hiện trạng thái đã đăng nhập
        document.getElementById("wellcomeText").innerText = `Xin chào bạn ${savedUser}`;
        document.getElementById("authButtons").style.display = "none";
        document.getElementById("logoutBtn").style.display = "inline-block";
    }
});

console.log("Nút Login:", btnLoginSubmit);
console.log("Nút Register:", btnRegisterSubmit);
// Gán sự kiện
btnLogin.addEventListener("click", showLogin);
btnRegister.addEventListener("click", showRegister);
btnLogout.addEventListener("click", logout);
btnLoginSubmit.addEventListener("click", login); 
btnRegister.addEventListener("click", register);