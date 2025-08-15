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
                                 <div className="lotus-info">
      <p>
        De leden van <strong>LOTUS-kring Zuid-Oost Drenthe</strong>. Een actieve kring met ongeveer <strong>20 gediplomeerde en enthousiaste LOTUS-slachtoffers</strong>, twee LOTUS-instructeurs en een medisch begeleider met veel ervaring. En de kring is groeiende!
      </p>

      <p>
        Om van gediplomeerd naar geoefend LOTUS-slachtoffer te komen en te blijven worden <strong>maandelijks lessen aangeboden</strong> met wisselende inhoud zodat zij die dat willen zich op termijn <strong>LOTUS-professional</strong> mogen noemen.
      </p>

      <p>
        Het geleerde wordt vervolgens in de praktijk gebracht bij lessen en oefeningen <strong>eerste hulp, BHV</strong> en bij professionals zoals <strong>ambulancediensten en overheidsinstanties (politie, brandweer, leger etc.)</strong>.
      </p>

      <p>
        Wil je je lessen eerste hulp naar een hoger niveau tillen door gebruik te maken van één van onze LOTUS-slachtoffers, of wil je het LOTUS-diploma halen of uitbreiden?
      </p>

      <p>
        <strong>Neem contact met ons op!</strong><br />
        <strong>Mailadres:</strong> info@lotuskring.nl<br />
        <strong>Website:</strong> www.lotuskring.nl<br />
        <strong>Facebook:</strong> facebook.com/lotuskringzod<br />
        <strong>Telefoonnummer:</strong> 06-12345678
      </p>
    </div>
                            </div>
                        </section>
                    </main>
                </div>
            </div>
        </GuestLayout>
    );
}
