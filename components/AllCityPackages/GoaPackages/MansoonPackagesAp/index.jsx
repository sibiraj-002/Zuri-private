import React from 'react'

import Header from '../../../Shared/Header'
import Footer from '../../../Shared/Footer'
import MonsoonPackageManager from './MansoonPackagesBanner'
import MonsoonPackageWordpress from './MonsoonpackageWordpress'

const index = () => {
    return (
        <>
            <Header />

            <MonsoonPackageManager />
            <MonsoonPackageWordpress />
            <Footer />
        </>
    )
}

export default index