import '/resources/css/Welcome.css';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link } from '@inertiajs/react';
import CarouselComponent from '@/Components/CarouselComponent';

export default function Welcome() {
    return (
        <GuestLayout>
            <Head title="LotusKring Zuid-Oost Drenthe" />
            <CarouselComponent />
            <div className="welcome-container">
                <div>
                    <main>
                        <section className='welcome-content'>
                                <div className='welcome-text-content'>
                                    <h2 className='content-title'>Welkom bij LotusKring Zuid-Oost Drenthe</h2>
                                    <p className='content-text'>
                                    Onze Lotus Kring is gevestigd in Emmen, we zijn een groep van enthousiaste vrijwilligers die
                                    zijn opgeleid en gediplomeerd om als realistische slachtoffers te spelen bij BHV trainingen, EHBO trainingen
                                    en bij Hulpdiensten zoals Brandweer, Politie en Ambulance.
                                    We spelen in noord Nederland Groningen, Friesland, Drenthe en Overijssel.
                                    </p>
                                    <Link href={route('about-us')} className="content-button">
                                        Meer over ons
                                    </Link>
                                </div>
                            <div className='welcome-map'>
                                <div className='welcome-map-content'>
                                    <img src="/img/nederland-l.png" alt="Map" />
                                </div>
                                <div className='welcome-map-text'>
                                    <h1>
                                        # beschikbaar in noord Nederland
                                    </h1>
                                </div>

                            </div>
                        </section>
                    </main>
                </div>
            </div>
        </GuestLayout>
    );
}
