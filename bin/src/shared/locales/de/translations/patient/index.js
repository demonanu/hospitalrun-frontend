"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    patient: {
        code: 'Patient Code',
        firstName: 'Vorname',
        lastName: 'Nachname',
        suffix: 'Suffix',
        prefix: 'Präfix',
        givenName: 'Rufname',
        familyName: 'Familienname',
        dateOfBirth: 'Geburtsdatum',
        approximateDateOfBirth: 'Ungefähres Geburtsdatum',
        age: 'Alter',
        approximateAge: 'Ungefähres Alter',
        placeOfBirth: 'Geburtsort',
        sex: 'Geschlecht',
        phoneNumber: 'Telefonnummer',
        email: 'E-mail',
        address: 'Addresse',
        occupation: 'Beruf',
        type: 'Patiententyp',
        preferredLanguage: 'Bevorzugte Sprache',
        basicInformation: 'Grundinformation',
        generalInformation: 'Allgemeine Information',
        contactInformation: 'Kontakt Information',
        unknownDateOfBirth: 'Unbekannt',
        relatedPerson: 'Verwandte Person',
        relatedPersons: {
            error: {
                unableToAddRelatedPerson: 'Neue verwandte Person kann nicht hinzugefügt werden.',
                relatedPersonRequired: 'Verwandte Person ist erforderlich.',
                relationshipTypeRequired: 'Beziehungstyp ist erforderlich.',
            },
            label: 'Verwandte Personen',
            new: 'Neue Verwandte Person',
            add: 'Verwandte Person hinzufügen',
            relationshipType: 'Beziehungstyp',
            warning: {
                noRelatedPersons: 'Keine verwandten Personen',
            },
            addRelatedPersonAbove: 'Fügen Sie über den Button oben eine verwandte Person hinzu.',
        },
        appointments: {
            new: 'Termin hinzufügen',
        },
        allergies: {
            label: 'Allergien',
            allergyName: 'Name der Allergie',
            new: 'Allergie hinzufügen',
            error: {
                nameRequired: 'Name ist erforderlich.',
                unableToAdd: 'Allergie konnte nicht hinzugefügt werden.',
            },
            warning: {
                noAllergies: 'Keine Allergien',
            },
            addAllergyAbove: 'Fügen Sie über den Button oben eine Allergie hinzu.',
            successfullyAdded: 'Erfolgreich eine neue Allergie hinzugefügt!',
        },
        diagnoses: {
            label: 'Diagnosen',
            new: 'Diagnose hinzufügen',
            diagnosisName: 'Name',
            diagnosisDate: 'Datum',
            warning: {
                noDiagnoses: 'Keine Diagnosen',
            },
            error: {
                nameRequired: 'Name der Diagnose ist erforderlich.',
                dateRequired: 'Diagnosedatum ist erforderlich.',
                unableToAdd: 'Diagnose konnte nicht hinzugefügt werden.',
            },
            addDiagnosisAbove: 'Fügen Sie über den Button oben eine Diagnose hinzu.',
            successfullyAdded: 'Erfolgreich eine neue Diagnose hinzugefügt!',
        },
        note: 'Notizen',
        notes: {
            label: 'Notizen',
            new: 'Neue Notiz hinzufügen',
            warning: {
                noNotes: 'Keine Notizen',
            },
            error: {
                noteRequired: 'Notiz ist erforderlich.',
                unableToAdd: 'Unable to add new note.',
            },
            addNoteAbove: 'Fügen Sie über den Button oben eine Notiz hinzu.',
        },
        labs: {
            label: 'Labore',
            new: 'Neues Labor hinzufügen',
            warning: {
                noLabs: 'Keine Labore',
            },
            noLabsMessage: 'Keine Laboranfragen für diese Person.',
        },
        medications: {
            label: 'Medications',
            new: 'Neue Medikamente hinzufügen',
            warning: {
                noMedications: 'Keine Medikamente',
            },
            noMedicationsMessage: 'Keine Medikamentenanfragen für diese Person.',
        },
        types: {
            charity: 'Charity',
            private: 'Privat',
        },
        errors: {
            createPatientError: 'Neuer Patient konnte nicht erstellt werden.',
            updatePatientError: 'Patient konnte nicht aktualisiert werden.',
            patientGivenNameFeedback: 'Rufname ist erforderlich.',
            patientDateOfBirthFeedback: 'Das Geburtsdatum kann nicht in der Zukunft liegen',
            patientNumInSuffixFeedback: 'Kann keine Zahlen enthalten.',
            patientNumInPrefixFeedback: 'Kann keine Zahlen enthalten.',
            patientNumInFamilyNameFeedback: 'Kann keine Zahlen enthalten.',
            patientNumInPreferredLanguageFeedback: 'Kann keine Zahlen enthalten.',
            invalidEmail: 'Muss eine gültige E-Mail sein.',
            invalidPhoneNumber: 'Muss eine gültige Telefonnummer sein.',
        },
    },
};
