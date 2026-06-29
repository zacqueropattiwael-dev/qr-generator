function generateQR() {
  let text = document.getElementById("text").value;
  let qr = document.getElementById("qr");

  qr.src =
    "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data="
    + encodeURIComponent(text);
}
