import { TMovement, TRover } from '../../types/models';

type TProps = {
  rovers: TRover[];
};

const styleTd = {
  backgroundColor: 'red',
  fontWeight: 'bold',
};

function Table({ rovers }: TProps) {
  return (
    <section>
      <table>
        <thead>
          <tr>
            <td>
              <b>Rover</b>
            </td>

            <td>
              <b>X </b>
            </td>
            <td>
              <b>Y </b>
            </td>
            <td>
              <b>Coordinate</b>
            </td>
            <td>
              <b>Command</b>
            </td>
          </tr>
          <tr></tr>
        </thead>
        <tbody>
          {rovers.map((rover: TRover, i: number) =>
            rover.movements.map((move: TMovement, j: number) => (
              <tr
                key={j}
                style={j === rover.movements.length - 1 ? styleTd : {}}
              >
                <td>R{i + 1}</td>
                <td>{move.x}</td>
                <td>{move.y}</td>
                <td>{move.coord}</td>
                <td>{move.command}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </section>
  );
}

export default Table;
