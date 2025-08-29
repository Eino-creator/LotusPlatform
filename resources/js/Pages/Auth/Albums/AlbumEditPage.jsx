import React from 'react';
import AlbumEdit from './AlbumEdit';

export default function AlbumEditPage({ album, photos }) {
    const handleAlbumUpdate = async (formData) => {
        formData.append('_method', 'PUT');

        // Get CSRF token from meta tag
        const token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

        try {
            const response = await fetch(`/albums/${album.id}`, {
                method: 'POST',
                body: formData,
                headers: {
                    'X-CSRF-TOKEN': token,
                    'Accept': 'application/json',
                },
            });

            if (!response.ok) {
                const text = await response.text();
                console.error('Update failed:', text);
                return;
            }

            console.log('Album updated successfully');
        } catch (error) {
            console.error('Network error:', error);
        }
    };


    return (
        <AlbumEdit
            album={album}
            photos={photos}
            onSubmit={handleAlbumUpdate}
        />
    );
}
