import '/resources/css/LotusSystem.css';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';
import { router } from '@inertiajs/react';

export default function AlbumCreate() {
    const { data, setData, post, errors } = useForm({
        title: '',
        description: '',
        main_image: null,
        other_images: [],
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        router.post(route('albums.store'), {'title': data.title, 'description': data.description, 'main_image': data.main_image});
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="album-create-header">
                    Create Album
                </h2>
            }
        >
            <Head title="Create Album" />

            <div className="album-create-container">
                <form onSubmit={handleSubmit} className="album-create-form">
                    {/* Title */}
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input
                            type="text"
                            id="title"
                            value={data.title}
                            onChange={(e) => setData('title', e.target.value)}
                        />
                        {errors.title && (
                            <div className="error-message">
                                {errors.title}
                            </div>
                        )}
                    </div>

                    {/* Description */}
                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <textarea
                            id="description"
                            value={data.description}
                            onChange={(e) =>
                                setData('description', e.target.value)
                            }
                        />
                        {errors.description && (
                            <div className="error-message">
                                {errors.description}
                            </div>
                        )}
                    </div>

                    {/* Main Image */}
                    <div className="form-group">
                        <label htmlFor="main_image">Main Image</label>
                        <input
                            type="file"
                            id="main_image"
                            onChange={(e) =>
                                setData('main_image', e.target.files[0])
                            }
                            className="file-input"
                        />
                        {errors.main_image && (
                            <div className="error-message">
                                {errors.main_image}
                            </div>
                        )}
                    </div>

                    {/* Other Images */}
                    <div className="form-group">
                        <label htmlFor="other_images">Other Images</label>
                        <input
                            type="file"
                            id="other_images"
                            multiple
                            onChange={(e) =>
                                setData('other_images', Array.from(e.target.files))
                            }
                            className="file-input"
                        />
                        {errors.other_images && (
                            <div className="error-message">
                                {errors.other_images}
                            </div>
                        )}
                    </div>

                    {/* Submit Button */}
                    <div className="form-group">
                        <button type="submit" className="submit-button">
                            Create Album
                        </button>
                    </div>
                </form>
            </div>
        </AuthenticatedLayout>
    );
}
