// current time
function updateCurrentTime() {
    const now = new Date();
    const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
    const currentTimeString = now.toLocaleDateString('en-US', options) + ' GMT+' + (now.getTimezoneOffset() / -60);
    document.getElementById('currentTime').textContent = currentTimeString;
}

// DOM load
document.addEventListener('DOMContentLoaded', updateCurrentTime);

//disply message
function displayMessage() {
    const nama = document.getElementById('nama').value;
    const tanggalLahir = document.getElementById('tanggalLahir').value;
    const jenisKelamin = document.querySelector('input[name="jenisKelamin"]:checked').value;
    const pesan = document.getElementById('pesan').value;

    document.getElementById('displayName').textContent = nama;
    document.getElementById('displayTanggalLahir').textContent = tanggalLahir;
    document.getElementById('displayJenisKelamin').textContent = jenisKelamin;
    document.getElementById('displayPesan').textContent = pesan;
}
