import React from 'react'
import Layout from '../components/Layout'

export default function contact() {
    return (
        <Layout title="Contact Us">
            <div className="p-8 mx-auto text-center flex flex-col justify-center items-center">
                <h1 className="text-center text-3xl tracking-tight font-extrabold mb-2 mx-auto">Contact Us!</h1>
                <p className="text-6xl"><strong>+65 1234 5678</strong></p>
                <p className="text-6xl"><strong>thisisa@fakeemail.com</strong></p>
            </div>
        </Layout>
    )
}
