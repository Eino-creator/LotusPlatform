import '/resources/css/Welcome.css';
import GuestLayout from '@/Layouts/GuestLayout.jsx';
import { Head } from '@inertiajs/react';

export default function Show({ album }) {
    return (
        <GuestLayout>
            <Head title={album.title} />
            <div className="album-show-container">
                <h1 className="album-title">{album.title}</h1>
                <div className="album-image-wrapper">
                    <img src={album.cover_image} alt={album.title} className="album-show-image" />
                </div>
                <p className="album-description">
                    {album.description || 'No description available for this album.'}
                </p>
            </div>
        </GuestLayout>
    );
}
