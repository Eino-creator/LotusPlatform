import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';
import {
    UserCircleIcon,
} from '@heroicons/react/24/outline';
import React from 'react';

export default function GuestLayout({ auth = {}, children }) {
    return (
        <div>
            <header className="header">
                <div>
                    <Link href={route('dashboard')}>
                        <img
                            src="/img/lotus-logo-text.png"
                            alt="LotusKring Zuid-Oost Drenthe"
                            className="logo"
                        />
                    </Link>
                </div>
                <nav className="nav">
                    <div className='nav-links'>
                <Link className="nav-link dark">
                        LotusKring
                </Link>
                <Link className="nav-link dark">
                        Aanvraag
                    </Link>
                <Link className="nav-link dark">
                        Foto album
                    </Link>
                <Link className="nav-link dark">
                        Opleidingen
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
            </header>
            <div>
                {children}
            </div>
            <footer>
                <div className="footer dark">
                    LotusKring Zuid-Oost Drenthe
                </div>
            </footer>
        </div>
    );
}
