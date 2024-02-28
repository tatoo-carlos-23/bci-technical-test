import { ITbAction, ITbColumn } from "@shared-components";

export const dataHeaders: ITbColumn[] = [
    {
        id: 'pokemon_name',
        label: 'Nombre del pokemon'
    },
    {
        id: 'form',
        label: 'Form'
    },
    {
        id: 'type',
        label: 'Tipos',
        columnConfig: {
            type: 'chip'
        }
    }
];

export const dataActions: ITbAction[] = [
    {
        iconName: 'delete',
        messageTooltip: 'Eliminar pokemon',
        color: '#f5222d'
    },
    {
        iconName: 'edit',
        messageTooltip: 'Editar pokemon',
        color: '#52c41a'
    }

];