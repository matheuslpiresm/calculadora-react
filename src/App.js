import Input from './components/Input';
import Button from './components/Button';

import { Container, Content, Row } from './styles';
import { useState, useEffect  } from 'react';


const App = () => {
  const [currentNumber, setCurrentNumber] = useState(0);
  const [firstNumber, setFirstNumber] = useState(0);
  const [operation, setOperation] = useState('');

  const handleAddNumber = (number) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${number}`)
  }

  const handleOnClear = () => {
    setCurrentNumber('0');
    setFirstNumber('0');
    setOperation('');
  }

  const handleSumNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(currentNumber);
      setCurrentNumber('0');
      setOperation('+');
    } else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation('');
    }
  }

  const handleSubtractNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('-');
    } else {
      const subtract = Number(firstNumber) -  Number(currentNumber);
      setCurrentNumber(String(subtract));
      setOperation('');
    }
  }

  const handleDivisionNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('/');
    } else {
      const division = Number(firstNumber) /  Number(currentNumber);
      setCurrentNumber(String(division));
      setOperation('');
    }
  }

  const handleMultiplicationNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('*');
    } else {
      const multiplication = Number(firstNumber) *  Number(currentNumber);
      setCurrentNumber(String(multiplication));
      setOperation('');
    }
  }

  const handleResults = () => {
    if (firstNumber !== '0' && operation !== '' && currentNumber !== '0') {
      switch(operation){
        case '+':
        handleSumNumbers();
        break;
        case '-':
          handleSubtractNumbers();
        break;
        case '/':
          handleDivisionNumbers();
        break;
        case '*':
          handleMultiplicationNumbers();
        break;
        default:
          break;
      }
      
    }
  }

  useEffect(() => {
    const handleKeyDown = (event) => {
      const key = event.key;

      if (!isNaN(key)) {
        handleAddNumber(key); 
      } else if (key === '/') {
        handleDivisionNumbers(); 
      } else if (key === '+') {
        handleSumNumbers(); 
      } else if (key === '-') {
        handleSubtractNumbers(); 
      } else if (key === '*') {
        handleMultiplicationNumbers(); 
      } else if (key === 'Enter') {
        handleResults(); 
      } else if (key === 'Backspace') {
        handleOnClear();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentNumber, firstNumber, operation]);

  return (
    <Container>
      <Content>
        <Input value={currentNumber} />
        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')} />
          <Button label="8" onClick={() => handleAddNumber('8')} />
          <Button label="9" onClick={() => handleAddNumber('9')} />
          <Button label="C" onClick={(handleOnClear)} />
        </Row>

        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')} />
          <Button label="5" onClick={() => handleAddNumber('5')} />
          <Button label="6" onClick={() => handleAddNumber('6')} />
          <Button label="÷" onClick={handleDivisionNumbers}/>
        </Row>

        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')} />
          <Button label="2" onClick={() => handleAddNumber('2')} />
          <Button label="3" onClick={() => handleAddNumber('3')} />
          <Button label="*" onClick={handleMultiplicationNumbers}/>
        </Row>

        <Row>
          <Button label="0" onClick={() => handleAddNumber('0')} />
          <Button label="-" onClick={handleSubtractNumbers} />
          <Button label="+" onClick={handleSumNumbers}/>
          <Button label="=" onClick={handleResults}/>
        </Row>

      </Content>
    </Container>
  );
}

export default App;
