'use client'

import { getCheckout } from "@/actions";
import { poll } from "@/utils";
import { PolarCheckoutSchemasCheckout } from "@polar-sh/sdk/models/components";
import { useEffect, useState } from "react";

export function SuccessPage({checkoutId}: {checkoutId: string}) {
  const [response, setResponse] = useState<PolarCheckoutSchemasCheckout | null>(null);


  const statusText = response?.status === 'confirmed' ? 'Success' : 'Failed';

  return (
    <div className="flex flex-col gap-y-32">
      <h1 className="text-5xl">{statusText}</h1>
      <div className="grid grid-cols-4 gap-12"></div>
    </div>
  );
}