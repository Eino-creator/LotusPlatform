import './Welcome.css';
import { Head, Link } from '@inertiajs/react';

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    const handleImageError = () => {
        document
            .getElementById('screenshot-container')
            ?.classList.add('!hidden');
        document.getElementById('docs-card')?.classList.add('!row-span-1');
        document
            .getElementById('docs-card-content')
            ?.classList.add('!flex-row');
        document.getElementById('background')?.classList.add('!hidden');
    };

    return (
        <>
            <Head title="LotusKring Zuid-Oost Drenthe" />
            <div className="welcome-container">
                <div>
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
                                {auth.user ? (
                                    <Link
                                        href={route('dashboard')}
                                        className="nav-link dark"
                                    >
                                        Dashboard
                                    </Link>
                                ) : (
                                    <>
                                        <Link
                                            href={route('login')}
                                            className="nav-link dark"
                                        >
                                            Inloggen
                                        </Link>
                                        <Link
                                            href={route('register')}
                                            className="nav-link dark"
                                        >
                                            Registreren
                                        </Link>
                                    </>
                                )}
                            </nav>
                        </header>

                        <main>
                            <div className="mt-6"></div>
                        </main>

                        <footer>
                            <div className="footer dark">
                                LotusKring Zuid-Oost Drenthe
                            </div>
                        </footer>
                    </div>
                </div>
            </div>
        </>
    );
}
