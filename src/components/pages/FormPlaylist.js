import React from 'react';
import { Form } from 'react-formio';

class FormPlaylist extends React.Component {
    render() {
      return <div> <Form src="https://nofxpdrepxiergy.form.io/playlist" onSubmitDone={
        function(submission) {
          console.log("Submitted")
        }
      } /> </div>;
    }
  }

export default FormPlaylist