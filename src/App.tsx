import { useState } from 'react';
import './App.css'

function App() {

  const buttons: { name: string }[][] = [
    [{ name: '7' }, { name: '8' }, { name: '9' }, { name: '/' }],
    [{ name: '4' }, { name: '5' }, { name: '6' }, { name: '*' }],
    [{ name: '1' }, { name: '2' }, { name: '3' }, { name: '-' }],
    [{ name: '0' }, { name: '.' }, { name: '=' }, { name: '+' }],
    [{ name: '(' }, { name: ')' }, { name: 'C' }],
    [{ name: 'sin' }, { name: 'cos' }, { name: 'tan' }, { name: 'log' }, { name: 'sqrt' }]


  ];
  const [input, setInput] = useState<string>('');
  const [result, setResult] = useState<string | number>('');


  // Function to handle button click
  const handleButtonClick = (value: string) => {
    if (value === 'C') {
      setInput('');
      setResult('');
    } else if (value === '=') {
      calculateResult();
    } else {
      setInput((prevInput) => prevInput + value);
    }
  };


  const calculateResult = (): void => {
    try {
      let evalInput = input;
      evalInput = evalInput
        .replace(/sin/g, 'Math.sin')
        .replace(/cos/g, 'Math.cos')
        .replace(/tan/g, 'Math.tan')
        .replace(/log/g, 'Math.log10')
        .replace(/sqrt/g, 'Math.sqrt');


      // Automatically add multiplication sign where necessary
      evalInput = evalInput.replace(/(\d)(?=\()/g, '$1*');

      // Ensure proper parsing of parentheses 2sin(30) becomes 2*Math.sin(30)
      evalInput = evalInput.replace(/(\d+)(?=\s*(sin|cos|tan|log|sqrt)\()/g, '$1*'); //


      // Evaluate the input and update result
      var evalResult = eval(evalInput);
      setResult(evalResult);
    } catch (error) {
      setResult('Error');
    }
  };
  return (
    <>
      <div className='container mx-auto min-h-screen flex justify-center items-center'>
        <div className='max-w-[17rem] shadow-[11px_20px_14px_2px_#CAF4FF] rounded-md'>
          <div className='min-h-12 '>
            <div className="bg-[#A0DEFF] p-4 flex flex-col gap-12 rounded-t-lg">
              <div className="text-[#fcf9f9] text-2xl font-bold min-h-10 break-all">{result}</div>
              <div className="text-[#fcf9f9] text-right text-xl break-all">{input || '0'}</div>
            </div>
          </div>
          <div className='flex p-4'>
            <div className=''>
              {buttons.map((row, rowIndex) => (
                <div className="" key={rowIndex}>
                  {row.map((numbe, index) => (
                    <button key={index} className="m-1 bg-emerald-500 rounded py-2 min-w-[50px] max-w-[50px] max-h-[50px] text-white" onClick={() => handleButtonClick(numbe.name)}>
                      {numbe.name}
                    </button>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}


export default App
