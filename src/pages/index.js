import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
    return (
        <Layout pageTitle="Home Page">
            <p>
                A digital compendium of bicycles featured in video games.
            </p>
            <StaticImage
                alt="Fallout 4: An early 20th century women's bicycle with full chainguard and
                butchers front rack."
                src="../images/fallout-4-videogame-bicycle.webp"
            />
        </Layout>
    )
}

export default IndexPage