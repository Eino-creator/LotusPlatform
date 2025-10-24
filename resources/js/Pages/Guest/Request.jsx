import '/resources/css/Welcome.css';
import GuestLayout from '@/Layouts/GuestLayout.jsx';
import {Head} from '@inertiajs/react';
import PrimaryButton from "@/Components/PrimaryButton.jsx";
import {useState} from "react";
import {router} from "@inertiajs/react";

export default function Request() {
    const [form, setForm] = useState({
        naamContact: '',
        emailContact: '',
        telefoonContact: '',
        emailFacturatie: '',
        inzetOmschrijving: '',
        bedrijf: '',
        naamInzet: '',
        datumInzet: '',
        beginTijd: '',
        eindTijd: '',
        aantalLotus: '',
        locatieAdres: '',
        postcode: '',
        plaats: '',
        opmerkingen: '',
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        router.get('request', form);
    };


    return (
        <GuestLayout>
            <Head title="Lotus Aanvragen"/>
            <div className="request-form-container">
                <div className={"request-form-section-center"}>
                <div className="request-form-section">
                    <h1>Lotus Aanvragen</h1>
                    <form className="request-form">
                        {/* 7 Text Inputs in a Column */}
                        <div className="form-column">
                            <input type="text" placeholder="Naam Contact" value={form.naamContact} onChange={handleChange} name="naamContact"/>
                            <input type="text" placeholder="Email Contact" value={form.emailContact} onChange={handleChange} name="emailContact"/>
                            <input type="text" placeholder="Telefoon nummer contact" value={form.telefoonContact} onChange={handleChange} name="telefoonContact"/>
                            <input type="text" placeholder="Email Facturatie (optioneel)" value={form.emailFacturatie} onChange={handleChange} name="emailFacturatie"/>
                            <input type="text" placeholder="De inzet waar het over gaat" value={form.inzetOmschrijving} onChange={handleChange} name="inzetOmschrijving"/>
                            <input type="text" placeholder="Bedrijf / Verenigings naam" value={form.bedrijf} onChange={handleChange} name="bedrijf"/>
                        </div>

                        {/* 1 Input in a Row of Two */}
                        <div className="form-row">
                            <input type="text" placeholder="Naam inzet" value={form.naamInzet} onChange={handleChange} name="naamInzet"/>
                            <input type="text" placeholder="Datum Inzet (dd-mm-jjjj)" value={form.datumInzet} onChange={handleChange} name="datumInzet"/>
                        </div>

                        {/* 2 Inputs in a Row of Three */}
                        <div className="form-row">
                            <input type="text" placeholder="Begin Tijd Inzet (uu:mm)" value={form.beginTijd} onChange={handleChange} name="beginTijd"/>
                            <input type="text" placeholder="Eind Tijd Inzet (uu:mm)" value={form.eindTijd} onChange={handleChange} name="eindTijd"/>
                            <input type="number" placeholder="Aantal LOTUS" value={form.aantalLotus} onChange={handleChange} name="aantalLotus"/>
                        </div>
                        <div className="form-row">
                            <input type="text" placeholder="Locatie Adres" value={form.locatieAdres} onChange={handleChange} name="locatieAdres"/>
                            <input type="text" placeholder="Postcode" value={form.postcode} onChange={handleChange} name="postcode"/>
                            <input type="text" placeholder="Plaats" value={form.plaats} onChange={handleChange} name="plaats"/>
                        </div>

                        {/* Bigger Text Input */}
                        <div className="form-column">
                            <textarea placeholder="Verdere Opmerkingen" value={form.opmerkingen} onChange={handleChange} name="opmerkingen"></textarea>
                        </div>

                        <PrimaryButton type="submit" onClick={handleSubmit}>Verstuur bericht</PrimaryButton>
                    </form>
                </div>
                </div>
                <div className="organization-info-sidebar">
                    <h2>Verenigings informatie:</h2>
                    <p>LOTUSKring Zuid-Oost Drenthe</p>
                    <p>KvK: 40048477</p>
                    <p>Voorzitter:<br/>A. Holteman</p>
                    <p>Secretaris:<br/>J.E. Hummel</p>
                    <p>Penningmeester:<br/>E. Prevost</p>
                    <p>Coördinator:<br/>A: Aardema</p>
                    {/*<p>Privacy:<br/>Privacy verklaring</p>*/}
                    <div className="org-map">
                        {/*<img src="your-map-image.png" alt="Map" style="width:100%;"/>*/}
                    </div>
                </div>
            </div>
        </GuestLayout>
    );
}
