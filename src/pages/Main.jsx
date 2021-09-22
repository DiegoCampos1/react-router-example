import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      cocktails: null,
      query: '',
      loading: false,
      notFound: false,
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
    this.setState({ loading: true,
      cocktails: null }, () => (
      fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`,
      )
        .then((response) => response.json())
        .then((result) => {
          if (!result.drinks) {
            return this.setState({
              notFound: true,
              loading: false,
            });
          }
          this.setState(
            { cocktails: result.drinks, loading: false, notFound: false },
          );
        })
        .catch((error) => console.error(error))));
  }

  render() {
    const { query, cocktails, loading, notFound } = this.state;
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
        {loading && <div>Loading...</div>}
        {cocktails
          && cocktails.map((cocktail) => (
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
          ))}
        {!loading && notFound && <div>Not Found</div>}
      </div>
    );
  }
}
