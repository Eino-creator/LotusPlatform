import '/resources/css/Welcome.css';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link } from '@inertiajs/react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function Welcome() {
    return (
        <GuestLayout>
            <Head title="LotusKring Zuid-Oost Drenthe" />
            <div className="welcome-container">
                <div>
                    <main>
                        <section className="image-carousel">
                            <Carousel showThumbs={false} autoPlay infiniteLoop interval={5000}>
                                <div>
                                    <img src="/img/banner-placeholder.jpg" alt="LotusKring Zuid-Oost Drenthe" />
                                </div>
                                <div>
                                    <img src="/img/banner-placeholder.jpg" alt="Another Image" />
                                </div>
                                <div>
                                    <img src="/img/banner-placeholder.jpg" alt="Yet Another Image" />
                                </div>
                            </Carousel>
                        </section>
                        <section className='welcome-content'>
                            <div className='welcome-text'>
                                <div className='welcome-text-content'>
                                    <h1>Welkom bij LotusKring Zuid-Oost Drenthe</h1>
                                    <p>
                                        iorum ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus
                                        euismod, ultricies mi at, tincidunt neque. Sed nec lacus eget odio
                                        fermentum tincidunt. Nulla facilisi. Aenean nec enim nec nunc
                                        condimentum ultricies. Sed nec lacus eget odio fermentum tincidunt.
                                        Nulla facilisi. Aenean nec enim nec nunc condimentum ultricies.
                                        Sed nec lacus eget odio fermentum tincidunt. Nulla facilisi.
                                        Aenean nec enim nec nunc condimentum ultricies.
                                    </p>
                                </div>
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
