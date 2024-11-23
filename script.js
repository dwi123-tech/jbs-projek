// Ambil semua elemen <a> dalam .bar
const links = document.querySelectorAll('.bar a');

// Tambahkan event listener ke masing-masing link
links.forEach(link => {
    link.addEventListener('click', function () {
        // Hapus kelas 'active' dari semua link
        links.forEach(item => item.classList.remove('active'));

        // Tambahkan kelas 'active' ke link yang diklik
        this.classList.add('active');
    });
});





// Ambil semua elemen dengan kelas .nav-link (sekarang pakai span)
const navLinks = document.querySelectorAll('.nav-link');
const list = document.querySelectorAll('.link');

// Menambahkan event listener pada setiap span
navLinks.forEach(link => {
  link.addEventListener('click', function (event) {
    event.preventDefault(); // Mencegah default behavior

    // Ambil target dari data atribut
    const targetID = link.getAttribute('data-target');
    const targetElement = document.querySelector(targetID);

    // Scroll ke target dengan smooth behavior
    targetElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});

list.forEach(link => {
    link.addEventListener('click', function (event) {
      event.preventDefault(); // Mencegah default behavior
  
      // Ambil target dari data atribut
      const targetID = link.getAttribute('data-target');
      const targetElement = document.querySelector(targetID);
  
      // Scroll ke target dengan smooth behavior
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  });



  document.getElementById("whatsappForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Mencegah form untuk reload halaman
    
    // Ambil pesan dari form input
    const message = document.getElementById("formMessage").value;
    
    // Nomor WhatsApp kamu
    const phoneNumber = "+62881037480474"; // Ganti dengan nomor WhatsApp kamu, jangan lupa tambahkan kode negara, misal +62
    
    // URL WhatsApp API untuk mengirim pesan
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    // Membuka WhatsApp tanpa berpindah halaman
    window.open(url, "_blank");
});

  