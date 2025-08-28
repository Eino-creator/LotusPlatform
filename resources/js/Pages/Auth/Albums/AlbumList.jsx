import '/resources/css/LotusSystem.css';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import { router } from '@inertiajs/react';

export default function AlbumList({ albums }) {
    const handleDelete = (albumId) => {
        console.log(`Delete album with ID: ${albumId}`);
        // Add your delete logic here
        if (confirm('Are you sure you want to delete this album?')) {
            router.delete(route('albums.destroy', albumId));
        }
    };

    const handleEdit = (albumId) => {
        console.log(`Edit album with ID: ${albumId}`);
        // Add your edit logic here
        router.get(route('albums.edit', albumId));
    };

    const handleAdd = () => {
        // console.log('Add new album');
        // Redirect to album creation page
        router.get(route('albums.create'));
    }

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Albums
                </h2>
            }
        >
            <Head title="Albums" />

            <div className="album-grid">
                <div
                    className="album-grid-item add-album"
                    onClick={() => handleAdd()}
                >
                    <span className="plus-icon">+</span>
                </div>
                {albums.map(album => (
                    <div key={album.id} className="album-grid-item">
                        <img src={`/storage/${album.cover_image}`} alt={album.title} />
                        <div className="album-title-overlay">
                            {album.title}
                        </div>
                        <div className="album-hover-overlay">
                            <div
                                className="album-hover-half red"
                                onClick={() => handleDelete(album.id)}
                            >
                                🗑️
                            </div>
                            <div
                                className="album-hover-half blue"
                                onClick={() => handleEdit(album.id)}
                            >
                                ✏️
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </AuthenticatedLayout>
    );
}
