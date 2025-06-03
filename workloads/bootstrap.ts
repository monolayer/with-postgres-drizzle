import { Bootstrap } from "@monolayer/workloads";

const bootstrapDatabase = new Bootstrap("database", {
	script: "db:bootstrap",
});

export default bootstrapDatabase;
