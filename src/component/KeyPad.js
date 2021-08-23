import React, {Component} from 'react';

class KeyPad extends Component {

    render() {
        return(
            <div className='ui container'>
                <div className='ui field'>

                
                <div className='ui segment'>
                
                
                <button name="1" className='ui grey button' onClick={e => this.props.onClick(e.target.name)}>1</button>
                <button name="2" className='ui grey button' onClick={e => this.props.onClick(e.target.name)}>2</button>
                <button name="3" className='ui grey button' onClick={e => this.props.onClick(e.target.name)}>3</button>
                <button name="+" className='ui olive button' onClick={e => this.props.onClick(e.target.name)}>+</button><br/>


                <button name="4" className='ui grey button' onClick={e => this.props.onClick(e.target.name)}>4</button>
                <button name="5" className='ui grey button' onClick={e => this.props.onClick(e.target.name)}>5</button>
                <button name="6" className='ui grey button' onClick={e => this.props.onClick(e.target.name)}>6</button>
                <button name="-" className='ui big olive button' onClick={e => this.props.onClick(e.target.name)}>-</button><br/>


                <button name="7" className='ui grey button' onClick={e => this.props.onClick(e.target.name)}>7</button>
                <button name="8" className='ui grey button' onClick={e => this.props.onClick(e.target.name)}>8</button>
                <button name="9" className='ui grey button' onClick={e => this.props.onClick(e.target.name)}>9</button>

                 
                <button name="*" className='ui olive button' onClick={e => this.props.onClick(e.target.name)}>x</button>
                <button name="." className='ui olive button' onClick={e => this.props.onClick(e.target.name)}>.</button>
                <button name="0" className='ui grey button' onClick={e => this.props.onClick(e.target.name)}>0</button>
                <button name="=" className='ui olive button' onClick={e => this.props.onClick(e.target.name)}>=</button>
                <button name="/" className='ui olive button' onClick={e => this.props.onClick(e.target.name)}>/</button><br/>


                </div>
            </div>
            </div>
            
        );
    }
}

export default KeyPad;