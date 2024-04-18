import React from 'react'

import Header from '../../../Shared/Header'
import Footer from '../../../Shared/Footer'
import SummerGetAwayMapPackagesBanner from './SummerGetAwayMapPackagesBanner'
import SummerGetAwayMapContentWordpress from './SummerGetAwayMapContentWordpress'

const index = () => {
    return (
        <>
            <Header />

            <SummerGetAwayMapPackagesBanner />
            <SummerGetAwayMapContentWordpress />

            <Footer />
        </>
    )
}

export default index