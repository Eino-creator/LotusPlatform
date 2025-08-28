import '/resources/css/Welcome.css';
import GuestLayout from '@/Layouts/GuestLayout.jsx';
import { Head } from '@inertiajs/react';
import Masonry from 'react-masonry-css';
import React, { useState } from 'react';

export default function Show({ albumId, albums }) {

    const [modalPhoto, setModalPhoto] = useState(null);

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
                                    <img
                                        src={`/storage/${album.cover_image}`}
                                        alt={album.title}
                                        onClick={() => setModalPhoto({ src: `/storage/${album.cover_image}`, alt: album.title })}
                                        style={{ cursor: 'pointer' }}
                                    />
                                </div>

                                {Array.isArray(album.photos) && album.photos.length > 0 ? (
                                    album.photos.map(photo => (
                                    <div className="album-card">
                                        <div key={photo.id}>
                                            <img
                                                src={`/storage/${photo.photo_path}`}
                                                alt={photo.filename || 'Photo'}
                                                className="album-photo"
                                                onClick={() => setModalPhoto({ src: `/storage/${photo.photo_path}`, alt: photo.filename || 'Photo' })}
                                                style={{ cursor: 'pointer' }}
                                            />
                                        </div>
                                    </div>
                                    ))
                                ) : (
                                    <p>Geen andere foto's beschikbaar voor dit album</p>
                                )}


                            </Masonry>
                            {/* Modal */}
                            {modalPhoto && (
                                <div
                                    className="modal-backdrop"
                                    onClick={() => setModalPhoto(null)}
                                    style={{
                                        position: 'fixed',
                                        top: 0,
                                        left: 0,
                                        width: '100vw',
                                        height: '100vh',
                                        background: 'rgba(0,0,0,0.8)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        zIndex: 1000,
                                    }}
                                >
                                    <img
                                        src={modalPhoto.src}
                                        alt={modalPhoto.alt}
                                        style={{
                                            maxWidth: '90vw',
                                            maxHeight: '90vh',
                                            boxShadow: '0 0 20px #000',
                                            borderRadius: '8px',
                                        }}
                                        onClick={e => e.stopPropagation()}
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            ) : (
                <p>Album not found.</p>
            )}
        </GuestLayout>
    );
}
