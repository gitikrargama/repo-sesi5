// KALKULATOR OPERASI IKRAR GAMA

// Function untuk penjumlahan
function tambah(a, b) {
  return a + b;
}

// Function untuk pengurangan
function kurang(a, b) {
  return a - b;
}

// Function pembagian
function bagi(a, b) {
  return a / b;
}

// Function perkalian
function kali(a, b) {
  return a * b;
}

// Function kalkulator utama
function kalkulator(operasi, a, b) {
  switch (operasi) {
      case '+':
          return tambah(a, b);
      case '-':
          return kurang(a, b);
      case '/':
          return bagi(a, b);
      case '*':
          return kali(a, b);
      default:
          return 'Operasi tidak valid';
  }
}

// Contoh ketika digunakan
let hasil1 = kalkulator('+', 7, 3);
let hasil2 = kalkulator('-', 543, 3); 
let hasil3 = kalkulator('/', 10, 2);
let hasil4 = kalkulator('*', 8, 2);
let hasil5 = kalkulator('%', 10, 4);

console.log(hasil1);
console.log(hasil2);
console.log(hasil3);
console.log(hasil4);
console.log(hasil5);
