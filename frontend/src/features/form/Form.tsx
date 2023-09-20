import { SyntheticEvent, useState } from 'react';
import api from '../../lib/api';
import { TDataApi } from '../../types/models';

type TInput = {
  x: string;
  y: string;
  coord: string;
  commands: string;
};

type TPosition = {
  x: number;
  y: number;
};

type TProps = {
  setRovers: (_: unknown) => void;
};
function Form({ setRovers }: TProps) {
  const [inputPositions, setInputPositions] = useState<TPosition>({
    x: 5,
    y: 5,
  });
  const [inputSets, setInputSets] = useState<TInput[] | null>([
    {
      x: '1',
      y: '2',
      coord: 'N',
      commands: 'LMLMLMLMM',
    },
    {
      x: '3',
      y: '3',
      coord: 'E',
      commands: 'MMRMMRMRRM',
    },
  ]);

  const handleInputChange = (index: number, name: string, value: string) => {
    const newInputSets = [...inputSets];
    newInputSets[index][name] = value;
    setInputSets(newInputSets);
  };

  const addInputSet = () => {
    setInputSets([
      ...inputSets,
      { x: '1', y: '2', coord: 'N', commands: 'LMLMLMLMM' },
    ]);
  };

  const handleSubmit = async (e:SyntheticEvent) => {
    e.preventDefault();

    const dataObj: TDataApi = {
      rovers: inputSets,
      position: inputPositions,
    };
    const data = await api(dataObj);
    await setRovers(data);
  };

  return (
    <section>
      <p className="code">
        5 5 <br /> 1 2 N <br /> LMLMLMLMM <br /> 3 3 E<br /> MMRMMRMRRM
      </p>
      <form onSubmit={handleSubmit}>
        <div className="positions">
          <div className="input-position-form">
            <label htmlFor={`posX`}>X Position :</label>
            <input
              type="text"
              id={`posX`}
              value={inputPositions.x}
              onChange={(e) =>
                setInputPositions({
                  ...inputPositions,
                  x: +e.target.value,
                })
              }
              placeholder="X position"
            />
          </div>
          <div className="input-position-form">
            <label htmlFor={`posX`}>Y Position :</label>

            <input
              type="text"
              id={`posY`}
              value={inputPositions.y}
              onChange={(e) =>
                setInputPositions({
                  ...inputPositions,
                  y: +e.target.value,
                })
              }
              placeholder="Y position"
            />
          </div>
        </div>

        {inputSets?.map((inputSet, index) => (
          <div key={index}>
            <h3 className="text-sm">Rover {index + 1}</h3>
            <div className="input-form-first">
              <div className="input-form">
                <label htmlFor={`x-${index}`}>X Position:</label>
                <input
                  type="text"
                  id={`x-${index}`}
                  value={inputSet.x}
                  onChange={(e) =>
                    handleInputChange(index, 'x', e.target.value)
                  }
                  placeholder="Example: 2"
                />
              </div>
              <div className="input-form">
                <label htmlFor={`y-${index}`}>Y Position:</label>
                <input
                  type="text"
                  id={`y-${index}`}
                  value={inputSet.y}
                  onChange={(e) =>
                    handleInputChange(index, 'y', e.target.value)
                  }
                  placeholder="Example: 4"
                />
              </div>
              <div className="input-form">
                <label htmlFor={`coord-${index}`}>Coordinate:)</label>
                <input
                  type="text"
                  id={`coord-${index}`}
                  value={inputSet.coord}
                  onChange={(e) =>
                    handleInputChange(index, 'coord', e.target.value)
                  }
                  placeholder="Example:  N (North)"
                />
              </div>
            </div>
            <br />
            <div className="input-form">
              <label htmlFor={`commands-${index}`}>Commands:</label>
              <input
                type="text"
                id={`commands-${index}`}
                value={inputSet.commands}
                onChange={(e) =>
                  handleInputChange(index, 'commands', e.target.value)
                }
                placeholder="Example: LMLMLMLMM"
              />
            </div>
          </div>
        ))}
        <div className="buttons-form">
          <button type="button" onClick={addInputSet}>
            Add new rover
          </button>
          <button type="submit">Calculate</button>
        </div>
      </form>
    </section>
  );
}

export default Form;
