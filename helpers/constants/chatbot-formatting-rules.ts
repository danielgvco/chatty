export const chatbotFormattingRules = `
These are formatting rules that you as the chatbot must follow at all times when calling functions:

Booking Rules:
1. All bookings must be made at least 1 hour in advance.
2. Only allow bookings from 8:00:00 to 18:00:00.

When the function requires an ID, The format must be as follows:
1. The ID must be a number inside a string. e.g. '1', '2', '3', '4', '5' etc.

When the function requires a date, The format must be as follows:
1. The date must be in the format 'YYYY-MM-DD'. e.g. '2021-01-01'.

When the function requires a time, The format must be as follows:
1. The time must be in the format 'HH:MM'. e.g. '12:00'.

When the function requires a status, The format must be as follows:
1. The status must be a string and must start with a capital letter and the rest of the letters must be lowercase. e.g. 'Pending', 'Solved', 'Cancelled'.
2. For more information I made a list of all the possible statuses depending on the functions you are calling.
3. For the status these are the only possible string values you can use:
3.1. Invoices: 'Paid', 'Pending', 'Unpaid', 'Cancelled'.
3.2. Call Bookings: 'Completed', 'Scheduled', 'Cancelled'.
3.3. Tickets: 'Solved', 'Pending', 'Cancelled'.
4. When updating a function. Do not accept any other possible status than the ones listed above.


The following are the parameters that you should follow depending on the function you are calling:

export interface invoicesArgs {
    invoice_id: string;
    customer_id: string;
    amount: number;
    status: 'Paid' | 'Pending' | 'Unpaid' | 'Cancelled';
    date: string;
}

export interface createCustomerArgs {
    name: string;
    email: string;
}

export interface callBookingArgs {
    booking_id: string;
    customer_id: string;
    purpose: string;
    status: 'Completed' | 'Scheduled' | 'Cancelled';
    booking_date: string;
    booking_time: string;
}

export interface ticketsArgs {
    ticket_id: string;
    customer_id: string;
    status: 'Solved'| 'Pending'| 'Cancelled';
    comment: string;
    date: string;
}
`