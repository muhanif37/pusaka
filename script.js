// NavbarScroll
const navScroll = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY >= 20) {
    navScroll.classList.add("navbar-scrolled");
  } else if (window.scrollY < 20) {
    navScroll.classList.remove("navbar-scrolled");
  }
});

// DataTables
$(document).ready(function () {
  $("#ikuDaerah").DataTable({
    responsive: true,
    paging: false,
  });
  $("#ikuPd").DataTable({
    responsive: true,
    paging: false,
  });
  $("#isd").DataTable({
    responsive: true,
    paging: false,
  });
  $("#indikatorDpa").DataTable({
    responsive: true,
    paging: false,
  });
  $("#monografiDesa").DataTable({
    responsive: true,
    paging: false,
  });
  $("#skpd").DataTable({
    responsive: true,
    paging: false,
  });
});

// Chart JS
const ctx = document.getElementById("myChart");

new Chart(ctx, {
  type: "line",
  data: {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

// $(document).ready(function () {
//   var rowCount = $("#indikatorDpa tbody tr").length;

//   // Tentukan batas jumlah data untuk menampilkan pagination
//   var paginationThreshold = 10;

//   // Inisialisasi DataTables dengan atau tanpa pagination
//   if (rowCount > paginationThreshold) {
//     $("#indikatorDpa").DataTable({
//       paging: true,
//       pageLength: 10,
//       lengthMenu: [10, 25, 50, 75, 100],
//     });
//   } else {
//     $("#indikatorDpa").DataTable({
//       paging: false,
//     });
//   }
// });
