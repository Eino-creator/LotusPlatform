import '/resources/css/Welcome.css';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link } from '@inertiajs/react';

export default function Welcome() {
    // const handleImageError = () => {
    //     document
    //         .getElementById('screenshot-container')
    //         ?.classList.add('!hidden');
    //     document.getElementById('docs-card')?.classList.add('!row-span-1');
    //     document
    //         .getElementById('docs-card-content')
    //         ?.classList.add('!flex-row');
    //     document.getElementById('background')?.classList.add('!hidden');
    // };

    return (
        <GuestLayout>
            <Head title="LotusKring Zuid-Oost Drenthe" />
            <div className="welcome-container">
                <div>
                    <div>
                        <main>
                            <div className="mt-6">
                                dit is de welkom pagina voor lotuskring Zuid-Oost Drenthe
                            </div>
                        </main>
                    </div>
                </div>
            </div>
        </GuestLayout>
    );
}
