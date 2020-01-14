import React from 'react';
import Fade from 'react-reveal/Fade';
import matchSorter from 'match-sorter';
import { Container, Grid } from '@material-ui/core';

import JobCard from '../components/JobCard';
import AllFilters from './AllFilters';
import TextFilter from './TextFilter';
import BannerImage from '../../public/images/remote-banner.jpg';

class RemotejobApp extends React.Component {

  state = {
    payload: [],
    filters: [],
    filterSelect: '',
    tags: [],
    noJobs: undefined,
    loaded: true,
    limit: 20,
    selectedFilters: []
  }

  componentDidMount() {
    fetch('https://remoteok.io/api')
      .then(res => res.json())
      .then((data) => {
        let array = data.filter(item => item !== data[0]);
        let mainTags = ['JavaScript', 'PHP', 'Wordpress', 'Front End', 'Backend', 'All Jobs'];
        let tags = []

        array.forEach((tag) => {
          tags.push(tag.tags);
        });

        const allTags = [].concat.apply([], tags);
        tags = [...new Set(allTags)];

        this.setState({
          tags: tags,
          initialPayload: array,
          payload: array,
          filters: mainTags,
          loaded: true
        });
      })
      .catch(console.log)
  };

  selectedFilters = (filter) => {
    this.setState({ selectedFilters: this.state.selectedFilters.concat(filter) })
  }

  filterList = (filter, text) => {
    const list = this.state.initialPayload;
    const newList = [];

    if (filter || text != '') {
      this.selectedFilters(filter);
      list.forEach((item) => {
        item.tags.forEach((tag) => {
          if (tag.toLowerCase().indexOf(filter) != -1) {
            newList.push(item);
          }
        });
      });
      this.setState({ payload: newList, noJobs: false })
    };

    newList.length <= 0 ? this.setState({ payload: list, noJobs: true }) : [];
  };


  render() {
    return (
      <div>
        <div className='header' style={{ backgroundImage: `url(${BannerImage})` }}>
          <Container maxWidth='md'>
            <Fade delay={1000}>
              <h1 className="home_title">Remote Job Board</h1>
              <h2 className="sub_title">Work From Anywhere In The World</h2>
            </Fade>
          </Container>
        </div>
        <Container maxWidth='lg' spacing={4} className='main_container'>
          <Fade wait={1500} delay={1000}>
            <Grid container spacing={3}>
              <Grid item md={4} lg={3} style={{ width: '100%' }}>
                <AllFilters tags={this.state.tags} filterList={this.filterList} />
              </Grid>
              <Grid item md={8} lg={9}>
                <TextFilter filterList={this.filterList} />
                {this.state.noJobs ? <p className='errormessage'>There Are No Jobs That Match :(</p> : ''}
                {this.state.loaded ?
                  <JobCard limit={this.state.limit}
                    isLoaded={this.state.loaded}
                    noJobs={this.state.noJobs}
                    payload={this.state.payload}
                    filterList={this.filterList} />
                  :
                  <center>
                    <iframe src="https://giphy.com/embed/IwSG1QKOwDjQk" width="480" height="480" frameBorder="0" className="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/wait-IwSG1QKOwDjQk">via GIPHY</a></p>
                  </center>
                }

              </Grid>
            </Grid>
          </Fade>
        </Container>
      </div>
    );
  }
}

export default RemotejobApp;