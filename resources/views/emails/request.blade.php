@component('mail::message')
# New Request

    **Naam Contact:** {{ $data['naamContact'] }}

    **Email Contact:** {{ $data['emailContact'] }}

    **Telefoon Contact:** {{ $data['telefoonContact'] }}

    **Email Facturatie:** {{ $data['emailFacturatie'] }}

    **Inzet Omschrijving:** {{ $data['inzetOmschrijving'] }}

    **Bedrijfsnaam:** {{ $data['bedrijf'] }}

    **naam Inzet:** {{ $data['naamInzet'] }}

    **Datum Inzet:** {{ $data['datumInzet'] }}

    **begin Tijd:** {{ $data['beginTijd'] }}

    **eind Tijd:** {{ $data['eindTijd'] }}

    **Aantal Lotus:** {{ $data['aantalLotus'] }}

    **Adres:** {{ $data['locatieAdres'] }}

    **Postcode:** {{ $data['postcode'] }}

    **Plaats:** {{ $data['plaats'] }}

    **Opmerkingen:** {{ $data['opmerkingen'] }}

@endcomponent
