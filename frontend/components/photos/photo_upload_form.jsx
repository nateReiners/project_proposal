import React from 'react';
import UploadButtonContainer from '../main_nav/upload_button_container';

class PhotoUploadForm extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      image_url: '',
      user_id: this.props.currentUser.id
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUpload(e) {
    e.preventDefault();
    cloudinary.openUploadWidget(window.cloudinary_options, (error, images) => {
      if(!error){
        const img = images[0].url;
        this.setState({image_url: img});
      }
    });
  }

  update(prop) {
    return e => this.setState({[prop]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createPhoto(this.state).then(() => this.props.closeModal());
  }

  render() {
    return(
      <form className='upload-form' onSubmit={this.handleSubmit}>

        <input
          className='form-div'
          type='text'
          value={this.state.title}
          placeholder="title"
          onChange={this.update('title')} />

        <input
          type="text"
          value={this.state.description}
          placeholder="description"
          onChange={this.update('description')}/>
        {this.state.image_url === "" ? <UploadButtonContainer /> :
                                   <img className='image-preview'src={this.state.image_url}/>}
        <button>Submit Photo</button>
      </form>
    );
  }


}

export default PhotoUploadForm;
