export type TRover = {
  movements: TMovement[];
  position: TPosition;
};

export type TMovement = {
  command: string;
  coord: string;
  x: number;
  y: number;
};

export type TPosition = {
  coord: string;
  x: string;
  y: string;
};

export type TDataApi = {
  rovers: any;
  position: any;
};
