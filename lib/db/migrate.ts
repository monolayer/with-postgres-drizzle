import { migrate } from "drizzle-orm/node-postgres/migrator";
import path from "path";
import { db, pool } from "./drizzle";

async function main() {
	await migrate(db, {
		migrationsFolder: path.join(process.cwd(), "/lib/db/migrations"),
	});
	console.log(`Migrations complete`);
	await pool.end();
}

main();
