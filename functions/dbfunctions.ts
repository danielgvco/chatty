import { sql } from '@vercel/postgres';
import { unstable_noStore as noStore } from 'next/cache';
import { 
    invoicesArgs, 
    createCustomerArgs, 
    callBookingArgs, 
    ticketsArgs
} from './interfaces';

export async function createInvoice(args: invoicesArgs) {
    noStore();
    try {
        const data = await sql`
        INSERT INTO invoices (customer_id, amount, status, date) VALUES
          (${args.customer_id}, ${args.amount}, 'Pending', ${args.date})
        RETURNING invoice_id;
      `;

        return data.rows;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch invoice.');
    }
}

// Customer Functions

export async function createCustomer(args: createCustomerArgs) {
    noStore();
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

// Call Booking Functions

export async function createCallBooking(args: callBookingArgs) {
    noStore();
    try {
        const data = await sql`
        INSERT INTO call_bookings (customer_id, status, purpose, booking_date, booking_time) VALUES
        (${args.customer_id}, 'Scheduled', ${args.purpose}, ${args.booking_date}, ${args.booking_time})
        RETURNING booking_id;
        `;

        return data.rows;
    } catch (error) {
        console.error('Database Error:', error);
        return 'Failed to create the call booking.';
    }
}

export async function modifyCallBooking(args: callBookingArgs) {
    noStore();
    try {
        const data = await sql`
        UPDATE call_bookings SET booking_date = ${args.booking_date}, booking_time = ${args.booking_time} WHERE booking_id = ${args.booking_id} AND customer_id = ${args.customer_id};
        `;

        return data.rows;
    } catch (error) {
        console.error('Database Error:', error);
        return 'Failed to modify the call booking.';
    }
}

export async function cancelCallBooking(args: callBookingArgs) {
    noStore();
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

// Ticket Functions

export async function createTicket(args: ticketsArgs) {
    noStore();
    try {
        const data = await sql`
        INSERT INTO tickets (customer_id, status, comment , date) VALUES
        (${args.customer_id}, 'Pending', ${args.comment}, ${args.date})
        RETURNING ticket_id;
        `;

        return data.rows;
    } catch (error) {
        console.error('Database Error:', error);
        return 'Failed to create the ticket.';
    }
}

export async function fetchTicketById(args: ticketsArgs) {
    noStore();
    try {
        const data = await sql`
        SELECT
          tickets.ticket_id,
          tickets.customer_id,
          tickets.status,
          tickets.comment,
          tickets.date
        FROM tickets
        WHERE ticket_id = ${args.ticket_id} AND customer_id = ${args.customer_id};
      `;

        return data.rows;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch ticket.');
    }
}

export async function modifyTicketStatus(args: ticketsArgs) {
    noStore();
    try {
        const data = await sql`
        UPDATE tickets SET status = ${args.status} WHERE ticket_id = ${args.ticket_id} AND customer_id = ${args.customer_id};
        `;

        return data.rows;
    } catch (error) {
        console.error('Database Error:', error);
        return 'Failed to modify the ticket status.';
    }
}

export async function cancelTicket(args: ticketsArgs) {
    noStore();
    try {
        const data = await sql`
        UPDATE tickets SET status = 'Cancelled' WHERE ticket_id = ${args.ticket_id} and customer_id = ${args.customer_id};
        `;

        return data.rows;
    } catch (error) {
        console.error('Database Error:', error);
        return 'Failed to cancel the ticket.';
    }
}