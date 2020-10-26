import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Layout from '../components/layout'

const Product = ({pageContext}) => {

    const {itemDetails} = pageContext

    return (
        <Layout>
            <h1>{itemDetails.title}</h1>
            <p>{documentToReactComponents(itemDetails.desc.json)}</p>
        </Layout>
    )
}

export default Product