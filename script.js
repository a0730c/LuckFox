document.addEventListener('DOMContentLoaded', function() {
    const photoInput = document.getElementById('photo-input');
    const profilePhoto = document.getElementById('profile-photo');
    const uploadIcon = document.querySelector('.upload-icon');
    const vacationInfo = document.getElementById('vacation-info');

    photoInput.addEventListener('change', function(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                profilePhoto.src = e.target.result;
                uploadIcon.style.display = 'none';
            }
            reader.readAsDataURL(file);
        }
    });

    vacationInfo.addEventListener('mouseenter', function() {
        this.style.color = '#00BFFF';
    });

    vacationInfo.addEventListener('mouseleave', function() {
        this.style.color = '#83c4f1';
    });
});

