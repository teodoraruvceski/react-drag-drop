import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Draggable } from 'drag-react';
import './style.css';

function App() {
  const tableRectNumbers = Array.from({ length: 100 }, (_, i) => i + 1);
  const tableCircNumbers = Array.from({ length: 100 }, (_, i) => i + 1);
  const Rectangle = ({ name, style }) => {
    return (
      <div>
        <Draggable style={style}>
          <div>{name}</div>
        </Draggable>
      </div>
    );
  };

  const Circle = ({ name, style }) => {
    return (
      <div>
        <Draggable style={style}>
          <span>{name}</span>
        </Draggable>
      </div>
    );
  };

  return (
    <div>
      <h1>My Demo</h1>
      <p>Teodora Ruvceski</p>

      {tableRectNumbers.reverse().map((num) => (
        <Rectangle
          name={`Rectangle ${num}`}
          style={{ top: '100px', left: '100px' }}
        />
      ))}

      {tableCircNumbers.reverse().map((num) => (
        <Circle
          name={`Circle ${num}`}
          style={{ top: '100px', left: '300px' }}
        />
      ))}
    </div>
  );
}

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
