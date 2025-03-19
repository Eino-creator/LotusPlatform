import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link } from '@inertiajs/react';

export default function AboutUs() {
    return (
        <GuestLayout>
            <Head title="Over Ons" />
            <div className="about-us-container">
                <div>
                    <main>
                        <section className='about-us-content'>
                            <div className='about-us-text'>
                                <div className='about-us-text-content'>
                                    <h1>Over Ons</h1>
                                    <p>
                                    Onze Lotus Kring is gevestigd in Emmen, we zijn een groep van enthousiaste vrijwilligers die
                                    zijn opgeleid en gediplomeerd om als realistische slachtoffers te spelen bij BHV trainingen, EHBO trainingen
                                    en bij Hulpdiensten zoals Brandweer, Politie en Ambulance.
                                    We spelen in noord Nederland Groningen, Friesland, Drenthe en Overijssel.
                                    </p>
                                </div>
                            </div>
                            <div className='about-us-map'>
                                <div className='about-us-map-content'>
                                    <img src="/img/nederland-l.png" alt="Map" />
                                </div>
                                <div className='about-us-map-text'>
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
