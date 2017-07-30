// Rover Object Goes Here
var roverObj = {
  direction: "N",
  x: 9,
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
        break;
      }
      rover.y += 1;
      break;
    case "W":
      if (rover.x === 0) {
        break;
      }
      rover.x -= 1;
      break;
    case "S":
      if (rover.y === 0) {
        break;
      }
      rover.y -= 1;
      break;
    case "E":
      if (rover.x === 9) {
        break;
      }
      rover.x += 1;
      break;
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
