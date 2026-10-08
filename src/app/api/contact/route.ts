import { NextResponse } from "next/server";
import { profile } from "@/data/profile";
import {
  buildMailtoHref,
  hasContactErrors,
  validateContactPayload,
} from "@/lib/contact";
import type { ContactPayload } from "@/types/portfolio";

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json(
      { ok: false, message: "Requête invalide." },
      { status: 400 },
    );
  }

  const errors = validateContactPayload(payload);

  if (hasContactErrors(errors)) {
    return NextResponse.json({ ok: false, errors }, { status: 400 });
  }

  return NextResponse.json({
    ok: true,
    mailto: buildMailtoHref(profile.email, payload),
  });
}
