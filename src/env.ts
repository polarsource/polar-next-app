import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
	shared: {},
	server: {
		POLAR_ACCESS_TOKEN: z.string(),
		POLAR_ORGANIZATION_ID: z.string(),
		POLAR_WEBHOOK_SECRET: z.string(),
	},
	client: {
		NEXT_PUBLIC_FRONTEND_BASE_URL: z.string(),
	},
	runtimeEnv: {
		NEXT_PUBLIC_FRONTEND_BASE_URL: process.env.NEXT_PUBLIC_FRONTEND_BASE_URL,
		POLAR_ACCESS_TOKEN: process.env.POLAR_ACCESS_TOKEN,
		POLAR_ORGANIZATION_ID: process.env.POLAR_ORGANIZATION_ID,
		POLAR_WEBHOOK_SECRET: process.env.POLAR_WEBHOOK_SECRET,
	},
	skipValidation: !!process.env.CI || !!process.env.SKIP_ENV_VALIDATION,
});
