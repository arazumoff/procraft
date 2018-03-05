import React from "react";
import InputMask from "react-input-mask";

const masks = {
    "gb": "+44 99999 999 999",
    "ru": "+7 999 999 99 99",
    "ge": "+49 99 999 99",
}

class MaskedInput extends React.Component{

    constructor(){
        super();
        this.state = {
            mask: masks["ru"],
            country: "ru"
        }
    }

    setCountry=(country)=>{
        console.log({
            country,
            mask: masks[country]
        });
        this.textInput.value="";
        this.setState({
            country,
            mask: masks[country]
        })
    };

    render(){
        const vars = Object.keys(masks).map(key=><li key={key}><a onClick={()=>this.setCountry(`${key}`)}>
            <img width="24" src={`https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.1.0/flags/1x1/${key}.svg`}/></a></li>);
        console.log(this.state.mask)
        return(
            <div className="input-group">
                <div className="input-group-btn">
                    <button type="button" className="country btn btn-default dropdown-toggle btn-lg"
                            data-toggle="dropdown" aria-haspopup="true"
                            aria-expanded="false">
                        <img width="24" src={`https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.1.0/flags/1x1/${this.state.country}.svg`}/> <span className="caret"></span>
                    </button>
                    <ul className="dropdown-menu">{vars}</ul>
                </div>
                <InputMask
                    ref={(input) => { this.textInput = input; }}
                    mask={this.state.mask}
                    alwaysShowMask={true}
                    maskChar={null}
                    className="form-control input-lg"
                    id="phone"/>
            </div>
        )
    }
}

export default MaskedInput;