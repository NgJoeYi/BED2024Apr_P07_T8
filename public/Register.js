document.getElementById('lectureBtn').addEventListener('click', function() {
    document.getElementById('registerContainer').classList.add('lecture');
    document.getElementById('registerContainer').classList.remove('student');
    document.getElementById('role').value = 'lecture';
    this.classList.add('selected');
    document.getElementById('studentBtn').classList.remove('selected');
});

document.getElementById('studentBtn').addEventListener('click', function() {
    document.getElementById('registerContainer').classList.add('student');
    document.getElementById('registerContainer').classList.remove('lecture');
    document.getElementById('role').value = 'student';
    this.classList.add('selected');
    document.getElementById('lectureBtn').classList.remove('selected');
});

// student selected by default
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('studentBtn').click();
});

document.getElementById('registerForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    const formData = new FormData(this);
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });

    const response = await fetch('/users/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    if (response.ok) {
        alert('Registration successful!');
    } else {
        alert('Registration failed!');
    }
});
