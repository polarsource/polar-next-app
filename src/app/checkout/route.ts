import { api } from "@/api";
import { type NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
	const url = new URL(req.url);
	const productPriceId = url.searchParams.get("priceId") ?? "";
	const successUrl = `${req.nextUrl.protocol}//${req.nextUrl.host}/confirmation?checkout_id={CHECKOUT_ID}`;

	try {
		const result = await api.checkouts.custom.create({
			productPriceId,
			successUrl,
		});

		return NextResponse.redirect(result.url);
	} catch (error) {
		console.error(error);
		return NextResponse.error();
	}
}
