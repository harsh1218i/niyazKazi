
import Head from "next/head";
import { useState } from "react";
export default function Header() {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const headerOptions = [
        {
            heading: 'Industries',
            dropdownOptions: [
                { label: 'Oil & Gas', description: '', url: '' },
                { label: 'Marine/Shipping Sector', description: '', url: '' },
                { label: 'BFSI', description: '', url: '' },
                { label: 'Construction & Companies', description: '', url: '' },
            ]
        },
        { heading: 'Gallery', url: '', },
        { heading: 'Achievements', url: '', },
        { heading: 'About', url: '', },
        { heading: 'Pricing', url: '', },
    ]
    const openDropDown = () => {
        setDropdownOpen(!dropdownOpen)
    }

    return (
        <>
            <Head>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
            </Head>
            <header className='header'>
                <div>
                    <h1 className='header-logo'>Logo</h1>
                </div>
                <div>
                    <ul>
                        {headerOptions.map((item, i) => {
                            return (
                                <>
                                <li key={i}>
                                    <button onClick={() => !! item.dropdownOptions ? openDropDown() : null}>
                                        <a href={item.url || '#'}>
                                            {item.heading}
                                            {!!item.dropdownOptions ? <span class="material-symbols-outlined">keyboard_arrow_down</span> : <></>}
                                        </a>
                                    {!!item.dropdownOptions && dropdownOpen && (
                                        <ul className="dropdownMenu">
                                            {item.dropdownOptions.map((option, j) => {
                                                return (
                                                    <li key={j}>
                                                        <a href={option.url || '#'}>{option.label}</a>
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                    )}
                                    </button>
                                    </li>
                                </>
                            )
                        })}
                    </ul>
                </div>
                <div>
                    <button>
                        <span>Contact Us</span>
                    </button>
                </div>
            </header>
        </>
    )
}