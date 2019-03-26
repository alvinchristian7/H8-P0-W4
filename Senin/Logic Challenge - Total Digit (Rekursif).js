function totalDigitRekursif(angka) {
    // you can only write your code here!
    angka = angka.toString()
    if(angka.length === 1) return Number(angka)
    var temp = angka.substr(1)
    temp = Number(temp)
    return Number(angka[0]) + totalDigitRekursif(temp)
  }
  
  // TEST CASES
  console.log(totalDigitRekursif(512)); // 8
  console.log(totalDigitRekursif(1542)); // 12
  console.log(totalDigitRekursif(5)); // 5
  console.log(totalDigitRekursif(21)); // 3
  console.log(totalDigitRekursif(11111)); // 5