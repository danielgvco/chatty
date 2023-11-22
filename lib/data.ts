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
      SELECT invoices.amount, customers.name, customers.email, invoices.id
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

export async function countRowsInTable(dbTable: 'customers' | 'invoices' | 'revenue' | 'call_bookings' | 'tickets') {
  noStore();
  try {
    let data;
    switch (dbTable) {
      case 'customers':
        data = await sql<{ count: number }>`SELECT COUNT(*) FROM customers`;
        break;
      case 'invoices':
        data = await sql<{ count: number }>`SELECT COUNT(*) FROM invoices WHERE status = 'Pending'`;
        break;
      case 'revenue':
        data = await sql<{ count: number }>`SELECT COUNT(*) FROM revenue`;
        break;
      case 'call_bookings':
        data = await sql<{ count: number }>`SELECT COUNT(*) FROM call_bookings WHERE status = 'Scheduled'`;
        break;
      case 'tickets':
        data = await sql<{ count: number }>`SELECT COUNT(*) FROM tickets WHERE status = 'Pending'`;
        break;
      default:
        throw new Error(`Invalid table name: ${dbTable}`);
    }
    return data.rows[0].count;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error(`Failed to count rows in table ${dbTable}`);
  }
}

export async function countRowsInTableByStatus(dbTable: 'invoices' | 'call_bookings' | 'tickets') {
  noStore();
  try {
    let data;
    switch (dbTable) {
      case 'invoices':
        data = await sql<{ status: string, count: string }>`
          SELECT status, COUNT(*) 
          FROM invoices 
          GROUP BY status;
        `;
        break;
      case 'call_bookings':
        data = await sql<{ status: string, count: string }>`
          SELECT status, COUNT(*) 
          FROM call_bookings 
          GROUP BY status;
        `;
        break;
      case 'tickets':
        data = await sql<{ status: string, count: string }>`
          SELECT status, COUNT(*) 
          FROM tickets 
          GROUP BY status;
        `;
        break;
      default:
        throw new Error(`Invalid table name: ${dbTable}`);
    }
    return data.rows.map(row => ({ status: row.status, count: Number(row.count) }));
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error(`Failed to count rows in table ${dbTable}`);
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

    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch booking.');
  }
}