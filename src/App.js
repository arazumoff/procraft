import React, { Component } from "react";
import "./App.css";
import Autocomplete from "./components/Autocomplete";
import MaskedInput from "./components/MaskedInput";

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="row">
                    <div className="col-md-3 text-center" id="intro">
                        <strong>Зарегистрируйтесь</strong> и начните продавать<br/>услуги услуги через интернет сегодня
                    </div>
                </div>
                <div className="row">
                    <div id="form" className="col-md-3">
                        <form>
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label htmlFor="first_name">Имя</label>
                                        <input type="text" className="form-control input-lg" id="first_name" placeholder="Введите имя"/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="second_name">Фамилия</label>
                                        <input type="text" className="form-control input-lg" id="second_name" placeholder="Введите фамилию"/>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Профессия</label>
                                        <Autocomplete/>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <label htmlFor="phone">Телефон</label>
                                        <MaskedInput/>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <button className="btn btn-primary btn-lg">Зарегистрироваться</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
