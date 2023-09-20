---

#  Interview Coding Problem

## How to Use the Solution

1. Make sure you have Node.js installed on your system.

2. Clone this repository to your local machine.

3. Open the `src/index.js` file in your preferred code editor.

4. Inside `src/index.js`, you will find a code snippet responsible for moving the rovers. Below is an excerpt from that code:

   ```javascript
   rovers.map((rover) => {
     let { coord, x, y, commands } = rover;
     const movements = [];

     for (let i = 0; i < commands.length; i++) {
       const command = commands[i];

       if (command === 'L') coord = coordinates[coord].left;
       if (command === 'R') coord = coordinates[coord].right;
       if (command === 'M') {
         if (coord === 'S') y--;
         if (coord === 'W') x--;
         if (coord === 'N') y++;
         if (coord === 'E') x++;
       }
     }
   });
   ```

   This code is responsible for moving the rovers according to the provided commands and logging the movements in a `movements` object.

5. Run the Node.js application from the command line using the following command:

   ```bash
   npm run start
   ```

6. The results of the rover exploration will be displayed in the console and postman in this enpoint

```localhost:3004/rovers```
---
