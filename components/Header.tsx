import React from 'react'
import Link from 'next/link'

export default function Header() {
    return (
        <header className="header">
            <Link href="/">
                <img src="/static/logo.svg" alt="" className="header__logo" />
            </Link>
            <Link href="/">
                <h1 className="header__title">FishCastle</h1>
            </Link>
        </header>
    )
}
