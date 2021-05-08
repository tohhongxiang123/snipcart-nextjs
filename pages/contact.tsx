import React from 'react'
import Layout from '../components/Layout'

export default function contact() {
    return (
        <Layout title="Contact Us">
            <div className="p-8 mx-auto text-center flex flex-col justify-center items-center">
                <h1 className="text-center text-5xl tracking-tight font-bold mb-2 mx-auto">Contact Us!</h1>
                <p className="text-xl font-semibold text-gray-700">1 Kaki Bukit Road 1, #03-34 Enterprise One, Singapore 415934</p>
                <p className="text-xl font-semibold text-gray-700">Tel: +65 6348 7555</p>
                <p className="text-xl font-semibold text-gray-700">Fax: +65 6348 7666</p>
                <p className="text-xl font-semibold text-gray-700"><a className="hover:underline" href="mailto:sales@singaporefurniture.com.sg">sales@singaporefurniture.com.sg</a></p>
            </div>
        </Layout>
    )
}
