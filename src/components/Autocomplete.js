import React from "react";
import Autosuggest from "react-autosuggest";

const prof = [
    {
        name: "Парикмахер",
        id: 1
    }, {
        name: "Повар",
        year: 2
    }, {
        name: "Пилот",
        year: 3
    },{
        name: "Проводник",
        year: 4
    },
];

const getSuggestions = value => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0 ? [] : prof.filter(lang =>
        lang.name.toLowerCase().slice(0, inputLength) === inputValue
    );
};

const getSuggestionValue = suggestion => suggestion.name;

const renderSuggestion = suggestion => (
    <div>{suggestion.name}</div>
);

class Autocomplete extends React.Component{

    constructor() {
        super();
        this.state = {
            value: "",
            suggestions: []
        };
    }

    onChange = (event, { newValue }) => {
        this.setState({value: newValue});
    };

    onSuggestionsFetchRequested = ({ value }) => {
        this.setState({
            suggestions: getSuggestions(value)
        });
    };

    onSuggestionsClearRequested = () => {
        this.setState({
            suggestions: []
        });
    };

    render(){
        const { value, suggestions } = this.state;

        const inputProps = {
            placeholder: "Начните вводить профессии 'П'",
            value,
            className:"form-control input-lg",
            onChange: this.onChange
        };

        return (
            <Autosuggest
                suggestions={suggestions}
                onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                getSuggestionValue={getSuggestionValue}
                renderSuggestion={renderSuggestion}
                inputProps={inputProps}/>
        )
    }
}

export default Autocomplete;