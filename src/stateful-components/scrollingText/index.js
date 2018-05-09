import React, { Component } from 'react';
import './styles.css';

class ScrollingText extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      year: '',
      crawl: ''
    };
  }

  async componentDidMount() {
    const randomNumber =  Math.floor(Math.random() * 6) + 1;
    const url = `https://swapi.co/api/films/${randomNumber}`;
    const response = await fetch(url);
    const info = await response.json();
    const title = info.title;
    const year = info.release_date.split('-', 1);
    const crawl = info.opening_crawl;

    this.setState({title, year, crawl});
  }

  render() {
    const { title, year, crawl } = this.state;
    return (
      <div>
        <p>{title}</p>
        <p>{year}</p>
        <p>{crawl}</p>
      </div>
    );
  }
}

export default ScrollingText;

