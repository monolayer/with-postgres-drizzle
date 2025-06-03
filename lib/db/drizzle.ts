import database from "@/workloads/postgres";
import { loadEnvConfig } from "@next/env";
import { drizzle } from "drizzle-orm/node-postgres";
import { PHASE_PRODUCTION_BUILD } from "next/constants";
import { Pool } from "pg";

import * as schema from "./schema";

const projectDir = process.cwd();
loadEnvConfig(projectDir);

const credentials = process.env[database.connectionStringEnvVar];

if (process.env.NEXT_PHASE !== PHASE_PRODUCTION_BUILD && !credentials) {
	throw new Error(`${database.connectionStringEnvVar} environment variable is not set`);
}

export const pool = new Pool({
	connectionString: credentials,
});

export const db = drizzle(pool, { schema });
