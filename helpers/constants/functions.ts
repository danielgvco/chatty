import type { ChatCompletionCreateParams } from '@/node_modules/openai/resources/chat';

export const functions: ChatCompletionCreateParams.Function[] = [
    {
        name: 'get_current_weather',
        description: 'Get the current weather',
        parameters: {
            type: 'object',
            properties: {
                location: {
                    type: 'string',
                    description: 'The city and state, e.g. San Francisco, CA',
                },
                format: {
                    type: 'string',
                    enum: ['celsius', 'fahrenheit'],
                    description:
                        'The temperature unit to use. Infer this from the users location.',
                },
            },
            required: ['location', 'format'],
        },
    },
    {
        name: 'getCurrentTime',
        description: 'Get the current weather',
        parameters: {
            type: 'object',
            properties: {},
            required: [],
        },
    },
    {
        name: 'fetchRevenue',
        description: 'Get all the revenue data',
        parameters: {
            type: 'object',
            properties: {
                format: {
                    type: 'string',
                },
            },
            required: ['format'],
        },
    },
    {
        name: 'fetchInvoiceById',
        description: 'Fetch an invoice by its ID',
        parameters: {
            type: 'object',
            properties: {
                invoice_id: {
                    type: 'string',
                    description: "The ID of the invoice to fetch, only give the number as a prop, e.g. 5 instead of { invoice_id: '5' }",
                },
                customer_id: {
                    type: 'string',
                    description: "The ID of the customer to fetch, only give the number as a prop, e.g. 5 instead of { customer_id: '5' }",
                },
                format: {
                    type: 'string',
                    enum: ['1', '2', '3', '4'],
                    description:
                        'how all the IDs must be formatted, e.g. 1, 2, 3, 4, etc.',
                },
            },
            required: ['invoice_id', 'customer_id', 'format'],
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
                booking_date: {
                    type: 'string',
                    description: 'The date of the booking',
                },
                booking_time: {
                    type: 'string',
                    description: 'The time of the booking',
                },
                purpose: {
                    type: 'string',
                    description: 'The purpose of the call booking',
                },
                format: {
                    type: 'string',
                    enum: ['1', '2', '3', '4'],
                    description:
                        'how all the IDs must be formatted, e.g. 1, 2, 3, 4, etc.',
                },
            },
            required: ['customer_id', 'booking_date', 'booking_time', 'purpose', 'format'],
        },
    },
    {
        name: 'modifyCallBooking',
        description: 'Modify the date and time of the call booking',
        parameters: {
            type: 'object',
            properties: {
                booking_date: {
                    type: 'string',
                    description: 'The new booking date',
                },
                booking_time: {
                    type: 'string',
                    description: 'The new booking time',
                },
                booking_id: {
                    type: 'string',
                    description: 'The ID of the booking to modify',
                },
                customer_id: {
                    type: 'string',
                    description: 'The ID of the customer who made the booking',
                },
                format: {
                    type: 'string',
                    enum: ['1', '2', '3', '4'],
                    description:
                        'how all the IDs must be formatted, e.g. 1, 2, 3, 4, etc.',
                },
            },
            required: ['booking_date', 'booking_time', 'booking_id', 'customer_id', 'format'],
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
                format: {
                    type: 'string',
                    enum: ['1', '2', '3', '4'],
                    description:
                        'how all the IDs must be formatted, e.g. 1, 2, 3, 4, etc.',
                },
            },
            required: ['booking_id', 'customer_id', 'format'],
        },
    }
];