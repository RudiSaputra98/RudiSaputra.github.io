const scriptURL = "https://script.google.com/macros/s/AKfycbwHyo3ULrJvqhKNRN_dmgofZLX_ZJ-V43hRv5ocMzClZXL6sn1zCKRImb7X-Bg8GFAY/exec";
const form = document.forms["Form-kontak"];

const btnKirim = document.querySelector(".btn-kirim");
const btnLoading = document.querySelector(".btn-loading");
const myAlert = document.querySelector(".my-alert");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  //ketika tombol diklik
  //tampilakn tombol loading hilangkan tombol kirim
  btnLoading.classList.toggle("d-none");
  btnKirim.classList.toggle("d-none");

  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      btnLoading.classList.toggle("d-none");
      btnKirim.classList.toggle("d-none");

      //alert
      myAlert.classList.toggle("d-none");
      form.reset();
      console.log("Success!", response);
    })
    .catch((error) => console.error("Error!", error.message));
});
