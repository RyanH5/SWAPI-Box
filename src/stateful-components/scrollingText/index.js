import React, { Component } from 'react';
import './styles.css';
import laserfight from '../../images/laserfight.mp3';
import PropTypes from 'prop-types';

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

  displayCrawl = () => {
    const { title, year, crawl } = this.state;
    if (this.props.currentCategory === '' ) {
      return (
        <div className="crawl">
          <h1>{title}</h1>
          <p>{crawl}</p>
          <p>{year}</p>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="star-wars">
        {this.displayCrawl()}
        <audio src={laserfight} autoPlay></audio>
      </div>
    );
  }
}

ScrollingText.propTypes = {
  currentCategory: PropTypes.string
};

export default ScrollingText;

