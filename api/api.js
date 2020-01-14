import React from 'react';

const Payload = () => {
    fetch('https://remoteok.io/api')
        .then(res => res.json())
        .then((data) => {
            return data
            // let array = data.filter(item => item !== data[0]);
            // let mainTags = ['JavaScript', 'PHP', 'Wordpress', 'Front End', 'Backend', 'All Jobs'];
            // let tags = []

            // array.forEach((tag) => {
            //     tags.push(tag.tags);
            // });

            // const allTags = [].concat.apply([], tags);
            // tags = [...new Set(allTags)];

            // this.setState({
            //     tags: tags,
            //     initialPayload: array,
            //     payload: array,
            //     filters: mainTags,
            // });
        })
        .catch(console.log)
}

export default Payload;


