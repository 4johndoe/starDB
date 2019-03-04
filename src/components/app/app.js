import React, {Component} from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorButton from '../error-button';
import ErrorIndicator from '../error-indicator';
import PeoplePage from '../people-page';
import PersonDetails from '../item-details';
import ItemList from "../item-list";
import SwapiService from "../../services/swapi-service";
import ItemDetails from '../item-details';
import Row from '../row';

import './app.css';
import ErrorBoundry from "../error-boundry";

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

        const planet = this.state.showRandomPlanet ?
            <RandomPlanet/> :
            null;

        const { getPerson,
                getStarship,
                getPersonImage,
                getStarshipImage } = this.swapiSevice;

        const personDetails = (
            <ItemDetails
                itemId={11}
                getData={getPerson}
                getImageUrl={getPersonImage} />
        );

        const starshipDetails = (
            <ItemDetails
                itemId={5}
                getData={getStarship}
                getImageUrl={getStarshipImage} />
        );

        return (
            <ErrorBoundry>
                <div className="stardb-app">
                    <Header />

                    <Row
                        left={personDetails}
                        right={starshipDetails} />
                </div>
            </ErrorBoundry>
        );
    }
}