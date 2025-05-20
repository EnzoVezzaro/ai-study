import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./configs/schema.js",
  dbCredentials: {
    url: "postgresql://ai-study_owner:npg_fIiH1LFCzSq9@ep-late-dream-a4zhoslq-pooler.us-east-1.aws.neon.tech/ai-study?sslmode=require",
  },
});
