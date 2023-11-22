import type { ChatCompletionCreateParams } from '@/node_modules/openai/resources/chat';

export const functions: ChatCompletionCreateParams.Function[] = [
    {
        name: 'createInvoice',
        description: 'Create a new invoice',
        parameters: {
            type: 'object',
            properties: {
                customer_id: {
                    type: 'string',
                    description: 'The ID of the customer',
                },
                amount: {
                    type: 'number',
                    description: 'The amount of the invoice',
                },
                date: {
                    type: 'string',
                    description: 'The current date of creation of the invoice',
                },
            },
            required: ['customer_id', 'amount', 'date'],
        },
    },
    {
        name: 'createCustomer',
        description: 'Create a new customer',
        parameters: {
            type: 'object',
            properties: {
                name: {
                    type: 'string',
                    description: 'The name of the customer',
                },
                email: {
                    type: 'string',
                    description: 'The email of the customer',
                },
            },
            required: ['name', 'email'],
        },
    },
    {
        name: 'createCallBooking',
        description: 'Create a new call booking',
        parameters: {
            type: 'object',
            properties: {
                customer_id: {
                    type: 'string',
                    description: 'The ID of the customer making the booking',
                },
                purpose: {
                    type: 'string',
                    description: 'The purpose of the call booking',
                },
                booking_date: {
                    type: 'string',
                    description: 'The date of the booking',
                },
                booking_time: {
                    type: 'string',
                    description: 'The time of the booking',
                },
            },
            required: ['customer_id', 'purpose', 'booking_date', 'booking_time'],
        },
    },
    {
        name: 'modifyCallBooking',
        description: 'Modify the date and time of the call booking',
        parameters: {
            type: 'object',
            properties: {
                booking_id: {
                    type: 'string',
                    description: 'The ID of the booking to modify',
                },
                customer_id: {
                    type: 'string',
                    description: 'The ID of the customer who made the booking',
                },
                booking_date: {
                    type: 'string',
                    description: 'The new booking date',
                },
                booking_time: {
                    type: 'string',
                    description: 'The new booking time',
                },
            },
            required: ['booking_id', 'customer_id', 'booking_date', 'booking_time'],
        },
    },
    {
        name: 'cancelCallBooking',
        description: 'Cancel a call booking',
        parameters: {
            type: 'object',
            properties: {
                booking_id: {
                    type: 'string',
                    description: 'The ID of the booking to cancel',
                },
                customer_id: {
                    type: 'string',
                    description: 'The ID of the customer who made the booking',
                },
            },
            required: ['booking_id', 'customer_id'],
        },
    },
    {
        name: 'createTicket',
        description: 'Create a new ticket',
        parameters: {
            type: 'object',
            properties: {
                customer_id: {
                    type: 'string',
                    description: 'The ID of the customer',
                },
                comment: {
                    type: 'string',
                    description: 'The comment for the ticket',
                },
                date: {
                    type: 'string',
                    description: 'The date of the ticket',
                },
            },
            required: ['customer_id', 'comment', 'date'],
        },
    },
    {
        name: 'fetchTicketById',
        description: 'Fetch a ticket by its ID',
        parameters: {
            type: 'object',
            properties: {
                ticket_id: {
                    type: 'string',
                    description: 'The ID of the ticket to fetch',
                },
                customer_id: {
                    type: 'string',
                    description: 'The ID of the customer',
                },
            },
            required: ['ticket_id', 'customer_id'],
        },
    },
    {
        name: 'modifyTicketStatus',
        description: 'Modify the status of a ticket',
        parameters: {
            type: 'object',
            properties: {
                ticket_id: {
                    type: 'string',
                    description: 'The ID of the ticket to modify',
                },
                customer_id: {
                    type: 'string',
                    description: 'The ID of the customer',
                },
                status: {
                    type: 'string',
                    description: 'The new status of the ticket',
                },
            },
            required: ['ticket_id', 'customer_id', 'status'],
        },
    },
    {
        name: 'cancelTicket',
        description: 'Cancel a ticket',
        parameters: {
            type: 'object',
            properties: {
                ticket_id: {
                    type: 'string',
                    description: 'The ID of the ticket to cancel',
                },
                customer_id: {
                    type: 'string',
                    description: 'The ID of the customer',
                },
            },
            required: ['ticket_id', 'customer_id'],
        },
    }
];