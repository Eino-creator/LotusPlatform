import React, { useState, useRef } from 'react';
import '/resources/css/LotusSystem.css';

export default function AlbumEdit({ album, photos, onSubmit }) {
    const [title, setTitle] = useState(album.title);
    const [description, setDescription] = useState(album.description);
    const [coverImage, setCoverImage] = useState(null);
    const [albumPhotos, setAlbumPhotos] = useState(photos); // [{id, photo_path, filename}]
    const [removedPhotoIds, setRemovedPhotoIds] = useState([]);
    const [newPhotos, setNewPhotos] = useState([]);
    const fileInputRef = useRef();

    const handleCoverChange = e => {
        setCoverImage(e.target.files[0] || null);
    };

    const handleNewPhotos = e => {
        setNewPhotos(Array.from(e.target.files));
    };

    const handleRemovePhoto = id => {
        setRemovedPhotoIds([...removedPhotoIds, id]);
        setAlbumPhotos(albumPhotos.filter(photo => photo.id !== id));
    };

    const handleRemoveNewPhoto = idx => {
        const updated = [...newPhotos];
        updated.splice(idx, 1);
        setNewPhotos(updated);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);

        if (coverImage) {
            formData.append('cover_image', coverImage);
        }

        // Only append new photos
        if (newPhotos.length > 0) {
            newPhotos.forEach((photo) => {
                formData.append('album_photos[]', photo);
            });
        }

        // Append removed photo IDs
        if (removedPhotoIds.length > 0) {
            removedPhotoIds.forEach((id) => {
                formData.append('removed_photo_ids[]', id);
            });
        }

        await onSubmit(formData);
    };


    return (
    <form onSubmit={handleSubmit} className="album-edit-form">
            <div>
                <label>Title</label>
                <input value={title} onChange={e => setTitle(e.target.value)} required />
            </div>
            <div>
                <label>Description</label>
                <textarea value={description} onChange={e => setDescription(e.target.value)} required />
            </div>
            <div>
                <label>Cover Image</label>
                <input type="file" accept="image/*" onChange={handleCoverChange} />
            </div>
            <div>
                <label>Current Album Photos</label>
                <ul>
                    {albumPhotos.map(photo => (
                        <li key={photo.id}>
                            {photo.filename}
                            <button type="button" onClick={() => handleRemovePhoto(photo.id)}>Remove</button>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <label>Add New Album Photos</label>
                <input
                    type="file"
                    accept="image/*"
                    multiple
                    ref={fileInputRef}
                    onChange={handleNewPhotos}
                />
                <ul>
                    {newPhotos.map((file, idx) => (
                        <li key={idx}>
                            {file.name}
                            <button type="button" onClick={() => handleRemoveNewPhoto(idx)}>Remove</button>
                        </li>
                    ))}
                </ul>
            </div>
            <button type="submit" style={{ marginTop: 20 }}>Save Changes</button>
        </form>
    );
}
