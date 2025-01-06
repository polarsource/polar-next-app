import { env } from "@/env";
import { Checkout } from "@polar-sh/nextjs";

export const GET = Checkout({
	accessToken: env.POLAR_ACCESS_TOKEN,
	server: "sandbox", // Use sandbox for testing purposes - otherwise use 'production' or omit this line
	successUrl: `http://127.0.0.1:3000/confirmation`
})