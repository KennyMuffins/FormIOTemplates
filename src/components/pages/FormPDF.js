import React from "react";
import { Form } from "react-formio";
import FormioExport from "formio-export";

import "../../styles.css";

const printPdf = (component, submission, options) => {
  const exporter = new FormioExport(component, submission, options);

  let config = {
    download: true,
    filename: "example.pdf",
    html2canvas: {
      logging: true,
      scale: 5
    },
    jsPDF: {
      orientation: "p", // PDF orientation - potrait / landscape
      unit: "mm", // measurement units used
      format: "a4" // paper size - can also accept custom (i.e. A4 - [210, 297])
    }
  };

  exporter.toPdf(config).then(pdf => {
    console.log("pdf ready", pdf);
  });
};

function FormPDF() {
  let component = {
    type: "form",
    title: "Example",
    display: "form",
    components: [
      {
        type: "panel",
        legend: "Contact Information",
        input: false,
        components: [
          {
            type: "textfield",
            key: "name",
            label: "Name",
            input: true
          },
          {
            type: "number",
            key: "age",
            label: "Age",
            input: true
          },
          {
            type: "select",
            label: "Gender",
            input: true,
            key: "gender",
            dataSrc: "values",
            data: {
              values: [
                {
                  label: "Female",
                  value: "f"
                },
                {
                  label: "Male",
                  value: "m"
                },
                {
                  label: "Other",
                  value: "o"
                }
              ]
            },
            template: "<span>{{ item.label }}</span>"
          },
          {
            type: "columns",
            columns: [
              {
                components: [
                  {
                    type: "email",
                    label: "Email",
                    input: true,
                    key: "email"
                  }
                ]
              },
              {
                components: [
                  {
                    type: "phoneNumber",
                    label: "Phone",
                    input: true,
                    key: "phone"
                  }
                ]
              }
            ]
          },
          {
            type: "survey",
            key: "feedback",
            label: "Feedback",
            input: true,
            questions: [
              {
                value: "question1",
                label: "How are you feeling today?"
              },
              {
                value: "question2",
                label: "How would you rate the service provided so far?"
              }
            ],
            values: [
              {
                value: "1",
                label: "Terrible"
              },
              {
                value: "2",
                label: "Bad"
              },
              {
                value: "3",
                label: "Regular"
              },
              {
                value: "4",
                label: "Good"
              },
              {
                value: "5",
                label: "Excellent"
              }
            ]
          }
        ]
      }
    ]
  };
  let submission = {
    _id: "pippo id",
    owner: "pippo onwer",
    modified: "oggi",
    data: {
      name: "John Doe",
      gender: "m",
      email: "john.doe@example.org",
      phone: "(555) 123-4567",
      feedback: {
        question1: (Math.random() * (5 - 1)).toString(),
        question2: (Math.random() * (5 - 1)).toString()
      }
    }
  };
  let options = {
    formio: {
      ignoreLayout: false,
      emptyValue: "-"
    }
  };
  return (
    <div className="App">
      <br />
      <button
        onClick={() => {
          printPdf(component, submission, options);
        }}
      >
        Download Pdf
      </button>
      <br />
      <br />
      <Form
        form={component}
        submission={submission}
        options={options}
        onChange={schema => console.log(schema)}
      />
    </div>
  );
}

export default FormPDF