import React from 'react';
import { Form } from 'react-formio';

class ResourceSong extends React.Component {
    render() {
      return <div> <Form src="https://nofxpdrepxiergy.form.io/songs" onSubmitDone={
        function(submission) {
          console.log("Submitted")
        }
      } /> </div>;
    }
  }

export default ResourceSong