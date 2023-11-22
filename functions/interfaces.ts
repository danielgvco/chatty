// Invoices

export interface invoicesArgs {
    invoice_id: string;
    customer_id: string;
    amount: number;
    status: 'Paid' | 'Pending' | 'Unpaid' | 'Cancelled' | string;
    date: string;
}

// Customers

export interface createCustomerArgs {
    name: string;
    email: string;
}

// Call Bookings

export interface callBookingArgs {
    booking_id: string;
    customer_id: string;
    purpose: string;
    status: 'Completed' | 'Scheduled' | 'Cancelled' | string;
    booking_date: string;
    booking_time: string;
}

// Tickets

export interface ticketsArgs {
    ticket_id: string;
    customer_id: string;
    status: 'Solved'| 'Pending'| 'Cancelled' | string;
    comment: string;
    date: string;
}