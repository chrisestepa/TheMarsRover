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

function moveForward(rover){
  console.log("moveForward was called");
  switch (rover.direction)
  {
    case "N":
      if (rover.y === 9) {
        return y;
      }
      rover.y += 1;
      return y;
    case "W":
      if (rover.x === 0) {
        return x;
      }
      rover.x -= 1;
      return x;
    case "S":
      if (rover.y === 0) {
        return y;
      }
      rover.y -= 1;
      return y;
    case "E":
      if (rover.x === 9) {
        return x;
      }
      rover.x += 1;
      return x;
  }
}

function roverApp(command) {
  for (var i = 0; i < command.length; i++) {
    if (command[i] === "f") {
      moveForward(command[i]);
    }
    if (command[i] === "r") {
      turnRight(command[i]);
    }
    if (command[i] === "l") {
      turnLeft(command[i]);
    }
  }
}

console.log("Start position: " + roverObj.x + ", " + roverObj.y);

roverApp("rffrfflfrff");
