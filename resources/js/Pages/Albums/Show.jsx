import '/resources/css/Welcome.css';
import GuestLayout from '@/Layouts/GuestLayout.jsx';
import { Head } from '@inertiajs/react';
import Masonry from 'react-masonry-css';

export default function Show({ albumId, albums }) {

    // Masonry breakpoints
    const breakpointColumnsObj = {
        default: 4, // Number of columns for large screens
        1100: 3,    // Number of columns for medium screens
        700: 2,     // Number of columns for small screens
        500: 1      // Number of columns for very small screens
    };

    // Ensure albums is an array and albumId is valid
    const album = Array.isArray(albums) ? albums.find(album => album.id === albumId) : null;

    return (
        <GuestLayout>
            {album ? (
                <div className="album-show-page">
                    <Head title={album.title} />
                    <div className="album-show-container">
                        <h1 className="album-title">{album.title}</h1>
                        <p className="album-description">
                            {album.description || 'No description available for this album.'}
                        </p>
                        <div>
                            <h2>Photos</h2>
                            <Masonry
                                breakpointCols={breakpointColumnsObj}
                                className="my-masonry-grid"
                                columnClassName="my-masonry-grid_column"
                            >
                            <div className="album-card">
                                <img src={album.cover_image} alt={album.title} />
                            </div>

                                {Array.isArray(album.photos) && album.photos.length > 0 ? (
                                    album.photos.map(photo => (
                                    <div className="album-card">
                                        <div key={photo.id}>
                                            <img
                                                src={photo.photo_path}
                                                alt={photo.filename || 'Photo'}
                                                className="album-photo"
                                            />
                                        </div>
                                    </div>
                                    ))
                                ) : (
                                    <p>Geen andere foto's beschikbaar voor dit album</p>
                                )}


                            </Masonry>
                        </div>
                    </div>
                </div>
            ) : (
                <p>Album not found.</p>
            )}
        </GuestLayout>
    );
}
