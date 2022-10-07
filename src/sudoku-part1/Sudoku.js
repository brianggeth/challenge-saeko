import React from 'react';
import { useState } from 'react';
import './Sudoku.css';

/*
=================== PART 1
INSTRUCTIONS:

Design and create functional components 
that can best fit an abstract implementation of this Sudoku grid.

* A back-end developer team is working on an API that can save cells and it's required values,
  But you don't have the API specifications yet.

* You don't need to make the components do anything but display the Sudoku Grid


=================== PART 2
INSTRUCTIONS:

Bring to life your Sudoku.

* The user must be able to click on a cell to selected it.
    * use the "selected" CSS class name

* When a cell is selected the user can press a key to modify the cell's value
    - a Backspace must erase the cell's value

=================== PART 3
(...)

*/

function SudokuCell({
  id,
  changeHandler,
  activeCell,
  cellNumber,
  submitHandler,
}) {
  return (
    <div className='sudoku-cell'>
      <div className='sudoku-grid' id={id}>
        {cellNumber.map((nodeId) => {
          return (
            <div
              onClick={(event) => changeHandler(event, id, nodeId)}
              className={
                activeCell[0] == id && activeCell[1] == nodeId
                  ? 'sudoku-cell selected'
                  : 'sudoku-cell'
              }
              id={nodeId}
            >
              <input
                type='number'
                min='1'
                max='0'
                className='sudoku-number'
                onChange={(e) => submitHandler(e, id, nodeId)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

function Sudoku() {
  const cellNumber = [0, 1, 2, 3, 4, 5, 6, 7, 8];

  const [activeCell, setActiveCell] = useState([0, 0]);
  const [board, setBoard] = useState(Array(9).fill([]));

  const changeHandler = (event, gridId, elementId) => {
    setActiveCell([gridId, elementId]);
  };

  const submitHandler = (event, gridId, elementId) => {
    if (
      (event.target.value < 1 || event.target.value > 9) &&
      event.target.value.length > 0
    ) {
      alert('Ingrese un numero en el rango 1-9');
      event.target.value = '';
    } else {
      let auxGrid;
      if (board[gridId].length > 0) {
        auxGrid = board[gridId];
      } else {
        auxGrid = Array(9).fill('');
      }

      if (
        board[gridId].includes(event.target.value) &&
        event.target.value !== ''
      ) {
        alert('No puede repetir el mismo valor dentro de un mismo cuadrante');
        event.target.value = '';
      } else {
        auxGrid[elementId] = event.target.value;
        let auxBoard = board;

        board[gridId] = auxGrid;
        console.log(board);
      }
    }
  };

  return (
    <div className='container'>
      <div className='sudoku' tabIndex='0'>
        <div className='sudoku-grid'>
          {cellNumber.map((id) => {
            return (
              <SudokuCell
                id={id}
                changeHandler={changeHandler}
                activeCell={activeCell}
                cellNumber={cellNumber}
                submitHandler={submitHandler}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Sudoku;
