/*
 Video Component passes in a simple iframe since the easiest method of embedding video in a Gatsby site is to source it from sites like YouTube, Vimeo, or Twitch. Since the parent Layout component is pretty responsive, I didn't see a need to use a plugin like gatsby-remark-embed-video or some other video embedding plugins
*/

import * as React from "react"
import PropTypes from "prop-types"

const Video = () => (
    <div>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/kr4g2h5YmnU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>

)

export default Video