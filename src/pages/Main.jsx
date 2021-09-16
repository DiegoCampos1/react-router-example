import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      cocktails: null,
      query: '',
      loading: true,
    };
    this.handleInputQuery = this.handleInputQuery.bind(this);
    this.fetchData = this.fetchData.bind(this);
  }

  handleInputQuery({ target: { value, name } }) {
    this.setState({
      [name]: value,
    });
  }

  fetchData() {
    const { query } = this.state;
    axios
      .request(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`,
      )
      .then((response) => this.setState(
        { cocktails: response.data.drinks, loading: false },
      ))
      .catch((error) => console.error(error));
  }

  render() {
    const { query, cocktails, loading } = this.state;
    console.log(cocktails);
    return (
      <div>
        <label htmlFor="inputQuery">
          Digite termo de pesquisa:
          <input
            id="inputQuery"
            type="text"
            onChange={ this.handleInputQuery }
            name="query"
            value={ query }
          />
        </label>
        <button type="button" onClick={ this.fetchData }>
          Pesquisar
        </button>
        {!loading ? (
          cocktails.map((cocktail) => (
            <div key={ cocktail.idDrink }>
              <Link to={ `/details/${cocktail.idDrink}` }>
                <nav>{cocktail.strDrink}</nav>
              </Link>
              <img
                src={ cocktail.strDrinkThumb }
                alt={ cocktail.strDrink }
                width="100px"
              />
            </div>
          ))
        ) : (
          <div>Not found</div>
        )}
      </div>
    );
  }
}
