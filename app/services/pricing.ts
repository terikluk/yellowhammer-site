// 12-month installment plan: build price divided into monthly payments,
// with Website Care folded in via a flat add-on (same regardless of tier,
// mirroring the flat $150/mo standalone Care Plan rate).
export const INSTALLMENT_MONTHS = 12
export const INSTALLMENT_CARE_ADDON = 125

export function monthlyPaymentFor(price: number) {
  return Math.round(price / INSTALLMENT_MONTHS) + INSTALLMENT_CARE_ADDON
}

export function money(n: number) {
  return `$${Math.round(n).toLocaleString()}`
}
