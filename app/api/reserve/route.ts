import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { name, email, phone, date, time, guests, notes } = body;

    // Basic server-side validation
    if (!name || !email || !phone || !date || !time) {
      return NextResponse.json(
        { success: false, message: "Missing required fields" },
        { status: 400 }
      );
    }

    // TODO: Integrate with a real backend — options:
    // 1. Send email via Nodemailer / SendGrid / Resend
    // 2. Save to a database (Supabase, Prisma, etc.)
    // 3. Forward to a Google Form or Airtable
    // 4. Send a Slack/Telegram notification

    console.log("📋 New reservation:", {
      name,
      email,
      phone,
      date,
      time,
      guests,
      notes,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({
      success: true,
      message: `Reservation confirmed for ${name} on ${date} at ${time} for ${guests} guest(s).`,
    });
  } catch {
    return NextResponse.json(
      { success: false, message: "Invalid request" },
      { status: 400 }
    );
  }
}
