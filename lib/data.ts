import { sql } from '@vercel/postgres';
import {
  CustomerField,
  CustomersTable,
  InvoiceForm,
  InvoicesTable,
  LatestInvoiceRaw,
  User,
  Revenue,
} from './definitions';
import { unstable_noStore as noStore } from 'next/cache';
import { formatCurrency } from './utils';

export async function fetchRevenue() {
  noStore();
  try {
    const data = await sql<Revenue>`SELECT * FROM revenue`;

    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch revenue data.');
  }
}

export async function fetchLatestInvoices() {
  try {
    const data = await sql<LatestInvoiceRaw>`
      SELECT invoices.amount, customers.name, customers.image_url, customers.email, invoices.id
      FROM invoices
      JOIN customers ON invoices.customer_id = customers.id
      ORDER BY invoices.date DESC
      LIMIT 5`;

    const latestInvoices = data.rows.map((invoice) => ({
      ...invoice,
      amount: formatCurrency(invoice.amount),
    }));
    return latestInvoices;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch the latest invoices.');
  }
}

//////////////////////////


export async function fetchInvoices() {
  noStore();
  try {
    const data = await sql`
      SELECT
        *
      FROM invoices
      ORDER BY invoice_id DESC;
    `;

    console.log("Database: Invoices Loaded Successfully");
    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch invoice.');
  }
}

export async function fetchInvoicesByStatus(invoiceStatus: string) {
  noStore();
  try {
    const data = await sql`
      SELECT
        *
      FROM invoices
      WHERE invoices.status = ${invoiceStatus}
      ORDER BY invoice_id DESC;
    `;

    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch invoice.');
  }
}

export async function fetchCustomers() {
  noStore();
  try {
    const data = await sql`
    SELECT
      customers.id,
      customers.name,
      customers.email
    FROM customers
    ORDER BY name ASC;
    `;

    console.log("Database: Customers Loaded Successfully");
    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch invoice.');
  }
}

export async function fetchTickets() {
  noStore();
  try {
    const data = await sql`
    SELECT
      tickets.ticket_id,
      tickets.customer_id,
      tickets.status,
      tickets.comment
    FROM tickets
    ORDER BY ticket_id ASC;
    `;

    console.log("Database: Tickets Loaded Successfully");
    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch ticket.');
  }
}

export async function fetchBookings() {
  noStore();
  try {
    const data = await sql`
    SELECT
      call_bookings.booking_id,
      call_bookings.customer_id,
      call_bookings.status,
      call_bookings.purpose,
      call_bookings.booking_date,
      call_bookings.booking_time
    FROM call_bookings
    ORDER BY booking_date ASC, booking_time ASC;
    `;

    console.log("Database: Bookings Loaded Successfully");
    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch booking.');
  }
}