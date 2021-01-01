import React, {useState} from 'react'

import Result from './components/Result'
import Operator from './components/Operator'
import Numpad from './components/Numpad'
import Operation from './components/Operation'



const App = (props) => {
  
  const [result, setResult] = useState(0);
  const [num, setNum]       = useState({num0:'', num1:''});
  const [method, setMethod] = useState({method:'null', symbol:''});
  
  const clear = () => {
    setResult(0);
    setNum({num0:'', num1:''});
    setMethod({method:'null', symbol:''});
  }
  
  const numClicked = (i) => {
    if(method.method === 'null') {
      setNum({num0:i, num1:''+num.num1});
      setNum({num0:''+num.num0+i*1, num1:num.num1});
      setResult(i);
      setResult(''+num.num0+i*1);
    } else {
      setNum({num0:''+num.num0, num1:i});
      setNum({num0:num.num0, num1:''+num.num1+i*1});
      setResult(i);
      setResult(''+num.num1+i*1);
      
    }
  }
  
  const add = () => {
    setMethod({method:'add', symbol:'+'});
    return parseInt(num.num0) + parseInt(num.num1);
  }
  
  const subtract = () => {
    setMethod({method:'subtract', symbol:'-'});
    return num.num0 - num.num1;
  }
  
  const multiply = () => {
    setMethod({method:'multiply', symbol:'x'});
    return num.num0 * num.num1;
  }
  
  const divide = () => {
    setMethod({method:'divide', symbol:'÷'});
    return num.num0 / num.num1;
  }
  
  
  const getResult = () => {
    let value;
    switch(method.method){
      case 'add':
        value = add();
        setNum({num0:value, num1:''});
        setMethod({method:'null', symbol:''});
        return setResult(value);
      case 'subtract':
        value = subtract();
        setNum({num0:value, num1:''});
        setMethod({method:'null', symbol:''});
        return setResult(value);
      case 'multiply':
        value = multiply();
        setNum({num0:value, num1:''});
        setMethod({method:'null', symbol:''});
        return setResult(value);
      case 'divide':
        value = divide();
        setNum({num0:value, num1:''});
        setMethod({method:'null', symbol:''});
        return setResult(value);
        
      default:
        return result
    }
  }
  
  
  return (
    <div className="mx-auto overflow-hidden mt-10 shadow-lg mb-2 bg-blue-900 border rounded-lg lg:w-2/6">
      <div>
        <div className="p-2 text-white text-center text-2xl">Calculator</div>
        <Operation operation={' '+num.num0+method.symbol+num.num1}/>
        <Result result={result}/>
      </div>
      <Divider>
        <Operator sign="CE" onClick={clear}/>
        <Operator sign="(" />
        <Operator sign=")" />
        <Operator sign="÷" onClick={divide}/>
      </Divider>
      <Divider>
        <Numpad number='7' onClick={() => numClicked(7)}/>
        <Numpad number='8' onClick={() => numClicked(8)}/>
        <Numpad number='9' onClick={() => numClicked(9)}/>
        <Operator sign="x" onClick={multiply}/>
      </Divider>
      <Divider>
        <Numpad number='4' onClick={() => numClicked(4)}/>
        <Numpad number='5' onClick={() => numClicked(5)}/>
        <Numpad number='6' onClick={() => numClicked(6)}/>
        <Operator sign="-" onClick={subtract}/>
      </Divider>
      <Divider>
        <Numpad number='1' onClick={() => numClicked(1)}/>
        <Numpad number='2' onClick={() => numClicked(2)}/>
        <Numpad number='3' onClick={() => numClicked(3)}/>
        <Operator sign="+" onClick={add}/>
      </Divider>
      <Divider>
        <Numpad/>
        <Numpad number='0' onClick={() => numClicked(0)}/>
        <Operator sign='.' />
        <Operator sign="=" onClick={() => getResult()}/>
      </Divider>
    </div>
      
  )
}

const Divider = (props) => {
  return <div className="flex items-stretch bg-blue-900 h-24">{props.children}</div>
}

export default App;