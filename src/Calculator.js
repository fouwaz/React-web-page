import React from 'react'

//Globally defining the used scales
const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
}


// Defining our conversion functions
function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}
  
function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

//Main functin to convert
function tryConvert(temperature, convert){
    const input = parseFloat(temperature);
    if (Number.isNaN(input)){
        return ''
    }
    const output = convert(input) 
    const rounded = Math.round(output*1000)/1000;
    return rounded.toString()
}

//Returns if the water boils or no depending on the temperature
function BoilingVerdict(props){
    if (props.temperature >= 100 && props.scale === 'c' ) {
        return <p> The water is boiling.</p>
    }
    else if(props.temperature >= 212 && props.scale === 'f') {
        return <p>The water is boiling.</p>
    }
    else {
        return <p> The water is not boiling.</p>
    }
}


//Temperature input component
class TemperatureInput extends React.Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e){
        //this.setState({Temperature: e.target.value})
        this.props.onTemperatureChange(e.target.value)    
    }

    render(){
        const temp = this.props.Temperature
        const scale = this.props.scale
        return(
            <fieldset>
                <legend> Enter the temperature in degrees {scaleNames[scale]}</legend>
                <input value={temp} onChange ={this.handleChange} />
            </fieldset>
            
        )
    }
}


//Calculator component that calls the temperature input component
class Calculator extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            temperature: '',
            scale: 'f'
        }
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this) ;
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this) ;
    }
    handleCelsiusChange(temperature){
        this.setState({
            temperature: temperature,
            scale: 'c'
        })
    } 

    handleFahrenheitChange(temperature){
        this.setState({
            temperature: temperature,
            scale: 'f'
        })
    }
    render(){
        const scale = this.state.scale
        const temperature = this.state.temperature
        const celsiusTemperature = scale === 'f' ? tryConvert(temperature, toCelsius): temperature ;
        const fahrenheitTemperature = scale === 'c' ? tryConvert(temperature, toFahrenheit): temperature ;
        return(
        <div>
            <div className='calculator'>
                <TemperatureInput scale = "c" Temperature = {celsiusTemperature} onTemperatureChange = {this.handleCelsiusChange}/>
                <TemperatureInput scale = "f" Temperature = {fahrenheitTemperature} onTemperatureChange = {this.handleFahrenheitChange}/>
            </div>
            <BoilingVerdict temperature ={parseFloat(temperature)} scale = {scale} />
        </div>
        );
    }
}

export default Calculator