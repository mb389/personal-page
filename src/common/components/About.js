import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Repos from './about/Repos';
import Loader from './layout/Loader';
import Banner from './layout/Banner';

class About extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchReposIfNeeded();
  }

  render () {
    const { results, isFetching, lastUpdated, error } = this.props;
    return (
      <div>

      	  <div className="about">

      	  	<h3>About Me</h3>
            <div className="profile_pic"></div>
      	  	<p>Born in Moldova and raised in Needham, MA, I've been living in NYC since graduating from <a href="http://www.cornell.edu" target="_blank">Cornell University</a> in 2007. After completing a major in Industrial Relations & Economics, I joined <a href="http://www.jpmorgan.com" target="_blank">J.P. Morgan</a> as an Internal Consulting Analyst, 2 years later transitioning into Market Risk. </p>

            <p>As a Market Risk Manager for the <a href="https://www.jpmorgan.com/global/cib/markets-investor-services" target="_blank">Prime Brokerage business</a>, I was responsible for measuring & monitoring the risk of securities portfolios collateralizing margin loans made to hedge fund clients. This included managing client relationships, working with engineers to build out reporting tools, and introducing new analytical techniques for capturing risk to the firm.  </p>

            <p>After 8 years at J.P. Morgan, I chose to leave to pursue my passion for technology, shortly thereafter enrolling at <a href="http://www.fullstackacademy.com" target="_blank">Fullstack Academy of Code</a>, a 17-week immersive program focusing on JavaScript and the MEAN stack.   </p>

            <p>I'm currently seeking opportunities at small, fast-growing companies where I can take an active role in the development process and continue to build on my software engineering skill-set.   </p>

      	  	<h3>About This Site</h3>

      	  	<p>This site is a single page web app built with React and Redux, and utilizes server-side rendering.</p>

	      </div>

	      <div className="repos">
	      	<h3><a href="https://github.com/mb389?tab=repositories" target="_blank">My Latest GitHub Repos</a></h3>
	        {isFetching && results.length === 0 &&
	          	<Loader />
	        }
	        {!isFetching && error && results.length === 0 &&
	          <h3 className="post-error">There has been an Error</h3>
	        }
	        {!isFetching && !error && results.length === 0 &&
	          <h3>Empty</h3>
	        }
	        {results.length > 0 &&
	          <div style={{ opacity: isFetching ? 0.5 : 1 }}>
	            <Repos results={results} />
	          </div>
	        }
	      </div>
      </div>
    );
  }
}

About.propTypes = {
  results: PropTypes.array.isRequired,
  error: PropTypes.object.isRequired,
  isFetching: PropTypes.bool.isRequired
};

export default About;
