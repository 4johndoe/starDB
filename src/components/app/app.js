import React, {Component} from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import SwapiService from "../../services/swapi-service";
import ItemDetails from '../item-details';
import ErrorBoundry from "../error-boundry";
import Row from '../row';
import Record from '../item-details';

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
                getImageUrl={getPersonImage} >

                <Record field="gender" label="Gender" />
                <Record field="eyeColor" label="Eye Color" />

            </ItemDetails>
        );

        const starshipDetails = (
            <ItemDetails
                itemId={5}
                getData={getStarship}
                getImageUrl={getStarshipImage} >
            </ItemDetails>
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