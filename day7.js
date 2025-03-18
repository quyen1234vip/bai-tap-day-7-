//ex1
1.
// function fullName() {
//     console.log("Dang Ngo Quyen");
// }
// fullName();
// 2.
// function fullName(firstName, lastName) {
//     return firstName + " " + lastName;
// }
// let myName = fullName("Ngo", "Quyen");
// console.log(myName); 
3.
// function addNumbers(a,b){
//     return a+b;
// }
// let sum=addNumbers(1,2)
// console.log(sum)
4.
// function areaOfRectangle(length, width) {
//     return length * width;
// }
// let area = areaOfRectangle(10, 10);

// console.log(area);
5.
// function perimeterOfRectangle(length, width) {
//     return 2 * (length + width);
// }
// let perimeter = perimeterOfRectangle(5, 10);
// console.log(perimeter);
6.
// function volumeOfRectPrism(length, width, height) {
//     return length * width * height;
// }
// let volume = volumeOfRectPrism(1, 3, 2);

// console.log(volume);
7.
// function areaOfCircle(r) {
//     return Math.PI * r * r;
// }
// let area = areaOfCircle(5);
// console.log(area);
8.
// function circumOfCircle(r) {
//     return 2 * Math.PI * r;
// }
// let circumference = circumOfCircle(5);

// console.log(circumference);
9.
// function calculateDensity(mass, volume) {
//     return mass / volume;
// }
// let density = calculateDensity(10, 2);

// console.log(density);
10.
// function calculateSpeed(distance, time) {
//     return distance / time;
// }
// let speed = calculateSpeed(10, 2);

// console.log(speed);
11.
// function calculateWeight(mass, gravity) {
//     return mass * gravity;
// }
// let weight = calculateWeight(10, 9);
// console.log(weight); 
12.
// function convertCelsiusToFahrenheit(celsius) {
//     return (celsius * 9/5) + 32;
// }
// console.log(convertCelsiusToFahrenheit(0)); 
13.
// function calculateBMI(weight, height) {
//     let bmi = weight / (height * height);

//     if (bmi < 18.5) {
//         return "Underweight";
//     } else if (bmi >= 18.5 && bmi <= 24.9) {
//         return "Normal weight";
//     } else if (bmi >= 25 && bmi <= 29.9) {
//         return "Overweight";
//     } else {
//         return "Obese";
//     }
// }
// console.log(calculateBMI(50, 16));  
14.
// function checkSeason(month) {
//     if (month === "december" || month === "january" || month === "february") return "Winter";
//     if (month === "march" || month === "april" || month === "may") return "Spring";
//     if (month === "june" || month === "july" || month === "august") return "Summer";
//     if (month === "september" || month === "october" || month === "november") return "Autumn";
// }
// console.log(checkSeason("march"));
15.
// function findMax(a, b, c) {
//     let max = a;
//     if (b > max){
//         max = b;
//     } 
//     if (c > max){
//         max = c;  
//     } 
//     return max;
// }
// console.log(findMax(0, 10, 5))
//ex2
1.
// function solveLinEquation(a, b, c, x = null, y = null) {
//     if (x !== null && y === null) {
       
//         if (b === 0) 
//         return "khong the tinh y vi b = 0.";
//         return -(a * x + c) / b;
//     } 
//     else if (y !== null && x === null) {
       
//         if (a === 0) 
//         return "khong the tinh x vi a = 0.";
//         return -(b * y + c) / a;
//     } 
//     else {
//         return "nhap gia tri x hoac y de tinh";
//     }
// }
// console.log(solveLinEquation(1, 3, 5, 2));
2.
// function solveQuadEquation(a, b, c) {
//     let delta = b * b - 4 * a * c;
//     if (a === 0) {
//         return "khong phai phuong trinh bac 2.";
//     }
//     if (delta > 0) {
//         let x1 = (-b + Math.sqrt(delta)) / (2 * a);
//         let x2 = (-b - Math.sqrt(delta)) / (2 * a);
//         return "hai nnghiem pb: x1 = " + x1 + ", x2 = " + x2;
//     } 
//     else if (delta === 0) {
//         let x = -b / (2 * a);
//         return "nghiem kep: x = " + x;
//     } 
//     else {
//         return "Phương trình vô nghiệm.";
//     }
// }
// console.log(solveQuadEquation(1, -3, 2));
// console.log(solveQuadEquation(1, 4, 4))
3.
// function printArray(arr) {
//     for (let value of arr) {
//         console.log(value);
//     }
// }
// printArray(["car", "bike", "motor"]);
4.
// function showDateTime() {
//     let showTimes = new Date();
//     let day = now.getDate();
//     let month = now.getMonth() +1;
//     let year = now.getFullYear();
//     let hours = now.getHours();
//     let minutes = now.getMinutes();
//     if (day < 10) {
//         day = "0" + day;
//     }
//     if (month < 10){
//         month = "0" + month;
//     }
//     if (hours < 10){
//         hours = "0" + hours;
//     }
//     if (minutes < 10){
//         minutes = "0" + minutes;
//     }
//     return day + "/" + month + "/" + year + " " + hours + ":" + minutes;
// }
// console.log(showDateTime());
5.
// function swapValues(x, y) {
//     let backup = x; 
//     x = y;
//     y = backup;
//     return [x, y];
// }
// console.log(swapValues(8, 15));
// 6.
// function reverseArray(arr) {
//     let reversed = [];
//     for (let i = arr.length - 1; i >= 0; i--) { 
//         reversed.push(arr[i]); 
//     }
//     return reversed;
// }
// console.log(reverseArray([1, 2, 3, 4, 5])); 
// console.log(reverseArray(['A', 'B', 'C']));  
7.
// function capitalizeArray(arr) {
//     let capitalizedArray = [];
//     for (let i = 0; i < arr.length; i++) {
//         let word = arr[i];  
//         let capitalizedWord = word[0].toUpperCase() + word.slice(1); 
//         capitalizedArray.push(capitalizedWord);
//     }
//     return capitalizedArray;
// }
// console.log(capitalizeArray(["hello", "hi", "js"])); 
8.
// let items = []; 
// function addItem(item) {
//     items.push(item);
//     return items; 
// }
// console.log(addItem("A")); 
// console.log(addItem("B")); 
// console.log(addItem("C"));
9.
// let items = ["Paris", "VietNam", "Orange", "England"];
// function removeItem(index) {
//     if (index < 0 || index >= items.length) {
//         return "Index không ton tai";
//     }
//     items.splice(index, 1);
//     return items;
// }
// console.log(removeItem(1)); 
// // console.log(removeItem(0)); 
// console.log(removeItem(5)); 
10.
// function sumOfNumbers(numbers) {
//     let sum = 0;
//     for (let i = 1; i <= numbers; i++) {
//         sum = sum + i;
//     }
//     return sum;
// }
// console.log(sumOfNumbers(3)); 
// console.log(sumOfNumbers(5));
11.
// function sumOfOdds(numbers) {
//     let sum = 0;
//     for (let i = 1; i <= numbers; i++) {
//         if (i % 2 !== 0) { 
//             sum = sum +i;
//         }
//     }
//     return sum;
// }
// console.log(sumOfOdds(3));  
// console.log(sumOfOdds(9)); 
12.
// function sumOfEven(numbers) {
//         let sum = 0;
//         for (let i = 1; i <= numbers; i++) {
//             if (i % 2 === 0) { 
//                 sum = sum +i;
//             }
//         }
//         return sum;
//     }
// console.log(sumOfEven(2));  
// console.log(sumOfEven(4)); 
13.
// function evensAndOdds(n) {
//     let evens = 0;
//     let odds = 0;

//     for (let i = 0; i <= n; i++) {
//         if (i % 2 === 0) {
//             evens++;  
//         } else {
//             odds++;   
//         }
//     }

//     console.log("The number of odds are"  + odds +".");
//     console.log("The number of evens are" +  evens +".");
// }
// evensAndOdds(100);
14.
// function sum(...args) {
//     let total = 0;
//     for (let i = 0; i < args.length; i++) {
//         total += args[i];
//     }
//     return total;
// }

// console.log(sum(1, 2, 3));      
// console.log(sum(1, 2, 3, 4));  
// console.log(sum(5, 10, 15, 20)); 
15.
// function randomUserIp() {
//     return (
//         Math.floor(Math.random() * 256) + "." +Math.floor(Math.random() * 256) + "." +Math.floor(Math.random() * 256) + "." +Math.floor(Math.random() * 256)
//     );
//   }
// console.log(randomUserIp());  
16.
// function randomMacAddress() {
//     let mac = [];
//     for (let i = 0; i < 6; i++) {
//         let hex = Math.floor(Math.random() * 256).toString(16); 
//         mac.push(hex);
//     }
//     return mac.join(":");
// }
// console.log(randomMacAddress());
17.
// function randomHexaNumberGenerator() {
//     let hex = "#";  
//     let hexCharacters = "0123456789ABCDEF"; 
//     for (let i = 0; i < 6; i++) {  
//         let randomIndex = Math.floor(Math.random() * 16); 
//         hex = hex + hexCharacters[randomIndex];
//     }
//     return hex;
// }
// console.log(randomHexaNumberGenerator());
18.
// function userIdGenerator() {
// let characters = "0123456789ABCDEF";
// let userId = "";
// for (let i = 0; i < 7; i++) {  
//     let randomIndex = Math.floor(Math.random() * characters.length);  
//     userId = userId +characters[randomIndex];  
// }
// return userId;
// }
// console.log(userIdGenerator());
//ex3
1.
2.
// function rgbColorGenerator() {
//     let r = Math.floor(Math.random() * 256);
//     let g = Math.floor(Math.random() * 256);
//     let b = Math.floor(Math.random() * 256);
//     return "rgb(" + r + "," + g + "," + b + ")";
// }
// console.log(rgbColorGenerator());
3.
// function arrayOfHexaColors(num) {
//     let hexColors = [];
//     let hexChars = "0123456789ABCDEF";
//     for (let i = 0; i < num; i++) {
//         let color = "#";
//         for (let j = 0; j < 6; j++) {
//             let randomIndex = Math.floor(Math.random() * 16);
//             color += hexChars[randomIndex];
//         }
//         hexColors.push(color);
//     }
//     return hexColors;
// }
// console.log(arrayOfHexaColors(3))
// 4.
// function arrayOfRgbColors(num) {
//     let rgbColors = [];

//     for (let i = 0; i < num; i++) {
//         let r = Math.floor(Math.random() * 256);
//         let g = Math.floor(Math.random() * 256);
//         let b = Math.floor(Math.random() * 256);
//         let color = "rgb(" + r + "," + g + "," + b + ")";
//         rgbColors.push(color);
//     }

//     return rgbColors;
// }

// console.log(arrayOfRgbColors(30));
// 5.
// function convertHexatoRgb(hex){
//     if(hex.startsWith("#")){
//         hex=hex.slice(1);
//     }

// let r =parseInt(hex.substring(0,2),16);
// let g= parseInt(hex.substring(2,4),16);
// let b=parseInt(hex.substring(4,6),16);
// return "rgb("+r + ","+g+" ,"+b +")";
// }
// console.log(convertHexatoRgb("#ff5555"));
6.

// 7.
// function generateColors(type, count) {
//     let colors = []; 

//     for (let i = 0; i < count; i++) {
//         if (type === "hexa") {
//             let hex = "#";
//             let hexCharacters = "0123456789abcdef";
//             for (let j = 0; j < 6; j++) {
//                 let randomIndex = Math.floor(Math.random() * 16);
//                 hex += hexCharacters[randomIndex]; 
//             }
//             colors.push(hex);
//         } 
//         else if (type === "rgb") {
//             let r = Math.floor(Math.random() * 256); 
//             let g = Math.floor(Math.random() * 256);
//             let b = Math.floor(Math.random() * 256);
//             let rgbColor = "rgb(" + r + "," + g + "," + b + ")";
//             colors.push(rgbColor);
//         }
//     }
//     return colors;
// }
// console.log(generateColors("hexa", 3)); 
// console.log(generateColors("rgb", 3));
8.
// function shuffleArray(array) {
//     for (let i = array.length - 1; i > 0; i--) {
//         let j = Math.floor(Math.random() * (i + 1)); 
//         [array[i], array[j]] = [array[j], array[i]]; 
//     }
//     return array;
// }
// console.log(shuffleArray([1, 2, 3, 4, 5]));
// console.log(shuffleArray(["A", "B", "C", "D"]));
// 11.
// // function sum() {
//     let total = 0;
//     for (let i = 0; i < arguments.length; i++) {
//         total += arguments[i];
//     }
//     return total;
// }
// console.log(sum(1, 2, 3));      
// console.log(sum(5, 10, 15));    
// console.log(sum(1, 2, 3, 4)); 
// console.log(sum(-1, 2, 3)); 
// 12.
// function sumOfArrayItems(arr) {
//   if (!Array.isArray(arr)) {
//       return "dau vao phai la mang.";
//   }
//   if (arr.length === 0) {
//       return "mang ko duoc de trong.";
//   }
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//       let value = arr[i]; 
//       if (typeof value !== "number") {
//           return "Phan tu ko phai la so";
//       }
//       sum += value; 
//   }

  
//   return sum;
// }
// console.log(sumOfArrayItems([1, 2, 3, 4, 5]));  
// console.log(sumOfArrayItems([1, "a", 3]));     
// console.log(sumOfArrayItems([]));             
// console.log(sumOfArrayItems("khong phai mang"));
13.
// function average(arr) {
//   if (!Array.isArray(arr)) {
//       return "dau vao phai la mang";
//   }

  
//   if (arr.length === 0) {
//       return " ko duoc de trong.";
//   }

//   let sum = 0; 
//   let count = 0; 

  
//   for (let i = 0; i < arr.length; i++) {
//       let value = arr[i]; 

      
//       if (typeof value !== "number") {
//           return "co gia tri nhung ko phai so";
//       }

//       sum += value; 
//       count++; 
//   }

  
//   let avg = sum / count;
//   return avg;
// }


// console.log(average([10, 20, 30, 40]));   
// console.log(average([5, 15, 25, 35]));    
// console.log(average([1, "b", 3]));       
// console.log(average([]));                 
// console.log(average("khong phai mảng"))
14.
// function modifyArray(arr) {
//   if (!Array.isArray(arr)) {
//       return "dau vao phai la mang.";
//   }
//   if (arr.length < 5) {
//       return "Not Found";
//   }
//   arr[4] = arr[4].toUpperCase();
//   return arr;
// }
// console.log(modifyArray(['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot']));
// console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon','Microsoft',  'IBM']));
// console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon']));
15.
// function isPrime(n) {
//   if (n < 2) {
//       return false;
//   }
//   for (let i = 2; i < n; i++) {
//       if (n % i === 0) {
//           return false; 
//       }
//   }
//   return true; 
// }
// console.log(isPrime(2));   
// console.log(isPrime(3));   
// console.log(isPrime(4));   
// console.log(isPrime(17));  
// console.log(isPrime(20));
16.
// function areAllItemsUnique(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr.slice(0, i).includes(arr[i])) {
//             return false;  
//         }
//     }
//     return true;  
// }
// console.log(areAllItemsUnique([1, 2, 3, 4]));  
// console.log(areAllItemsUnique([1, 2, 3, 1])); 
17.
// function checkItemType(array) {
//     const firstType = typeof array[0]; 
//     for (let i = 1; i < array.length; i++) {
//         if (typeof array[i] !== firstType) {
//             return false; 
//         }
//     }
//     return true; 
// }
// console.log(checkItemType([1, 2, 3, 4]));        
// console.log(checkItemType(["a", "b", "c"]));      
// console.log(checkItemType([true, false, true]))
// console.log(checkItemType(["1", 2, 3, 4]));
// 18.
// function isValidVariable(name) {
//   if (typeof name !== "string") {
//       return "dau vao phai la chuoi";
//   }
//   if (name.length === 0) {
//       return false;
//   }
//   if (!isNaN(name[0])) {
//       return false;
//   }
//   for (let i = 0; i < name.length; i++) {
//       let char = name[i];
//       if (
//           !(char >= "a" && char <= "z") && !(char >= "A" && char <= "Z") && !(char >= "0" && char <= "9") && char !== "_" && char !== "$"     
//       ) {
//           return false; 
//       }
//   }
//   return true;
// }
// console.log(isValidVariable("myVar"));      
// console.log(isValidVariable("_private"));   
// console.log(isValidVariable("$money"));     
// console.log(isValidVariable("2fast"));      
// console.log(isValidVariable("hello world"));
19.
// function generateUniqueNumbers() {
//     let numbers = [];
//     while (numbers.length < 7) {
//         let randomNum = Math.floor(Math.random() * 10); 
//         if (!numbers.includes(randomNum)) { 
//             numbers.push(randomNum); 
//         }
//     }
//     return numbers;
// }
// console.log(generateUniqueNumbers());
20.
// function reverseCountries(countries) {
//     let copiedArray = [...countries]; 
//     return copiedArray.reverse(); 
// }
// const countries = ["Vietnam", "France", "Japan", "Canada"];
// const reversed = reverseCountries(countries);

// console.log(reversed);


