let totalSold = 0;

function handlePurchase() {
    // Update total produk terjual
    totalSold += 1;
    document.getElementById('total-sold').textContent = totalSold;

    // Redirect ke WhatsApp
    redirectToWhatsApp();
}

function redirectToWhatsApp() {
    // Ganti nomor WhatsApp penjual di sini
    const phoneNumber = "6285167089251"; // Contoh: 6281234567890
    // Ganti pesan yang ingin dikirim
    const message = "Halo, saya ingin membeli produk ini.";
    // Membuat URL WhatsApp
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    // Mengarahkan ke WhatsApp
    window.open(url, '_blank');
}
