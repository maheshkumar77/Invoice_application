import { createDrizzle } from 'drizzle-orm';
import { Pool } from 'pg';  // Import PostgreSQL connection pool from pg

// Initialize the PostgreSQL connection pool
const pool = new Pool({
  connectionString: process.env.DATABASE_URI, // Your PostgreSQL connection string from environment variable
  max: 20, // Max number of connections in the pool
});

// Initialize Drizzle ORM with the PostgreSQL pool
export const db = createDrizzle(pool); // Use createDrizzle instead of drizzle directly
