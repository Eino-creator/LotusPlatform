import '/resources/css/Welcome.css';
import GuestLayout from '@/Layouts/GuestLayout.jsx';
import {Head} from '@inertiajs/react';

export default function BeLotus() {
    return (
        <GuestLayout>
            <Head title="Lotus Aanvragen"/>
            <div className="request-form-container">
                <div>
                    <h1>Beste eesrtehulpverlener</h1>
                    <p>Ben je creatief en wil je je kennis verbreden en verdiepen?</p>
                    <p>Bij voldoende aanmeldingen start in Emmen in november 2025 een versnelde opleiding tot LOTUS-slachtoffer.</p>
                    <p>In maximaal 14 zaterdagenvan 9:30 uur tot 16:00 uur wordt de leerstof aangeboden,</p>
                    <p>gevolgd door een examen centraal in Nederland.</p>
                    <p>Nieuwsgierig geworden of de opleiding iets voor je is? Kijk dan eens op de website van de organizatie LOTUS:</p>
                    <a href="https://organisatielotus.nl/opleiding-lotusslachtoffer/" target="_blank" rel="noopener noreferrer">https://organisatielotus.nl/opleiding-lotusslachtoffer/</a>
                    <p>De opleiding kost €900,- en is inclusief koffie/thee, een koffer, lesboek, een basis grime-pakket en 1x examen.</p>
                    <p>Exclusief lunch en aanvullingen voor grimeren met persoonlijke voorkeur.</p>
                    <p>We organiseren een online informatiebijeenkomst op woensdag 3 september om 19:30 uur,</p>
                    <p>de uitnodiging hiervoor volgt per mail na aanmelden via de Secretaris</p>
                    <p>secretaris@lotuskring-zuidoost-drenthe.eu</p>

                    <p>Instructeur-LOTUS bij LOTUS-kring Zuid-Oost Drenthe 03</p>
                    <h2>Lesdata:</h2>
                    <p>November: 1, 15, 29</p>
                    <p>Januari: 10, 24</p>
                    <p>Februari: 7, 14</p>
                    <p>Maart: 7, 21</p>
                    <p>April: 4, 18</p>
                    <p>Mei: 9, 23, 30</p>
                    <p>Verwacht examen op een zaterdag in juni 2026, datum hiervan is nog niet bekend.</p>
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
