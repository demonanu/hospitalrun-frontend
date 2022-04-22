"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    scheduling: {
        label: 'Расписание',
        appointments: {
            label: 'Назначения',
            new: 'Новое назначение',
            schedule: 'Расписание назначений',
            editAppointment: 'Редактировать назначение',
            createAppointment: 'Создать назначение',
            deleteAppointment: 'Удалить назначение',
            viewAppointment: 'Просмотр назначения',
            updateAppointment: 'Обновить назначение',
        },
        appointment: {
            startDate: 'Дата начала',
            endDate: 'Дата окончания',
            location: 'Место',
            type: 'Тип',
            types: {
                checkup: 'Плановое',
                emergency: 'Экстренное',
                followUp: 'Последующее',
                routine: 'Обычное',
                walkIn: 'При посещении',
            },
            errors: {
                createAppointmentError: 'Невозможно создать назначение.',
                updateAppointmentError: 'Невозможно обновить назначение.',
                patientRequired: 'Необходимо указать пациента.',
                startDateMustBeBeforeEndDate: 'Дата начала не может быть позже даты конца.',
            },
            reason: 'Причина',
            patient: 'Пациент',
            deleteConfirmationMessage: 'Вы уверены, что хотите удалить назначение?',
            successfullyCreated: 'Назначение успешно создано.',
            successfullyDeleted: 'Назначение успешно удалено.',
            successfullyUpdated: 'Назначение успешно изменено.',
        },
    },
};