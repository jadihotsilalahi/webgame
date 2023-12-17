// Generate angka acak antara 1 dan 10
const targetNumber = Math.floor(Math.random() * 10) + 1;

// Mendapatkan elemen HTML
const guessInput = document.getElementById('guessInput');
const message = document.getElementById('message');

// Fungsi untuk memeriksa tebakan
function checkGuess() {
    const userGuess = parseInt(guessInput.value);

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 10) {
        setMessage('Masukkan angka antara 1 dan 10', 'red');
        return;
    }

    if (userGuess === targetNumber) {
        setMessage('Selamat! Anda benar.', 'green');
    } else {
        setMessage('Tebakan Anda salah. Coba lagi.', 'red');
    }
}

// Fungsi untuk mengatur pesan dan warna teks
function setMessage(msg, color) {
    message.textContent = msg;
    message.style.color = color;
}
