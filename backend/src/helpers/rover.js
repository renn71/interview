const coordinates = require('./coordinates');
class Rover {
  coord = '';
  x = 0;
  y = 0;
  rovers = [];

  move(command) {
    if (command === 'L') this.turnLeft();
    if (command === 'R') this.turnRight();
    if (command === 'M') this.moveForward();
  }

  turnLeft() {
    this.coord = coordinates[this.coord].left;
  }

  turnRight() {
    this.coord = coordinates[this.coord].right;
  }

  moveForward() {
    if (this.coord === 'S') this.y--;
    if (this.coord === 'W') this.x--;
    if (this.coord === 'N') this.y++;
    if (this.coord === 'E') this.x++;
  }

  getMovements(rover) {
    const { coord, x, y, commands } = rover;
    this.coord = coord;
    this.x = x;
    this.y = y;
    const movements = [];

    for (let i = 0; i < commands.length; i++) {
      const command = commands[i];

      this.move(command);

      const obj = {
        command: command,
        coord: this.coord,
        x: this.x,
        y: this.y,
      };

      movements.push(obj);
    }

    console.log({
      position: {
        coord: this.coord,
        x: this.x,
        y: this.y,
      },
      movements,
    });

    return {
      position: {
        coord: this.coord,
        x: this.x,
        y: this.y,
      },
      movements,
    };
  }

  getRovers(roversData) {
    roversData.map((rover) => {
      this.rovers.push(this.getMovements(rover));
    });
    return this.rovers;
  }
}

module.exports = Rover;
