// script.js
// وظيفة لعرض رسالة ترحيب عند تحميل الصفحة
Window.onload = function() {
    Alert('مرحبًا بك في موقعنا!'); // رسالة ترحيب
};
// وظيفة لتغيير لون الخلفية عند النقر على زر
document.getElementById('changeColorButton').onclick = function() {
    document.body.style.backgroundColor = getRandomColor(); // تغيير لون الخلفية إلى لون عشوائي
};

// وظيفة للحصول على لون عشوائي
function getRandomColor() {
    const letters = '0123456789ABCDEF'; // مجموعة من الأرقام والأحرف
    let color = '#'; // بدء رمز اللون
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]; // إضافة حرف عشوائي
    }
    return color; // إرجاع اللون العشوائي
}

// وظيفة لتسجيل الأحداث على زر
document.getElementById('logButton').onclick = function() {
    console.log('تم النقر على زر السجل!'); // تسجيل في وحدة التحكم
};

// وظيفة لإظهار تاريخ اليوم في عنصر معين
document.getElementById('showDateButton').onclick = function() {
    const today = new Date(); // الحصول على تاريخ اليوم
    document.getElementById('dateDisplay').innerText = 'تاريخ اليوم هو: ' + today.toLocaleDateString(); // عرض التاريخ
};

// وظيفة للتحقق من صحة النموذج
document.getElementById('myForm').onsubmit = function() {
    const name = document.getElementById('name').value;
    if (!name) {
        alert('يرجى إدخال اسمك.');
        return false; // يمنع إرسال النموذج
    }
    return true; // يسمح بإرسال النموذج
};

// وظيفة لتخزين البيانات في التخزين المحلي
document.getElementById('saveButton').onclick = function() {
    const username = document.getElementById('usernameInput').value;
    localStorage.setItem('username', username); // تخزين البيانات
    alert('تم حفظ اسم المستخدم!');
};

// وظيفة لاسترجاع البيانات من التخزين المحلي
document.getElementById('loadButton').onclick = function() {
    const username = localStorage.getItem('username'); // استرجاع البيانات
    if (username) {
        alert('اسم المستخدم المحفوظ هو: ' + username);
    } else {
        alert('لا يوجد اسم مستخدم محفوظ.');
    }
};
