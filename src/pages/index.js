//single page application that enters the Homepage and includes two main components, the skeleton Layout component, which contains the Header component and child components passed in from the Homepage, as well as a Video component, which hosts the code for the youtube link

import * as React from "react"
import PropTypes from "prop-types"

import Layout from '../components/layout';
import Video from '../components/Video'

const Homepage = ({ }) => (
    <Layout>
        <Video />
    </Layout>

)


export default Homepage;