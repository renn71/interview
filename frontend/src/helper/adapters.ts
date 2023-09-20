/* eslint-disable @typescript-eslint/no-explicit-any */
import { TMovement, TRover } from '../types/models';

export const roversAdapter = (data: any) =>
  data.rovers.map((rover: any) => {
    const data: TRover = {
      movements: rover.movements.map((movement: any) => {
        const move: TMovement = {
          command: movement.command,
          coord: movement.coord,
          x: movement.x,
          y: movement.y,
        };
        return move;
      }),
      position: {
        coord: rover.position.coord,
        x: rover.position.x,
        y: rover.position.y,
      },
    };
    return data;
  });
