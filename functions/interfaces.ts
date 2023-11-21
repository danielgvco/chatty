export interface fetchInvoiceByIdArgs {
    invoice_id: string;
    customer_id: string;
    format: '1' | '2' | '3' | '4' | string;
}

export interface fetchInvoicesByCustomerIdArgs {
    invoice_id: string;
    customer_id: string;
    format: '1' | '2' | '3' | '4' | string;
}

export interface createCustomerArgs {
    name: string;
    email: string;
}

export interface createCallBookingArgs {
    customer_id: string;
    booking_date: string;
    booking_time: string;
    purpose: string;
    format: '1' | '2' | '3' | '4' | string;
}

export interface modifyCallBookingArgs {
    booking_id: string;
    customer_id: string;
    booking_date: string;
    booking_time: string;
    format: '1' | '2' | '3' | '4' | string;
}