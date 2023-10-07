function sendWhatsAppMessage() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  // Membuat URL dengan data yang sudah diisi
  var whatsappURL = "https://wa.me/6282244760047?text=";
  var encodedMessage = encodeURIComponent("Nama Saya adalah " + name + " dengan nomor wa " + email + "\nPesan:" + message);
  whatsappURL += encodedMessage;

  // Mengarahkan pengguna ke tautan WhatsApp
  window.location.href = whatsappURL;
}
