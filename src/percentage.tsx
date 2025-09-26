import { useState } from 'react'
import './assets/css/percentage.css'
function Percentage() {

    const [percentage,setPercentage] = useState<string>('')
    const [value,setValue] = useState<string>('')
    const [result, setResult] = useState<string>('')
    const [click,setClick] = useState<boolean>(false)

    const calculate = (e: { preventDefault: () => void }) => {
        e.preventDefault()
        setClick(false)

        setTimeout(() => {
            setClick(true)
        }, 10);

        if(percentage !== '' && value !== '') {
            
            const res = ((Number(percentage) * Number(value))/ 100)
            setResult(res.toString())

        }


}
    return(

        <section className='container'>

                <div className='containerItems'>

                        <div><h1 className='titleStyle'>Percentage Calculator</h1></div>
                        
                        <section>

                                <div className='containerInputs'>
                                    <input type="text" className={`${click ? 'animation' : ''}`} 
                                    value={percentage} name="percentage" id="percentage" onChange={(e) => setPercentage(e.target.value)} />
                                    <span>% of</span>
                                    
                                    <input type="text" className={`${click ? 'animation' : ''}`}
                                     value={value} name="value" id="value" onChange={(e) => setValue(e.target.value)} />
                                    <span>is</span>
                                    
                                    <input className={`${click ? 'animation' : ''} resultStyle`}
                                    type="text" value={result} name="value" id="value" onChange={(e) => setResult(e.target.value)} />

                                    </div>

                                    <div className='containerButton'><button onClick={calculate} className='buttonStyle'>Calculate</button></div>

                                

                        </section>
                        
                </div>

        </section>

    )

}

export default Percentage