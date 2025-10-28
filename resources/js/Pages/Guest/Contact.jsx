import '/resources/css/Welcome.css';
import GuestLayout from '@/Layouts/GuestLayout.jsx';
import {Head} from '@inertiajs/react';
import PrimaryButton from "@/Components/PrimaryButton.jsx";
import {useState} from "react";
import {router} from "@inertiajs/react";

export default function Request() {
    const [form, setForm] = useState({

    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        router.get('contact-submit', form);
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
                                <input type="text" placeholder="Uw email" value={form.naamContact} onChange={handleChange} name="naamContact"/>
                                <input type="text" placeholder="Uw naam" value={form.emailContact} onChange={handleChange} name="emailContact"/>
                                <input type="text" placeholder="Onderwerp" value={form.telefoonContact} onChange={handleChange} name="telefoonContact"/>
                            </div>

                            <div className="form-column">
                                <textarea placeholder="Verdere Opmerkingen" value={form.opmerkingen} onChange={handleChange} name="opmerkingen"></textarea>
                            </div>

                            <PrimaryButton type="submit" onClick={handleSubmit}>Verstuur bericht</PrimaryButton>
                        </form>
                    </div>
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
