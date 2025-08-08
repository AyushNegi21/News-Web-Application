import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';

export class News extends Component {
  // Default props
  static defaultProps = {
    country: 'us',
    pageSize: 9,
    category: 'general'
  };

  // PropTypes for type checking
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  };

  // Utility function to capitalize first letter
  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  constructor(props) {
    super(props);
    this.state = {
      article: [],
      loading: false,
      page: 1,
      totalResults: 0
    };
    // ✅ Fixed: Correctly call the method from the same class
    document.title = `News World - ${this.capitalizeFirstLetter(this.props.category)}`;
  }

  componentDidMount() {
    this.fetchNews();
  }

  // Common method to fetch news
  fetchNews = async () => {
    this.setState({ loading: true });

    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=5913d14edf89460bbb583b30416fea38&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    
    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState({
      article: parsedData.articles || [],
      totalResults: parsedData.totalResults || 0,
      loading: false
    });
  };

  // Go to next page
  handleNextClick = () => {
    if (this.state.page + 1 <= Math.ceil(this.state.totalResults / this.props.pageSize)) {
      this.setState(
        (prevState) => ({ page: prevState.page + 1 }),
        this.fetchNews
      );
    }
  };

  // Go to previous page
  handlePrevClick = () => {
    if (this.state.page > 1) {
      this.setState(
        (prevState) => ({ page: prevState.page - 1 }),
        this.fetchNews
      );
    }
  };

  render() {
    return (
      <div className='container my-3'>
        <h2 className='text-center' style={{ margin: '40px 0' }}>
          News World - Top {this.capitalizeFirstLetter(this.props.category)} Headlines
        </h2>

        {this.state.loading && <Spinner />}

        <div className="row">
          {!this.state.loading &&
            this.state.article.map((element) => (
              <div className='col-md-4' key={element.url}>
                <NewsItem
                  title={element.title ? element.title.slice(0, 45) : ""}
                  description={element.description ? element.description.slice(0, 88) : ""}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                  author={element.author ? element.author : "Unknown"}
                  date={new Date(element.publishedAt).toGMTString()}
                />
              </div>
            ))}
        </div>

        <div className="container d-flex justify-content-between my-4">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePrevClick}
          >
            &larr; Previous
          </button>

          <button
            disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)}
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
