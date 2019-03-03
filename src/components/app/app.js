import React, {Component} from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorButton from '../error-button';
import ErrorIndicator from '../error-indicator';
import PeoplePage from '../people-page';
import PersonDetails from '../person-details';
import ItemList from "../item-list";
import SwapiService from "../../services/swapi-service";

import './app.css';

export default class App extends Component {

    swapiSevice = new SwapiService();

    state = {
        selectedPerson: 3,
        showRandomPlanet: true,
        hasError: false
    };

    toggleRandomPlanet = () => {};

    componentDidCatch(error, errorInfo) {
        this.setState({ hasError: true });
    }

    render() {

        if (this.state.hasError) {
            return <ErrorIndicator/>
        }

        return (
            <div className="stardb-app">
                <Header/>
                <RandomPlanet/>

                <div className="row mb2 button-row">
                     <button
                        className="toggle-planet btn btn-warning btn-lg"
                        onClick={this.toggleRandomPlanet}>
                        Toggle Random Planet
                    </button>
                    <ErrorButton/>
                </div>

                <PeoplePage />

                <div className="row mb2">
                    <div className="col-md-6">
                        <ItemList
                            onItemSelected={this.onPersonSelected}
                            getData={this.swapiSevice.getAllPlanets}
                            renderItem={(item) => item.name} />
                    </div>
                    <div className="col-md-6">
                        <PersonDetails personId={this.state.selectedPerson}/>
                    </div>
                </div>

                <div className="row mb2">
                    <div className="col-md-6">
                        <ItemList
                            onItemSelected={this.onPersonSelected}
                            getData={this.swapiSevice.getAllStarships}
                            renderItem={(item) => item.name} />
                    </div>
                    <div className="col-md-6">
                        <PersonDetails personId={this.state.selectedPerson}/>
                    </div>
                </div>

            </div>
        );
    }
}