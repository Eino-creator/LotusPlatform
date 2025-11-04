import '/resources/css/Welcome.css';
import GuestLayout from '@/Layouts/GuestLayout.jsx';
import {Head} from '@inertiajs/react';
import { useEffect } from "react";

export default function BeLotus() {

    useEffect(() => {
        const emailSpan = document.getElementById("be-lotus-email");
        if (emailSpan) {
            const email = String.fromCharCode(
                    115, 101, 99, 114, 101, 116, 97, 114, 105, 115
                ) + "@" +
                String.fromCharCode(
                    108, 111, 116, 117, 115, 107, 114, 105, 110, 103, 45, 122, 117, 105, 100, 111, 111, 115, 116, 45, 100, 114, 101, 110, 116, 104, 101, 46, 101, 117
                );
            emailSpan.innerHTML = `<a href="mailto:${email}">${email}</a>`;
        }
    }, []);

    return (
        <GuestLayout>
            <Head title="Lotus Aanvragen"/>
            <div className="request-form-container">
                <div>
                    <h1>Beste eesrtehulpverlener</h1>
                    <p>Informeer voor een volgende LOTUS© slachtoffer opleiding bij de organizatie LOTUS©</p>
                </div>
                <div className="organization-info-sidebar">
                    <h2 className="organization-info-title">Verenigings informatie:</h2>
                    <h2 className="organization-info-title">LOTUSKring Zuid-Oost Drenthe</h2>
                    <p className="organization-info-subject">KvK:</p>
                    <p> 40048477</p>
                    <p className="organization-info-subject">Voorzitter:</p>
                    <p>A. Holteman</p>
                    <p className="organization-info-subject">Secretaris:</p>
                    <p>J.E. Hummel</p>
                    <p className="organization-info-subject">Penningmeester:</p>
                    <p>E. Prevost</p>
                    <p className="organization-info-subject">Coördinator:</p>
                    <p>A. Aardema</p>
                    {/*<p>Privacy:</p>
                    <p>Privacy verklaring</p>*/}
                    <div className="org-map">
                        {/*<img src="your-map-image.png" alt="Map" style="width:100%;"/>*/}
                    </div>
                </div>
            </div>
        </GuestLayout>
    );
}
