import { Webhook } from "standardwebhooks"

import { WebhookCheckoutCreatedPayload, WebhookCheckoutUpdatedPayload } from "@polar-sh/sdk/models/components";
import { NextRequest, NextResponse } from "next/server";
import { env } from "@/env";

export async function POST(request: NextRequest) {
  const requestBody = await request.text();

  const webhookHeaders = {
    "webhook-id": request.headers.get("webhook-id") ?? '',
    "webhook-timestamp": request.headers.get("webhook-timestamp") ?? '',
    "webhook-signature": request.headers.get("webhook-signature") ?? '',
  }

  const webhookSecret = Buffer.from(env.POLAR_WEBHOOK_SECRET).toString('base64');
  const wh = new Webhook(webhookSecret);
  const payload = wh.verify(requestBody, webhookHeaders) as WebhookCheckoutCreatedPayload | WebhookCheckoutUpdatedPayload;

  // Handle the event
  switch (payload.type) {
      case 'checkout.updated':
          const checkout = payload.data;
          console.log('updated')
          break;
      default:
          console.log(`Unhandled event type ${payload.type}`);
  }

  return NextResponse.json({ received: true });
}
