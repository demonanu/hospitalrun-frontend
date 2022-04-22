"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    patient: {
        code: 'Código do paciente',
        firstName: 'Nome',
        lastName: 'Sobrenome',
        suffix: 'Sufixo',
        prefix: 'Prefixo',
        givenName: 'Nome Próprio',
        familyName: 'Nome de Família',
        dateOfBirth: 'Data de Nascimento',
        approximateDateOfBirth: 'Data de Nascimento Aproximada',
        age: 'Idade',
        approximateAge: 'Idade Aproximada',
        placeOfBirth: 'Local de Nascimento',
        sex: 'Sexo',
        phoneNumber: 'Número de Telefone',
        email: 'E-mail',
        address: 'Endereço',
        occupation: 'Ocupação',
        type: 'Tipo de Paciente',
        preferredLanguage: 'Idioma de Preferência',
        basicInformation: 'Informação Básica',
        generalInformation: 'Informação Geral',
        contactInformation: 'Informação de Contato',
        unknownDateOfBirth: 'Data de Nascimento Desconhecida',
        relatedPerson: 'Pessoa Relacionada',
        relatedPersons: {
            error: {
                unableToAddRelatedPerson: 'Impossibilidade de adicionar nova pessoa relacionadas.',
                relatedPersonRequired: 'Pessoa relacionada é necessária.',
                relationshipTypeRequired: 'Tipo de relacionamento é necessário.',
            },
            label: 'Pessoas Relacionadas',
            new: 'Nova Pessoa Relacionada',
            add: 'Addicione Pessoa Relacionada',
            relationshipType: 'Tipo de Relacionamento',
            warning: {
                noRelatedPersons: 'Sem pessoas relacionadas',
            },
            addRelatedPersonAbove: 'Addicione uma pessoa relacionada utilizando o botão acima.',
        },
        appointments: {
            new: 'Adicionar um compromisso',
        },
        allergies: {
            label: 'Alergias',
            allergyName: 'Nome da Alergia',
            new: 'Adicionar alergia',
            error: {
                nameRequired: 'Nome da alergia é necessário.',
                unableToAdd: 'Impossibilidade de adicionar alergia.',
            },
            warning: {
                noAllergies: 'Sem alergias',
            },
            addAllergyAbove: 'Adicione uma alergia utilizando o botão acima.',
            successfullyAdded: 'Uma nova alergia foi adicionada com sucesso!',
        },
        diagnoses: {
            label: 'Diagnósticos',
            new: 'Novo diagnósticos',
            diagnosisName: 'Nome do diagnóstico',
            diagnosisDate: 'Data do diagnóstico',
            warning: {
                noDiagnoses: 'Sem diagnósticos',
            },
            error: {
                nameRequired: 'Nome do diagnóstico é necessário.',
                dateRequired: 'Data do diagnóstico é necessária.',
            },
            addDiagnosisAbove: 'Adicione um diagnóstico utilizando o botão acima.',
            successfullyAdded: 'Um novo diagnóstico foi adicionado com sucesso!',
        },
        note: 'Nota',
        notes: {
            label: 'Notas',
            new: 'Adicionar novas notas',
            warning: {
                noNotes: 'Sem Notas',
            },
            error: {
                noteRequired: 'Uma nota é necessário.',
                unableToAdd: 'Impossibilidade adicionar uma nova nota.',
            },
            addNoteAbove: 'Adicione uma nota utilizando o botão acima.',
        },
        medications: {
            label: 'Remédios',
            new: 'Adicionar novo medicamento',
            warning: {
                noMedications: 'Nomejikachion s',
            },
            noMedicationsMessage: 'Nenhum pedido de medicamentos para esta pessoa.',
        },
        types: {
            charity: 'Caridade',
            private: 'Particular',
        },
        errors: {
            createPatientError: 'Não foi possível criar um paciente.',
            updatePatientError: 'Não foi possível atualizar o paciente',
            patientGivenNameFeedback: 'Nome do Paciente é necessário.',
            patientDateOfBirthFeedback: 'Data de Nascimento não pode ser maior que hoje.',
        },
    },
};
