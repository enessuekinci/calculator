import React, {Component} from 'react';
import Result from './component/Result';
import KeyPad from './component/KeyPad';
import './App.css';

class App extends Component {
    
    constructor(){
        super();

        this.state = {
            result: ""
        }
    }

    
    onClick = button => {
        if(button === "="){
            this.calculate()
        }
        else if (button === "AC") {
            console.log(0); // you should to look this line.
        }
        else {
            this.setState({
                result: this.state.result+button
            })
        };
    }
    
    calculate = () => {
        var checkResult = ''
        if(this.state.result.includes('--')){
            checkResult = this.state.result.replace('--','+')
        }

        else {
            checkResult = this.state.result
        }

        try {
            this.setState({
                result: (eval(checkResult) || "" ) + ""
            })
        } catch (e) {
            this.setState({
                result: "error"
            })

        }
    };
    
    
    
    render() {
        return (
            <div>
                <div className="calculator-body">
                    <h1>Simple Calculator</h1>
                    <Result result={this.state.result}/>
                    <KeyPad onClick={this.onClick}/>
                </div>
            </div>
        )
    }
}
    


export default App;