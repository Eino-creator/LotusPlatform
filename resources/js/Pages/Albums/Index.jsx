import '/resources/css/Welcome.css';
import GuestLayout from '@/Layouts/GuestLayout.jsx';
import { Head, Link } from '@inertiajs/react';
import Masonry from 'react-masonry-css';

// Example album data
// const index = [
    // { id: 1, title: 'Album 1', image: '/img/lotus-logo-text.png' },
    // { id: 2, title: 'Album 2', image: '/img/nederland-L.jpg' },
    // { id: 3, title: 'Album 3', image: '/img/Melle-foto.jpg' },
    // { id: 4, title: 'Album 4', image: '/img/staande.jpg' },
    // { id: 5, title: 'Album 5', image: '/img/banner-placeholder.jpg' },
    // { id: 6, title: 'Album 6', image: '/img/test1.png' },
    // { id: 7, title: 'Album 7', image: '/img/test2.png' },
    // { id: 8, title: 'Album 8', image: '/img/test3.png' },
    // Add more index as needed
// ];

export default function Index({ albums }) {
    // Masonry breakpoints
    const breakpointColumnsObj = {
        default: 3,
        1100: 2,
        700: 1
    };

    return (
        <GuestLayout>
            <Head title="Foto Album" />
            <div className="Albums-container">
                <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className="my-masonry-grid"
                    columnClassName="my-masonry-grid_column"
                >
                    {albums.map(album => (
                        <Link
                            key={album.id}
                            href={route('albums.show', album.id)} // Link to the show route
                            className="album-card"
                        >
                            <div className="album-image-container">
                                <img src={`/storage/${album.cover_image}`} alt={album.title} className="album-image" />
                                <div className="album-title-overlay">
                                    <span>{album.title}</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </Masonry>
            </div>
        </GuestLayout>
    );
}
