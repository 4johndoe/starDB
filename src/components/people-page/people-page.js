import React, { Component } from 'react';
import './people-page.css';
import ItemList from "../item-list";
import ItemDetails from "../item-details";
import ErrorIndicator from "../error-indicator";
import SwapiService from "../../services/swapi-service";
import Row from '../row';
import ErrorBoundry from '../error-boundry';

export default class PeoplePage extends Component {

    swapiService = new SwapiService();

    state = {
        selectedPerson: 11
    };

    onPersonSelected = (selectedPerson) => {
        this.setState({ selectedPerson });
    };

    render() {

        if (this.state.hasError) {
            return <ErrorIndicator/>;
        }

        const itemList = (
            <ItemList
                onItemSelected={this.onPersonSelected}
                getData={this.swapiService.getAllPeople}
                renderItem = {({name, gender, birthYear}) => (`${name} (${gender}, ${birthYear})`)} >

            </ItemList>
        );

        const personDetails = (
            <ErrorBoundry>
                <ItemDetails personId={this.state.selectedPerson}/>
            </ErrorBoundry>
        );

      return (
          <Row left={itemList} right={personDetails} />
      );
    };
}