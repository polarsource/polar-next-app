'use server'

import { api } from "./api"

export const getCheckout = async (checkoutId: string) => {
    return api.checkouts.custom.get(
        {
            id: checkoutId
        }
    )
}