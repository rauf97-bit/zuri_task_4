function convertFahrToCelsius(Fahr) {
  /* let converter = (((Fahr - 32) * 5) / 9).toFixed(4); */
  if (typeof Fahr === "object" && Array.isArray(Fahr) === true) {
    console.log(`${JSON.stringify(Fahr)} is not a valid input but a/an Array`);
  } else if (typeof Fahr === "object" && Array.isArray(Fahr) === false) {
    console.log(
      `${JSON.stringify(Fahr)} is not a valid number but a/an ${typeof Fahr}`
    );
  } else {
    let converter = (((Fahr - 32) * 5) / 9).toFixed(4);
    console.log(converter);
  }
}
convertFahrToCelsius(72);
convertFahrToCelsius(0);
convertFahrToCelsius({ Test: "object" });
convertFahrToCelsius([95, 105]);

function checkYuGiOh(n) {
  if (typeof n !== "number") {
    console.log(`${JSON.stringify(n)} is not a valid parameter`);
  } else {
    const myArr = [];
    for (let i = 1; i <= n; i++) {
      myArr.push(i);
    }
    let result;
    const currentNum = myArr.map((x) => {
      if (x % 2 === 0 && x % 3 === 0 && x % 5 === 0) {
        result = "yu-gi-oh";
      } else if (x % 2 === 0 && x % 3 === 0) {
        result = "yu-gi";
      } else if (x % 2 === 0 && x % 5 === 0) {
        result = "yu-oh";
      } else if (x % 3 === 0 && x % 5 === 0) {
        result = "gi-oh";
      } else if (x % 2 == 0) {
        result = "yu";
      } else if (x % 3 == 0) {
        result = "gi";
      } else if (x % 5 == 0) {
        result = "oh";
      } else result = x;
      return result;
    });
    console.log(currentNum);
  }
}

checkYuGiOh(15);
checkYuGiOh(60);
checkYuGiOh("Hello");
checkYuGiOh({});
