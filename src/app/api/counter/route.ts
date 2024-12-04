import { NextResponse, type NextRequest } from 'next/server';

interface Context {
    params: undefined;
}

export async function POST(
    request: NextRequest,
    context: Context
): Promise<NextResponse> {
    const body: { amount: number } = await request.json();
    const { amount = 1 } = body;
    // simulate IO latency
    await new Promise(resolve => setTimeout(resolve, 500));

    return NextResponse.json({ data: amount });
}
