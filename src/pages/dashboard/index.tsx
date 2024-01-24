import withAuth from '@/hoc/withAuth'
import Overview from '@/modules/Overview'
import React from 'react'

function index() {
    return (
        <Overview />
    )
}

export default withAuth(index)
