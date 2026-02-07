document.getElementById("order").addEventListener("click", function () {
  const name = document.getElementById("input").value.trim();
  const address = document.getElementById("address").value.trim();
  const quantity = document.getElementById("quantity").value.trim();
  const qty500 = document.getElementById("qty500").value.trim();
  const mobile = document.getElementById("mobile").value.trim();

  if (!name || !address || !quantity || !mobile) {
    alert("Please fill in all details before ordering.");
    return;
  }
  const whatsappNumber = "917498886372";

  const message = `Hello Blusipp Water %0A
    I would like to place an order.%0A
    Name: ${name}%0A
    Address: ${address}%0A
    Qty 1Ltr: ${quantity || 0}%0A
    Qty 500ml: ${qty500 || 0}%0A
    Mobile: ${mobile}`;

  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${message}`;

  window.open(whatsappURL, "_blank");
});
