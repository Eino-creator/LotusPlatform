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
                        <section className="image-carrusel">
                            <Carousel showThumbs={false} autoPlay infiniteLoop>
                                <div>
                                    <img src="/img/banner-placeholder.jpg" alt="LotusKring Zuid-Oost Drenthe" />
                                </div>
                                <div>
                                    <img src="/img/another-image.jpg" alt="Another Image" />
                                </div>
                                <div>
                                    <img src="/img/yet-another-image.jpg" alt="Yet Another Image" />
                                </div>
                            </Carousel>
                        </section>
                    </main>
                </div>
            </div>
        </GuestLayout>
    );
}
