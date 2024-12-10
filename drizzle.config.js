import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./configs/schema.js",
  dbCredentials: {
    url:'postgresql://neondb_owner:08BpGYdSHLTe@ep-icy-rice-a5kgvfgp.us-east-2.aws.neon.tech/AI-StudyMaterial_Generator?sslmode=require'
  }
});
