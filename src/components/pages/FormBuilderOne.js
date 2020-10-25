import React, { Fragment } from 'react'
import FirstFormBuilder from '../forms/FirstFormBuilder'
import SecondFormBuilder from '../forms/SecondFormBuilder'

function FormBuilderOne() {
    return (
        <Fragment>
            <SecondFormBuilder />
        </Fragment>
    )
}

export default FormBuilderOne