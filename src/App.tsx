import './App.css'

function App() {

  const numbers: { name: string }[][] = [
    [{ name: "(" }, { name: ")" }, { name: "%" }, { name: "AC" }, { name: "7" }],
    [{ name: "8" }, { name: "9" }, { name: "÷" }, { name: "4" }, { name: "5" }],
    [{ name: "6" }, { name: "×" }, { name: "1" }, { name: "2" }, { name: "3" }],
    [{ name: "-" }, { name: "0" }, { name: "." }, { name: "=" }, { name: "+" }]
  ]


  const handleButtonClick = (value: string) => {
    console.log("first", value)
  };
  return (
    <>
      <div className='container mx-auto '>
        <div className='border-red-800 border-2 max-w-md mx-auto'>
          <div className='min-h-12 border-2 border-green-950'>
            <h1>screen</h1>
          </div>
          <div>
            <div className='w-1/2'>
              {numbers.map((row, rowIndex) => (
                <div className="" key={rowIndex}>
                  {row.map((numbe, index) => (
                    <button key={index} className='m-1 bg-emerald-500 rounded  py-2 min-w-8 max-w-8 max-h-7 leading-3 text-xs ' onClick={() => handleButtonClick(numbe.name)}>
                      {numbe.name}
                    </button>
                  ))}
                </div>
              ))}
            </div>
            <div className='w-1/2'>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
