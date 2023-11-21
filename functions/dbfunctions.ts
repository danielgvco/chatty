import { sql } from '@vercel/postgres';
import { fetchInvoiceByIdArgs, fetchInvoicesByCustomerIdArgs, createCustomerArgs, createCallBookingArgs, modifyCallBookingArgs } from './interfaces';

export async function fetchRevenue() {
    try {
        const data = await sql`SELECT * FROM revenue`;

        console.log('Data fetch completed.');

        return data.rows;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch revenue data.');
    }
}

export async function fetchInvoiceById(args: fetchInvoiceByIdArgs) {
    try {
        const data = await sql`
        SELECT
          invoices.invoice_id,
          invoices.customer_id,
          invoices.amount,
          invoices.status
        FROM invoices
        WHERE invoice_id = ${args.invoice_id} AND customer_id = ${args.customer_id};
      `;

        return data.rows;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch invoice.');
    }
}

export async function fetchInvoicesByCustomerId(args: fetchInvoicesByCustomerIdArgs) {
    try {
        const data = await sql`
        SELECT
          invoices.invoice_id,
          invoices.customer_id,
          invoices.amount,
          invoices.status
        FROM invoices
        WHERE customer_id = ${args.customer_id};
      `;

        return data.rows;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch invoice.');
    }
}

export async function createCustomer(args: createCustomerArgs) {
    try {
        const data = await sql`
        INSERT INTO customers (name, email) VALUES
        (${args.name}, ${args.email})
        RETURNING id;
        `;

        return data.rows;
    } catch (error) {
        console.error('Database Error:', error);
        return 'Failed to create the customer.';
    }
}

export async function createCallBooking(args: createCallBookingArgs) {
    try {
        const data = await sql`
        INSERT INTO call_bookings (customer_id, booking_date, booking_time, purpose) VALUES
        (${args.customer_id}, ${args.booking_date}, ${args.booking_time}, ${args.purpose})
        RETURNING booking_id;
        `;

        return data.rows;
    } catch (error) {
        console.error('Database Error:', error);
        return 'Failed to create the call booking.';
    }
}

export async function modifyCallBooking(args: modifyCallBookingArgs) {
    try {
        const data = await sql`
        UPDATE call_bookings SET booking_date = ${args.booking_date}, booking_time = ${args.booking_time}, status = 'Rescheduled' WHERE booking_id = ${args.booking_id} AND customer_id = ${args.customer_id};
        `;

        return data.rows;
    } catch (error) {
        console.error('Database Error:', error);
        return 'Failed to modify the call booking.';
    }
}

export async function cancelCallBooking(args: modifyCallBookingArgs) {
    try {
        const data = await sql`
        UPDATE call_bookings SET status = 'Cancelled' WHERE booking_id = ${args.booking_id} and customer_id = ${args.customer_id};
        `;

        return data.rows;
    } catch (error) {
        console.error('Database Error:', error);
        return 'Failed to cancel the call booking.';
    }
}

export async function getCurrentTime() {
    try {
        const data = await sql`
        SELECT NOW();
        `;

        return data.rows;
    } catch (error) {
        console.error('Database Error:', error);
        return 'Failed to get the current time.';
    }
}