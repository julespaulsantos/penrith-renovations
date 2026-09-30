import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, email, phone, suburb, service, budget, timeframe, message } = data;

    // Validate required fields
    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: "Please provide your name, email, and phone number." },
        { status: 400 }
      );
    }

    // In production, you can forward this to Resend, SendGrid, or direct email to Philmorr:
    console.log("=== NEW CONSULTATION REQUEST RECEIVED ===");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Phone:", phone);
    console.log("Suburb:", suburb || "Not specified");
    console.log("Service:", service || "General inquiry");
    console.log("Budget:", budget || "Flexible");
    console.log("Timeframe:", timeframe || "Flexible");
    console.log("Message:", message || "No additional comments");
    console.log("========================================");

    return NextResponse.json(
      {
        success: true,
        message:
          "Thank you for contacting Penrith Renovations. Philmorr will be in touch within 24 hours to schedule your on-site consultation.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { error: "Internal server error. Please call us directly on 0497 985 592." },
      { status: 500 }
    );
  }
}
