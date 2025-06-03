import { loadEnvConfig } from "@next/env";
import type { Config } from "drizzle-kit";
import database from "./workloads/postgres";

const projectDir = process.cwd();
loadEnvConfig(projectDir);

export default {
	schema: "./lib/db/schema.ts",
	out: "./lib/db/migrations",
	dialect: "postgresql",
	dbCredentials: {
		url: process.env[database.connectionStringEnvVar]!,
	},
} satisfies Config;
