import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';
import {
    UserCircleIcon,
} from '@heroicons/react/24/outline';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';
import CarouselComponent from '@/Components/CarouselComponent';

const facebookIcon = <FontAwesomeIcon icon={faFacebook} className='social-media-logo' />
const youtubeIcon = <FontAwesomeIcon icon={faYoutube} className='social-media-logo' />


export default function GuestLayout({ auth = {}, children }) {
    return (
        <div>
            <header className="header">
                <div className='top-bar'></div>
                <div className='header-content'>
                <div>
                    <Link href={route('welcome')}>
                        <img
                            src="/img/lotus-logo-text.png"
                            alt="LotusKring Zuid-Oost Drenthe"
                            className="logo"
                        />
                    </Link>
                </div>
                <nav className="nav">
                    <div className='nav-links'>
                        <Link href={route('welcome')} className="nav-link dark">
                            Thuis
                        </Link>
                        <Link href={route('about-us')} className="nav-link dark">
                            Over Ons
                        </Link>
                        <Link className="nav-link dark">
                            Foto album
                        </Link>
                        <Link className="nav-link dark">
                            Lotus huren
                        </Link>
                        <Link className="nav-link dark">
                            Word Lotus
                        </Link>
                        <Link className="nav-link dark">
                            Contact
                        </Link>
                    </div>
                    <div>
                        {auth.user ? (
                            <Link
                                href={route('dashboard')}
                                className="nav-link dark"
                            >
                                Dashboard
                            </Link>
                        ) : (
                            <div>
                                <Link
                                    href={route('login')}
                                    className="nav-link dark"
                                >
                                    <UserCircleIcon className="icon" />
                                    login
                                </Link>
                                {/* <Link
                                    href={route('register')}
                                    className="nav-link"
                                >
                                    Registreren
                                </Link> */}
                            </div>
                        )}
                    </div>
                </nav>
                </div>
            </header>
            <CarouselComponent />
            <div>
                {children}
            </div>
            <footer>
                <div className="footer">
                    <div className="footer-content">
                        <div>
                        </div>
                        <div className="footer-text">
                            <div className="footer-text-1">
                                <h3>Vereniging</h3>
                                <hr className="footer-divider" />
                                <Link>
                                    Over Ons
                                </Link>
                                <Link>
                                    Onze diensten
                                </Link>
                                <Link>
                                    Geschiedenis
                                </Link>
                            </div>
                            <div className="footer-text-2">
                                <h3>Hulp</h3>
                                <hr className="footer-divider" />
                                <Link>
                                    Veelgestelde vragen
                                </Link>
                                {/* <Link>
                                    Privacybeleid
                                </Link> */}
                                {/* <Link>
                                    Algemene voorwaarden
                                </Link> */}
                                <Link>
                                    Contact
                                </Link>
                            </div>
                            <div className='footer-text-2'>
                                <h3>Online</h3>
                                <hr className="footer-divider" />

                                <Link>
                                    Aanvraag
                                </Link>
                                <Link>
                                    Omgeving
                                </Link>
                                <Link>
                                    Foto album
                                </Link>
                            </div>
                            <div className='footer-text-2'>
                                <h3>Volg Ons</h3>
                                <hr className="footer-divider" /><br/>
                                <div className='footer-textp-3'>
                                <Link href='https://www.facebook.com/profile.php?id=61574034822426'>
                                    {facebookIcon}
                                </Link>
                                <Link href='https://www.youtube.com/@LotusEmmen'>
                                    {youtubeIcon}
                                </Link>
                                </div>
                            </div>
                        </div>
                        <div className="footer-text-copyright">
                            <p>
                                © 2025 LotusKring Zuid-Oost Drenthe
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
