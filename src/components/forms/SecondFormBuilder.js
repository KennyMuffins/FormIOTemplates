import React from 'react'
import { FormBuilder } from 'react-formio'

import '../../styles.css';

function SecondFormBuilder () {
    return (
        <div>
            <FormBuilder
                form={{ display: "form" }}
                onChange={schema => console.log(JSON.stringify(schema))}
            />
        </div>
    )
}

export default SecondFormBuilder