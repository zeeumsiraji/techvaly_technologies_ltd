import { NextResponse } from "next/server";
import { getSheetData } from "@/lib/dashboard/sheets";

export const dynamic = "force-dynamic";

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ sheet: string }> }
) {
  try {
    const { sheet } = await params;
    const data = await getSheetData(sheet);
    return NextResponse.json({ ok: true, data });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json(
      { ok: false, error: message },
      { status: 500 }
    );
  }
}