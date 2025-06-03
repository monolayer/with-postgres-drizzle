import { Bootstrap as BeforeRollout } from "@monolayer/workloads";

const migrateDatabase = new BeforeRollout("migrate-database", {
	script: "db:migrate",
});

export default migrateDatabase;
