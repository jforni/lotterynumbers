import { useState } from 'react';

function RandomGenerator() {

function generateRandoms() {
  const randomNumbers = new Array(6);
  for (let i = 0; i < randomNumbers.length; i++) {
    randomNumbers[i] = Math.trunc(Math.random() * 43)
  setNumbersSelected(randomNumbers)
  }
}
 
const [numbersSelected, setNumbersSelected] = useState([0,0,0,0,0,0]);

return(
  <div>
    <p>Números Quini 6:</p>
    <div class="d-flex flex-column align-items-center bg-warning p-3">
      {numbersSelected.map(num => (<span class="badge bg-primary m-2 d-flex align-items-center justify-content-center w-25">{num}</span>))}
      <button type="button" class="btn btn-success mt-3" onClick={generateRandoms}>Generar números de la suerte!!!</button>
    </div>
  </div>
)
}

export default RandomGenerator;