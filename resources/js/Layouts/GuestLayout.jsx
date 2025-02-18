import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';

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
                    <Link className="nav-link dark">
                        Ons Team
                    </Link>
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
                                Inloggen
                            </Link>
                            {/* <Link
                                href={route('register')}
                                className="nav-link"
                            >
                                Registreren
                            </Link> */}
                        </div>
                    )}
                </nav>
            </header>
            <div>
                {children}
            </div>
        </div>
    );
}
