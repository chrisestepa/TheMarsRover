// Rover Object Goes Here
var roverObj = {
  direction: "N",
  x: 0,
  y: 0
}


// ======================

// ======================
function turnLeft(rover){
  console.log("turnLeft was called!");
  switch (rover.direction)
  {
    case "N": rover.direction = "W";
    roverObj.direction = rover.direction;
    break;
    case "W": rover.direction = "S";
    roverObj.direction = rover.direction;
    break;
    case "S": rover.direction = "E";
    roverObj.direction = rover.direction;
    break;
    case "E": rover.direction = "N";
    roverObj.direction = rover.direction;
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

function moveForward(rover){
  console.log("moveForward was called");
  switch (rover.direction)
  {
    case "N":
      if (rover.y == 0) {
        roverObj.y = rover.y;
        roverObj.x = rover.x;
        break;
      }
      rover.y -= 1;
      roverObj.y = rover.y;
      roverObj.x = rover.x;
      break;
    case "W":
      if (rover.x == 0) {
        roverObj.y = rover.y;
        roverObj.x = rover.x;
        break;
      }
      rover.x -= 1;
      roverObj.y = rover.y;
      roverObj.x = rover.x;
      break;
    case "S":
      if (rover.y == 9) {
        roverObj.y = rover.y;
        roverObj.x = rover.x;
        break;
      }
      rover.y += 1;
      roverObj.y = rover.y;
      roverObj.x = rover.x;
      break;
    case "E":
      if (rover.x == 9) {
        roverObj.y = rover.y;
        roverObj.x = rover.x;
        break;
      }
      rover.x += 1;
      roverObj.y = rover.y;
      roverObj.x = rover.x;
      break;
  }
}

function roverApp(command) {
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
  }
}

console.log("Start position: " + roverObj.x + ", " + roverObj.y);

roverApp("rffrfflfrfflff");

console.log("End position: " + roverObj.x + ", " + roverObj.y);
console.log("Direction: " + roverObj.direction);
