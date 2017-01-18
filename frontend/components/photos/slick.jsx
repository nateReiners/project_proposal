var React = require('react');
var Slider = require('react-slick');
import PhotosIndexContainer from './photos_index_container';

class SimpleSlider extends React.Component {

  componentDidMount() {
    this.props.requestAllPhotos();
  }

  render () {
    debugger
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true
    };
    return (
      <Slider {...settings}>
        <PhotosIndexContainer photos={this.props.photos || []}/>
      </Slider>
    );
  }
};


export default SimpleSlider;
