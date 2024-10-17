import { SuccessPage } from "./ClientPage";

export default function Page({
    searchParams,
  }: {
    searchParams: {
      [key: string]: string | string[] | undefined;
    };
  }) {
    return (
        <SuccessPage checkoutId={searchParams["checkout_id"] as string} />
    )
}