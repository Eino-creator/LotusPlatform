import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function CarouselComponent() {
    return (
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
    );
}
