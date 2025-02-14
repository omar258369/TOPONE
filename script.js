let users = [{ username: "OMAR KHALED", password: "Aeaeo202020", role: "ماستر" }];
let orders = [];
let totalAmount = 0;
let totalCommission = 0;

function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let user = users.find(u => u.username === username && u.password === password);

    if (user) {
        document.querySelector(".login-container").classList.add("hidden");
        document.getElementById("dashboard").classList.remove("hidden");
        updateUsersDropdown();
        updateUsersList();
    } else {
        alert("اسم المستخدم أو كلمة المرور غير صحيحة");
    }
}

function forgotPassword() {
    alert("تم إرسال كود التحقق إلى البريد الإلكتروني");
}

function showSection(sectionId) {
    document.querySelectorAll(".tab-content").forEach(tab => tab.style.display = "none");
    document.getElementById(sectionId).style.display = "block";
}

function addUser() {
    let newUsername = document.getElementById("new-username").value;
    let newPassword = document.getElementById("new-password").value;
    let userRole = document.getElementById("user-role").value;

    if (newUsername && newPassword) {
        users.push({ username: newUsername, password: newPassword, role: userRole });
        alert("تمت إضافة المستخدم بنجاح");
        updateUsersDropdown();
        updateUsersList();
    } else {
        alert("يرجى إدخال جميع البيانات");
    }
}

function addOrder() {
    let orderId = document.getElementById("order-id").value;
    let recipientPhone = document.getElementById("recipient-phone").value;
    let recipientAddress = document.getElementById("recipient-address").value;
    let amountDue = parseFloat(document.getElementById("amount-due").value);
    let commission = parseFloat(document.getElementById("commission").value);
    let assignedUser = document.getElementById("assigned-user").value;

    if (orderId && recipientPhone && recipientAddress && amountDue && commission && assignedUser) {
        orders.push({ orderId, recipientPhone, recipientAddress, amountDue, commission, assignedUser });
        totalAmount += amountDue;
        totalCommission += commission;
        
        document.getElementById("total-amount").innerText = totalAmount;
        document.getElementById("total-commission").innerText = totalCommission;

        let orderItem = document.createElement("li");
        orderItem.textContent = `أوردر ${orderId} - مبلغ: ${amountDue} جنيه - المستخدم: ${assignedUser}`;
        document.getElementById("stock-list").appendChild(orderItem);
        
        alert("تمت إضافة الأوردر بنجاح");
    } else {
        alert("يرجى إدخال جميع البيانات");
    }
}

function updateUsersDropdown() {
    let dropdown = document.getElementById("assigned-user");
    dropdown.innerHTML = '<option value="">اختر المستخدم</option>';
    users.forEach(user => {
        if (user.role === "مندوب") {
            let option = document.createElement("option");
            option.value = user.username;
            option.textContent = user.username;
            dropdown.appendChild(option);
        }
    });
}

function updateUsersList() {
    let list = document.getElementById("users-list");
    list.innerHTML = "";
    users.forEach(user => {
        let listItem = document.createElement("li");
        listItem.textContent = `${user.username} - ${user.role}`;
        list.appendChild(listItem);
    });
}

function exportToExcel() {
    alert("تم طباعة البيانات إلى ملف Excel");
}
