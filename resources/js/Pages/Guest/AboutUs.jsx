import '/resources/css/Welcome.css';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head } from '@inertiajs/react';

export default function AboutUs() {
    return (
        <GuestLayout>
            <Head title="Over Ons" />
            <div className="hero-container">
                <img
                    src="/img/Melle-foto.jpg"
                    alt="Over LotusKring Zuid-Oost Drenthe"
                    className="hero-image"
                />
                <div className="hero-overlay">
                    <div className="hero-content">
                        <h1>Over LotusKring<br />
                            Zuid-Oost Drenthe
                        </h1>
                        <p>Samen maken we veiligheid zichtbaar en realistisch.</p>
                    </div>
                </div>
            </div>
            <div className="about-us-container">
                <div>
                    <main>
                        <section className="about-us-content">
                            <div className="about-us-text-content">
                                <p className="content-text">
                                    Onze Lotus Kring is gevestigd in Emmen, we zijn een groep van enthousiaste vrijwilligers die
                                    zijn opgeleid en gediplomeerd om als realistische slachtoffers te spelen bij BHV trainingen, EHBO trainingen
                                    en bij Hulpdiensten zoals Brandweer, Politie en Ambulance.
                                    We spelen in noord Nederland Groningen, Friesland, Drenthe en Overijssel.
                                </p>
                            </div>
                        </section>
                    </main>
                </div>
            </div>
        </GuestLayout>
    );
}
