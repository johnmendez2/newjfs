import React from 'react';

class Shirt extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      condition: props.condition,
      size: props.size,
      DepopURL: props.DepopURL,
      ID: props.ID,
      image1src: props.image1src,
      image2src: props.image2src,
      league: props.league,
      era: props.era,
      grail: props.grail
    };
  }
}

export default Shirt;
