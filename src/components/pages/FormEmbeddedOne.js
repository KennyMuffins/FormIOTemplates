import React from 'react';
import { Form } from 'react-formio';

class FormEmbeddedOne extends React.Component {
    render() {
      return <div> <Form src="https://nofxpdrepxiergy.form.io/demographics" onSubmitDone={
        function(submission) {
          console.log("Submitted")
        }
      } /> </div>;
    }
  }

export default FormEmbeddedOne