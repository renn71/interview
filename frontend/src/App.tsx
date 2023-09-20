import { useState } from 'react';
import './App.css';
import Form from './features/form/Form';
import Table from './features/table/Table';
import { TRover } from './types/models';

function App() {
  const [rovers, setRovers] = useState<TRover[]>([]);

  return (
    <div className="App">
      <h1>Rover in Mars</h1>
      <main className="content">
        <Form setRovers={setRovers} />
        {rovers && <Table rovers={rovers} />}
      </main>
    </div>
  );
}

export default App;
