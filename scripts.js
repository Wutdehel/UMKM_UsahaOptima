// Tambahkan kode JavaScript kalian di file ini
function handleGetFormData() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const city = document.getElementById('city').value;
    const zipCode = document.getElementById('zip-code').value;
    const status = document.getElementById('status').checked;

     return {
        name,
        email,
        city,
        zipCode,
        status
    };
};


function isNumber(string) { 
    return !isNaN(string) 
}



function checkboxIsChecked() {
    var checkbox = document.getElementById('status')

    if (checkbox.checked) {
        return true;
    }
    else {
        return false;
    }
}

function validateFormData(obj){
    if(obj != null && isNumber(obj.zipCode) && checkboxIsChecked()){
        return true;
    }else{
        return false;
    }
}

function submit() {
  event.preventDefault();
  const formData = handleGetFormData();
  
  if (validateFormData(formData)) {
      document.getElementById("warning").textContent = "";
      Swal.fire({
        icon: "success",
        title: "Sukses!",
        text: "Selamat, Data yang anda masukan, akan kami simpan",
      });
      
      // Code to handle successful form submission
  } else {
      document.getElementById("warning").textContent = "Periksa form anda sekali lagi";
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Coba check data kembali tidak boleh kosong!",
      });
  }
}

document.getElementById("forms").addEventListener("submit", event=>{
  event.preventDefault();
  submit();
});

// JANGAN DIUBAH LAGI

// Add active class to the clicked menu item
const menuItems = document.querySelectorAll('nav ul li a');

menuItems.forEach(item => {
  item.addEventListener('click', function() {
    // Remove active class from all menu items
    menuItems.forEach(item => {
      item.classList.remove('active');
    });

    // Add active class to the clicked menu item
    this.classList.add('active');
  });
});

function typeEffect() {
    const text = "Hai Sobat UMKM!!";
    const speed = 100; // Kecepatan typing (ms)
    const textContainer = document.querySelector(".animated-text");
    let i = 0;

    function type() {
      if (i < text.length) {
        textContainer.innerHTML += text.charAt(i);
        i++;
        setTimeout(type, speed);
      } else {
      }
    }

    // Mulai efek typing
    type();
  }
  typeEffect(); 

  function setActiveNav() {
    const sections = document.querySelectorAll(".content-container, .content-containers, .last-container"); // Pilih semua bagian konten
    const navLinks = document.querySelectorAll("nav ul li a"); // Pilih semua tautan navigasi

    // Loop melalui setiap bagian konten
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      // Cek apakah pengguna sedang menggulir ke dalam bagian konten
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        // Temukan tautan navigasi yang sesuai dan tambahkan kelas 'active'
        navLinks.forEach((navLink) => {
          if (navLink.getAttribute("href") === `#${section.id}`) {
            navLink.classList.add("active");
          } else {
            navLink.classList.remove("active");
          }
        });
      }
    });
  }

  // Panggil fungsi setActiveNav saat pengguna menggulir
  window.addEventListener("scroll", setActiveNav);

  // Panggil setActiveNav setelah halaman dimuat
  window.addEventListener("load", setActiveNav);


  