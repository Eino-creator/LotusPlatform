import '/resources/css/Welcome.css';
import GuestLayout from '@/Layouts/GuestLayout.jsx';
import { Head } from '@inertiajs/react';

export default function Show({ albumId, albums }) {

    // Ensure albums is an array and albumId is valid
    const album = Array.isArray(albums) ? albums.find(album => album.id === albumId) : null;

    return (
        <GuestLayout>
            {album ? (
                <>
                    <Head title={album.title} />
                    <div className="album-show-container">
                        <h1 className="album-title">{album.title}</h1>
                        <div className="album-image-wrapper">
                            <img src={album.cover_image} alt={album.title} className="album-show-image" />
                        </div>
                        <p className="album-description">
                            {album.description || 'No description available for this album.'}
                        </p>
                        <div>
                            <h2>Photos</h2>
                            <div className="album-photos">
                                {Array.isArray(album.photos) && album.photos.length > 0 ? (
                                    album.photos.map(photo => (
                                        <div key={photo.id} className="photo-wrapper">
                                            <img
                                                src={photo.photo_path}
                                                alt={photo.filename || 'Photo'}
                                                className="album-photo"
                                            />
                                        </div>
                                    ))
                                ) : (
                                    <p>No photos available for this album.</p>
                                )}
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <p>Album not found.</p>
            )}
        </GuestLayout>
    );
}
