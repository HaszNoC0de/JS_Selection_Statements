console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);

let magicNumber = 7;

let guessNumber = prompt("What is the magic number?")

if (guessNumber == magicNumber) {
  console.log("Congratulations! You've guessed the number.");
} else if(guessNumber > magicNumber) {
  console.log("Guess number is too high :/. Try again.");
} else if (guessNumber < magicNumber) {
  console.log("Guess number is too low >:(. Try again.");
}

//exercise 2

let birthMonth =  prompt("what is your birth month?");

switch (birthMonth.toLowerCase()) {
  
  case ("december" , "january" , "february"):
    console.log("Winter");
      break;

    case ("march" , "april", "may"):
    console.log("Spring");
  break;
  
  case  ("june", "july", "august"):
    console.log("Summer");
    break;
  
    case("september", "october", "november"):
    console.log("Fall");
    break;
    default:
    console.log("I don't recognize that month...");
}


//Exercise 3
let typeId = "01";
let colorId = "PU";
let sizeId = "L";

let type = "";
let color = "";
let size = "";

if (typeId == "01") {
  type = "Tank top";
} else if (typeId == "02") {
  type = "T-Shirt";
} else if (typeId == "03") {
  type = "Long Sleeve";
} else if (typeId == "04") {
  type == "Sweat Shirt";
} else {
  type = "Other";
}

switch()typeId) {
  case "01":
    type = "Tank top";
    break;
    case "02":
      type = "T-shirt";
      break;
      case "03":
        type = "Long Sleeve";
        break;
        case "04":
          type = "Sweat Shirt "
          break;
      default: 
      type = "Other"
}
if (colorId == "BL") {
  color = "Black";
} else if (colorId == "BL") {
  color = "Blue";
} else if (colorId == "RD") {
  color = "Red";
} else if (colorId == "PU") {
  color = "Purple";
} else {
  color = "White";
}

switch (colorId) {
  case = "BL"
  color = "Black";
  break;
    case = "BU"
  color = "Blue"
  break;
    case = "R"
  color = "Red"
  break;
    case = "P"
  color = "Purple"
  break;
    default:
    color = "White"
}

if (sizeId == "S") {
  size = "Small";
} else if (sizeId == "M") {
  size = "Medium";
} else if (sizeId == "L") {
  size = "Large";
} else if (sizeId == "XL") {
  size = "Extra Large";
} else {
  size = "One Size Fits All";
}

console.log(`Product: ${size} ${color} ${type}`);

switch (sizeId) {
  case "S":
    size = "Small";
    break;
    case "M":
      size = "Medium"
      break;
      case "L":
        size = "Large";
        break;
        case "XL":
          size = "Extra Large";
          break;
          default:
            size = "One size fits all";

}