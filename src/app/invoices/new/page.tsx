import { sql } from 'drizzle-orm';
import { db } from '@/db';  // Import your initialized db instance

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default async function Home() {
  try {
    // Query the database for the current database name
    const result = await db.execute(sql`SELECT current_database`);

    return (
      <main className="flex flex-col justify-center items-center h-full gap-8 bg-gray-50 p-8">
        <div className="flex justify-start flex-col w-[80%]">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">Create Invoice</h1>
          <pre>{JSON.stringify(result, null, 2)}</pre> {/* Display the result from the database */}
          <form className="w-full sm:w-96 p-8 rounded-lg space-y-6">
            {/* Form fields here */}
          </form>
        </div>
      </main>
    );
  } catch (error) {
    console.error("Database query error:", error);
    return <div>Error: Unable to fetch database info</div>;
  }
}
