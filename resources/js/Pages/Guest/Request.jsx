import '/resources/css/Welcome.css';
import GuestLayout from '@/Layouts/GuestLayout.jsx';
import {Head} from '@inertiajs/react';
import PrimaryButton from "@/Components/PrimaryButton.jsx";
import {useEffect, useState} from "react";
import {router} from "@inertiajs/react";

export default function Request() {
    const [showPdf, setShowPdf] = useState(false);
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

    useEffect(() => {
        const emailSpan = document.getElementById("request-email");
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
                    <h1>Lotus Aanvragen</h1>
                    <p>Momenteel wordt er aan deze pagina gewerkt wegens veiligheids redenen. U kunt een mail sturen naar:</p>
                    <span id="request-email"></span>


                    <p>
                        Vergeet niet de algemene voorwaarden te lezen.<br/>{" "}
                        <button
                            type="button"
                            onClick={e => { e.preventDefault(); setShowPdf(true); }}
                            style={{
                                background: "#007bff",
                                color: "#fff",
                                border: "none",
                                borderRadius: "4px",
                                padding: "6px 16px",
                                cursor: "pointer",
                                fontSize: "1rem"
                            }}
                        >
                            Bekijk PDF
                        </button>
                    </p>
                    {showPdf && (
                        <div
                            style={{
                                position: "fixed",
                                top: 0,
                                left: 0,
                                width: "100vw",
                                height: "100vh",
                                background: "rgba(0,0,0,0.7)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                zIndex: 1000
                            }}
                            onClick={() => setShowPdf(false)}
                        >
                            <div
                                style={{
                                    background: "#fff",
                                    padding: 20,
                                    borderRadius: 8,
                                    maxWidth: "90vw",
                                    maxHeight: "90vh",
                                    boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
                                    position: "relative"
                                }}
                                onClick={e => e.stopPropagation()}
                            >
                                <button
                                    style={{
                                        position: "absolute",
                                        top: 10,
                                        right: 10,
                                        fontSize: 18,
                                        background: "none",
                                        border: "none",
                                        cursor: "pointer"
                                    }}
                                    onClick={() => setShowPdf(false)}
                                    aria-label="Close"
                                >
                                    &#10005;
                                </button>
                                <iframe
                                    src="/pdfs/Voorwaarden%20voor%20inzet.pdf"
                                    width="800px"
                                    height="600px"
                                    title="PDF Document"
                                    style={{ border: "none" }}
                                />
                            </div>
                        </div>
                    )}
                    {/*<form className="request-form">*/}
                    {/*    /!* 7 Text Inputs in a Column *!/*/}
                    {/*    <div className="form-column">*/}
                    {/*        <input type="text" placeholder="Naam Contact" value={form.naamContact} onChange={handleChange} name="naamContact"/>*/}
                    {/*        <input type="text" placeholder="Email Contact" value={form.emailContact} onChange={handleChange} name="emailContact"/>*/}
                    {/*        <input type="text" placeholder="Telefoon nummer contact" value={form.telefoonContact} onChange={handleChange} name="telefoonContact"/>*/}
                    {/*        <input type="text" placeholder="Email Facturatie (optioneel)" value={form.emailFacturatie} onChange={handleChange} name="emailFacturatie"/>*/}
                    {/*        <input type="text" placeholder="De inzet waar het over gaat" value={form.inzetOmschrijving} onChange={handleChange} name="inzetOmschrijving"/>*/}
                    {/*        <input type="text" placeholder="Bedrijf / Verenigings naam" value={form.bedrijf} onChange={handleChange} name="bedrijf"/>*/}
                    {/*    </div>*/}

                    {/*    /!* 1 Input in a Row of Two *!/*/}
                    {/*    <div className="form-row">*/}
                    {/*        <input type="text" placeholder="Naam inzet" value={form.naamInzet} onChange={handleChange} name="naamInzet"/>*/}
                    {/*        <input type="text" placeholder="Datum Inzet (dd-mm-jjjj)" value={form.datumInzet} onChange={handleChange} name="datumInzet"/>*/}
                    {/*    </div>*/}

                    {/*    /!* 2 Inputs in a Row of Three *!/*/}
                    {/*    <div className="form-row">*/}
                    {/*        <input type="text" placeholder="Begin Tijd Inzet (uu:mm)" value={form.beginTijd} onChange={handleChange} name="beginTijd"/>*/}
                    {/*        <input type="text" placeholder="Eind Tijd Inzet (uu:mm)" value={form.eindTijd} onChange={handleChange} name="eindTijd"/>*/}
                    {/*        <input type="number" placeholder="Aantal LOTUS" value={form.aantalLotus} onChange={handleChange} name="aantalLotus"/>*/}
                    {/*    </div>*/}
                    {/*    <div className="form-row">*/}
                    {/*        <input type="text" placeholder="Locatie Adres" value={form.locatieAdres} onChange={handleChange} name="locatieAdres"/>*/}
                    {/*        <input type="text" placeholder="Postcode" value={form.postcode} onChange={handleChange} name="postcode"/>*/}
                    {/*        <input type="text" placeholder="Plaats" value={form.plaats} onChange={handleChange} name="plaats"/>*/}
                    {/*    </div>*/}

                    {/*    /!* Bigger Text Input *!/*/}
                    {/*    <div className="form-column">*/}
                    {/*        <textarea placeholder="Verdere Opmerkingen" value={form.opmerkingen} onChange={handleChange} name="opmerkingen"></textarea>*/}
                    {/*    </div>*/}

                    {/*    <PrimaryButton type="submit" onClick={handleSubmit}>Verstuur bericht</PrimaryButton>*/}
                    {/*</form>*/}
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
