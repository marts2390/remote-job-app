import React, { Component } from 'react';
import JobCard from '../components/JobCard';
import Filters from './Filters';

class RemotejobApp extends Component {
  state = {
    payload: [],
    filters: [],
    filterSelect: '',
    tags: [],
    noJobs: undefined
  };

  componentDidMount() {
    fetch('https://remoteok.io/api')
      .then(res => res.json())
      .then((data) => {
        let array = data.filter(item => item !== data[0]);
        let mainTags = ['JavaScript', 'PHP', 'Wordpress', 'Front End', 'Back End', 'snore'];
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
        });
      })
      .catch(console.log)
  };

  getOccurance = ((array, value) => {
    let count = 0;
    array.forEach((v) => (v === value && count++));
    return count;
  });
  

  filterList = ((e) => {

    const filter = e.target.value.toLowerCase();
    let list = this.state.initialPayload;
    let newList = []

    console.log(e.target.value);

    list.forEach((item) => {
      if (item.tags.includes(filter)) {
        newList.push(item);
      }
    });

    if (newList.length > 0) {
      this.setState({ payload: newList, noJobs: false });
    } else {
      this.setState({ noJobs: true });
    }

  });

  render() {
    return (
      <div className='container home'>
        <center><h1 className="home_title">Remote Job Board</h1></center>
        <Filters filterList={this.filterList} filters={this.state.filters} tags={this.state.tags} />
        <JobCard noJobs={this.state.noJobs} payload={this.state.payload} filterList={this.filterList}/>
      </div>
    )
  }
}



export default RemotejobApp;