import '/resources/css/Welcome.css';
import GuestLayout from '@/Layouts/GuestLayout.jsx';
import {Head} from '@inertiajs/react';

export default function Request() {
    return (
        <GuestLayout>
            <Head title="Lotus Aanvragen"/>
            <div className="request-form-container">
                <div className="request-form-section">
                    <h1>Lotus Aanvragen</h1>
                    <form className="request-form">
                        {/* 7 Text Inputs in a Column */}
                        <div className="form-column">
                            <input type="text" placeholder="Input 1"/>
                            <input type="text" placeholder="Naam Contact"/>
                            <input type="text" placeholder="Email Contact"/>
                            <input type="text" placeholder="Telefoon nummer contact"/>
                            <input type="text" placeholder="Email Facturatie (optioneel)"/>
                            <input type="text" placeholder="De inzet waar het over gaat"/>
                            <input type="text" placeholder="Bedrijf / Verenigings naam"/>
                        </div>

                        {/* 1 Input in a Row of Two */}
                        <div className="form-row">
                            <input type="text" placeholder="Naam inzet"/>
                            <input type="text" placeholder="Datum Inzet (dd-mm-jjjj)"/>
                        </div>

                        {/* 2 Inputs in a Row of Three */}
                        <div className="form-row">
                            <input type="text" placeholder="Begin Tijd Inzet (uu:mm)"/>
                            <input type="text" placeholder="Eind Tijd Inzet (uu:mm)"/>
                            <input type="text" placeholder="Aantal LOTUS"/>
                        </div>
                        <div className="form-row">
                            <input type="text" placeholder="Locatie Adres"/>
                            <input type="text" placeholder="Postcode"/>
                            <input type="text" placeholder="Plaats"/>
                        </div>

                        {/* Bigger Text Input */}
                        <div className="form-column">
                            <textarea placeholder="Verdere Opmerkingen"></textarea>
                        </div>

                        <button type="submit">Verstuur bericht</button>
                    </form>
                </div>
                <div className="organization-info-sidebar">
                    <h2>Verenigings informatie:</h2>
                    <p>LOTUSKring Zuid-Oost Drenthe</p>
                    <p>KvK: 40048477</p>
                    <p>Voorzitter:<br/>A. Holteman</p>
                    <p>Secretaris:<br/>J.E. Hummel</p>
                    <p>Penningmeester:<br/>E. Prevost</p>
                    <p>Coördinator:<br/>A: Aardema</p>
                    <p>Privacy:<br/>Privacy verklaring</p>
                    <div className="org-map">
                        {/*<img src="your-map-image.png" alt="Map" style="width:100%;"/>*/}
                    </div>
                </div>
            </div>
        </GuestLayout>
    );
}
