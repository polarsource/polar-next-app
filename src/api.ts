import { env } from "@/env";
import { Polar } from "@polar-sh/sdk";

export const api = new Polar({
	accessToken: env.POLAR_ACCESS_TOKEN,
	server: "sandbox", // Use sandbox for testing purposes - otherwise use 'production' or omit this line
});
