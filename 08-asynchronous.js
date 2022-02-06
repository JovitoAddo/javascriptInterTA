/// 01. saat dua atau lebih object melakukan sesuatu secara bersamaan, lalu object yang sudah selesai harus menunggu object lain untuk selesai
/// 02. saat dua atau lebih object yang melakukan sesuatu tidak bersamaan, tapi bisa memulai object lain agar selesai di waktu yang sama
/// 03. bisa
/// 04. first log:  1
// first log:  2
// first log:  3
// first log:  4
// first log:  5
// second log:  6
// second log:  6
// second log:  6
// second log:  6
// second log:  6
/// 05. karena i yang ada di arrow function di second log memiliki nilai 6 dari loop di first log
/// 06. 
for (var i = 1; i<=5; i++) {
    console.log("first log: ", i); // 01 - Pertama
    setTimeout(() => console.log("second log: ", i-=1), 100); // 02 - Kedua
  }