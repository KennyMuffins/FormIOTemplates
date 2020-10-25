import React from 'react'
import { FormBuilder } from 'react-formio'

import '../../styles.css';

function FirstFormBuilder () {
    return (
        <div>
            <FormBuilder
                options={{
                builder: {
                    layout: false,
                    premium: false,
                    basic: {
                    default: true,
                    components: {
                        password: false,
                        radio: false,
                        button: false
                    }
                    },
                    advanced: {
                    default: true,
                    components: {
                        signature: false
                    }
                    }
                }
                }}
                form={{ display: "form" }}
                onChange={schema => console.log(schema)}
            />
        </div>
    )
}

export default FirstFormBuilder