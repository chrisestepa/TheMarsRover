// Rover Object Goes Here
var roverObj = {
  direction: "E",
  x: 0,
  y: 0,
  travelLog: [0, 0]
}

var rover2Obj = {
  direction: "N",
  x: 9,
  y: 9,
  travelLog: [9, 9]
}

var map = [
  ["R", "L", "L", "L", "L", "L", "L", "L", "L", "L"],
  ["L", "L", "O", "L", "L", "L", "L", "L", "O", "L"],
  ["L", "L", "L", "L", "L", "L", "L", "L", "L", "L"],
  ["L", "L", "L", "L", "L", "L", "L", "L", "L", "L"],
  ["L", "O", "L", "L", "L", "L", "L", "L", "L", "L"],
  ["L", "L", "L", "L", "L", "L", "L", "L", "L", "O"],
  ["L", "L", "O", "O", "O", "L", "L", "L", "L", "L"],
  ["L", "L", "L", "L", "L", "L", "L", "L", "L", "L"],
  ["L", "L", "L", "L", "L", "L", "L", "L", "L", "L"],
  ["L", "L", "L", "L", "L", "L", "L", "L", "L", "R"],];


// GIROS ROVER 1

function turnLeft(rover){
  console.log("turnLeft was called!");
  switch (rover.direction)
  {
    case "N": rover.direction = "W";
    break;
    case "W": rover.direction = "S";
    break;
    case "S": rover.direction = "E";
    break;
    case "E": rover.direction = "N";
    break;
  }
}

function turnRight(rover){
  console.log("turnRight was called!");
  switch (rover.direction)
  {
    case "N": rover.direction = "E";
    break;
    case "W": rover.direction = "N";
    break;
    case "S": rover.direction = "W";
    break;
    case "E": rover.direction = "S";
    break;
  }
}

// AVANZAR Y RETROCEDER

function moveForward(rover){
  console.log("moveForward was called");
  switch (rover.direction)
  {
    case "N":
      if (rover.y === 0) {
        break;
      }
      map[rover.y][rover.x] = "L";
      rover.y -= 1;
      if (map[rover.y][rover.x] === "L") {
        rover.travelLog.push(rover.x, rover.y);
        map[rover.y][rover.x] = "R";
      }
      else {
        rover.y += 1;
        console.log("Obstáculo en el camino!");
      }
      break;
    case "W":
      if (rover.x === 0) {
        break;
      }
      map[rover.y][rover.x] = "L";
      rover.x -= 1;
      if (map[rover.y][rover.x] === "L") {
        rover.travelLog.push(rover.x, rover.y);
        map[rover.y][rover.x] = "R";
      }
      else {
        rover.x += 1;
        console.log("Obstáculo en el camino!");
      }
      break;
    case "S":
      if (rover.y === 9) {
        break;
      }
      map[rover.y][rover.x] = "L";
      rover.y += 1;
      if (map[rover.y][rover.x] === "L") {
        rover.travelLog.push(rover.x, rover.y);
        map[rover.y][rover.x] = "R";
      }
      else {
        rover.y -= 1;
        console.log("Obstáculo en el camino!");
      }
      break;
    case "E":
      if (rover.x === 9) {
        break;
      }
      map[rover.y][rover.x] = "L";
      rover.x += 1;
      if (map[rover.y][rover.x] === "L") {
        rover.travelLog.push(rover.x, rover.y);
        map[rover.y][rover.x] = "R";
      }
      else {
        rover.x -= 1;
        console.log("Obstáculo en el camino!");
      }
      break;
  }
}

function moveBackward(rover){
  console.log("moveBackward was called");
  switch (rover.direction)
  {
    case "N":
      if (rover.y === 9) {
        break;
      }
      map[rover.y][rover.x] = "L";
      rover.y += 1;
      if (map[rover.y][rover.x] === "L") {
        rover.travelLog.push(rover.x, rover.y);
        map[rover.y][rover.x] = "R";
      }
      else {
        rover.y -= 1;
        console.log("Obstáculo en el camino!");
      }
      break;
    case "W":
      if (rover.x === 9) {
        break;
      }
      map[rover.y][rover.x] = "L";
      rover.x += 1;
      if (map[rover.y][rover.x] === "L") {
        rover.travelLog.push(rover.x, rover.y);
        map[rover.y][rover.x] = "R";
      }
      else {
        rover.x -= 1;
        console.log("Obstáculo en el camino!");
      }
      break;
    case "S":
      if (rover.y === 0) {
        break;
      }
      map[rover.y][rover.x] = "L";
      rover.y -= 1;
      if (map[rover.y][rover.x] === "L") {
        rover.travelLog.push(rover.x, rover.y);
        map[rover.y][rover.x] = "R";
      }
      else {
        rover.y += 1;
        console.log("Obstáculo en el camino!");
      }
      break;
    case "E":
      if (rover.x === 0) {
        break;
      }
      map[rover.y][rover.x] = "L";
      rover.x -= 1;
      if (map[rover.y][rover.x] === "L") {
        rover.travelLog.push(rover.x, rover.y);
        map[rover.y][rover.x] = "R";
      }
      else {
        rover.x += 1;
        console.log("Obstáculo en el camino!");
      }
      break;
  }
}

// FUNCIONES PRINCIPALES

function roverApp(command) {
  var sec = 1;

  for (var j = 0; j < command.length; j++) {
    if (command[j] != "f" && command[j] != "r" && command[j] != "l" && command[j] != "b") {
      sec = 0;
      }
    }

  if (sec) {
    for (var i = 0; i < command.length; i++) {
      if (command[i] === "f") {
        moveForward(roverObj);
      }
      if (command[i] === "r") {
        turnRight(roverObj);
      }
      if (command[i] === "l") {
        turnLeft(roverObj);
      }
      if (command[i] === "b") {
        moveBackward(roverObj);
      }
    }
  }
    else {
      console.log("Secuencia de movimientos errónea.");
    }
}

function rover2App(command) {
  var sec = 1;

  for (var j = 0; j < command.length; j++) {
    if (command[j] != "f" && command[j] != "r" && command[j] != "l" && command[j] != "b") {
      sec = 0;
      }
    }

  if (sec) {
    for (var i = 0; i < command.length; i++) {
      if (command[i] === "f") {
        moveForward(rover2Obj);
      }
      if (command[i] === "r") {
        turnRight(rover2Obj);
      }
      if (command[i] === "l") {
        turnLeft(rover2Obj);
      }
      if (command[i] === "b") {
        moveBackward(rover2Obj);
      }
    }
  }
    else {
      console.log("Secuencia de movimientos errónea.");
    }
}

// IMPRESIONES

console.log("Posición inicial Rover 1: " + roverObj.x + ", " + roverObj.y);
roverApp("f");
console.log("Nueva posición Rover 1: " + roverObj.x + ", " + roverObj.y);
console.log("Orientación Rover 1: " + roverObj.direction);

console.log("Posición inicial Rover 2: " + rover2Obj.x + ", " + rover2Obj.y);
rover2App("b");
console.log("Nueva posición Rover 2: " + rover2Obj.x + ", " + rover2Obj.y);
console.log("Orientación Rover 2: " + rover2Obj.direction);

console.log("Posición inicial Rover 1: " + roverObj.x + ", " + roverObj.y);
roverApp("f");
console.log("Nueva posición Rover 1: " + roverObj.x + ", " + roverObj.y);
console.log("Orientación Rover 1: " + roverObj.direction);

console.log("Posición inicial Rover 2: " + rover2Obj.x + ", " + rover2Obj.y);
rover2App("l");
console.log("Nueva posición Rover 2: " + rover2Obj.x + ", " + rover2Obj.y);
console.log("Orientación Rover 2: " + rover2Obj.direction);

console.log("Posición inicial Rover 1: " + roverObj.x + ", " + roverObj.y);
roverApp("r");
console.log("Nueva posición Rover 1: " + roverObj.x + ", " + roverObj.y);
console.log("Orientación Rover 1: " + roverObj.direction);

console.log("Posición inicial Rover 2: " + rover2Obj.x + ", " + rover2Obj.y);
rover2App("f");
console.log("Nueva posición Rover 2: " + rover2Obj.x + ", " + rover2Obj.y);
console.log("Orientación Rover 2: " + rover2Obj.direction);

console.log("Posición inicial Rover 1: " + roverObj.x + ", " + roverObj.y);
roverApp("f");
console.log("Nueva posición Rover 1: " + roverObj.x + ", " + roverObj.y);
console.log("Orientación Rover 1: " + roverObj.direction);

console.log("Posición inicial Rover 2: " + rover2Obj.x + ", " + rover2Obj.y);
rover2App("r");
console.log("Nueva posición Rover 2: " + rover2Obj.x + ", " + rover2Obj.y);
console.log("Orientación Rover 2: " + rover2Obj.direction);

console.log("Posición inicial Rover 1: " + roverObj.x + ", " + roverObj.y);
roverApp("l");
console.log("Nueva posición Rover 1: " + roverObj.x + ", " + roverObj.y);
console.log("Orientación Rover 1: " + roverObj.direction);

console.log("Posición inicial Rover 2: " + rover2Obj.x + ", " + rover2Obj.y);
rover2App("f");
console.log("Nueva posición Rover 2: " + rover2Obj.x + ", " + rover2Obj.y);
console.log("Orientación Rover 2: " + rover2Obj.direction);

console.log("Posición inicial Rover 1: " + roverObj.x + ", " + roverObj.y);
roverApp("r");
console.log("Nueva posición Rover 1: " + roverObj.x + ", " + roverObj.y);
console.log("Orientación Rover 1: " + roverObj.direction);

console.log("Posición inicial Rover 2: " + rover2Obj.x + ", " + rover2Obj.y);
rover2App("f");
console.log("Nueva posición Rover 2: " + rover2Obj.x + ", " + rover2Obj.y);
console.log("Orientación Rover 2: " + rover2Obj.direction);
