import '/resources/css/Welcome.css';
import GuestLayout from '@/Layouts/GuestLayout.jsx';
import {Head} from '@inertiajs/react';
import PrimaryButton from "@/Components/PrimaryButton.jsx";
import {useState} from "react";
import {router} from "@inertiajs/react";
import { useEffect } from "react";

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
        router.post('contact-submit', form, {
            onSuccess: () => {
                alert("Uw bericht is succesvol verzonden.");
                setForm({});
            },
            onError: () => {
                alert("Er is een fout opgetreden bij het verzenden van uw bericht. Probeer het later opnieuw.");
            }
        });
    };

    useEffect(() => {
        const emailSpan = document.getElementById("contact-email");
        if (emailSpan) {
            const email = String.fromCharCode(
                    97, 46, 97, 97, 114, 100, 101, 109, 97
                ) + "@" +
                String.fromCharCode(
                    104, 111, 109, 101, 46, 110, 108
                );
            emailSpan.innerHTML = `<a href="mailto:${email}">${email}</a>`;
        }
    }, []);


    return (
        <GuestLayout>
            <Head title="Lotus Aanvragen"/>
            <div className="request-form-container">
                <div className={"request-form-section-center"}>
                    <div className="request-form-section">
                        <h1>Contact</h1>
                        {/*<p>Momenteel wordt er aan deze pagina gewerkt wegens veiligheids redenen. U kunt een mail sturen naar:</p>*/}
                        {/*<span id="contact-email"></span>*/}
                        <form className="request-form">
                            {/* 7 Text Inputs in a Column */}
                            <div className="form-column">
                                <input type="text" placeholder="Uw email" value={form.naamContact} onChange={handleChange} name="nameContact"/>
                                <input type="text" placeholder="Uw naam" value={form.emailContact} onChange={handleChange} name="emailContact"/>
                                <input type="text" placeholder="Onderwerp" value={form.telefoonContact} onChange={handleChange} name="subjectContact"/>
                            </div>

                            <div className="form-column">
                                <textarea placeholder="Vraag" value={form.opmerkingen} onChange={handleChange} name="messageContact"></textarea>
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
