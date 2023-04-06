//keliling segitiga
const pTri1 = document.getElementById("perimeter-triangle1");
const pTri2 = document.getElementById("perimeter-triangle2");
const pTri3 = document.getElementById("perimeter-triangle3");
const submitBtn1 = document.getElementById("submit-button");
const result1 = document.getElementById("result1");
const submit1 = document.getElementById("submit1");

// menampilkan input
const calPerimeter1 = () => {
    result1.textContent = "K = " + pTri1.value + " + " + pTri2.value + 
    " + " + pTri3.value;
};

// menghitung keliling segitiga
  pTri1.addEventListener("input", calPerimeter1);
  pTri2.addEventListener("input", calPerimeter1);
  pTri3.addEventListener("input", calPerimeter1);

  submitBtn1.addEventListener("click", (event) => {
    event.preventDefault();
    const sum1 = parseFloat(pTri1.value) + parseFloat(pTri2.value) + 
    parseFloat(pTri3.value);

    submit1.textContent = "K = " + sum1;
  });


// luas segitiga
const aTri1 = document.getElementById("area-triangle1");
const aTri2 = document.getElementById("area-triangle2");
const submitBtn2 = document.getElementById("submit-button2");
const result2 = document.getElementById("result2");
const submit2 = document.getElementById("submit2");

// menampilkan input
const calArea1 = () => {
    result2.textContent = "L = 1/2" + " x " + aTri1.value + 
    " x " + aTri2.value;
};

// menghitung luas segitiga
  aTri1.addEventListener("input", calArea1);
  aTri2.addEventListener("input", calArea1);

  submitBtn2.addEventListener("click", (event) => {
    event.preventDefault();
    const area1 = 0.5 * parseFloat(aTri1.value) * parseFloat(aTri2.value);
    submit2.textContent = "L = " + area1;
  });


// keliling jajar genjang
const pPara1 = document.getElementById("perimeter-parallelogram1");
const pPara2 = document.getElementById("perimeter-parallelogram2");
const submitBtn3 = document.getElementById("submit-button3");
const result3 = document.getElementById("result3");
const submit3 = document.getElementById("submit3");

// menampilkan input
const calPerimeter2 = () => {
    result3.textContent = "K = 2(" + pPara1.value + " + " + pPara2.value + ") ";
};

// menghitung keliling jajar genjang
  pPara1.addEventListener("input", calPerimeter2);
  pPara2.addEventListener("input", calPerimeter2);

  submitBtn3.addEventListener("click", (event) => {
    event.preventDefault();
    const peripero = 2 * (parseFloat(pPara1.value) + parseFloat(pPara2.value));
    submit3.textContent = "K = " + peripero;
  });


// luas jajar genjang
const aPara1 = document.getElementById("area-parallelogram1");
const aPara2 = document.getElementById("area-parallelogram2");
const submitBtn4 = document.getElementById("submit-button4");
const result4 = document.getElementById("result4");
const submit4 = document.getElementById("submit4");

// menampilkan input
const calArea2 = () => {
    result4.textContent = "L = " + aPara1.value + " x " + aPara2.value;
};

// menghitung luas jajar genjang
  aPara1.addEventListener("input", calArea2);
  aPara2.addEventListener("input", calArea2);

  submitBtn4.addEventListener("click", (event) => {
    event.preventDefault();
    const apero = parseFloat(aPara1.value) * parseFloat(aPara2.value);
    submit4.textContent = "L = " + apero;
  });