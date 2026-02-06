import { NextResponse } from 'next/server';
import type { ApiHealthResponse } from '@/types';

export async function GET() {
    const response: ApiHealthResponse = {
        status: 'ok',
        company: 'TecVerse',
        focus: 'AI Solutions',
    };

    return NextResponse.json(response, {
        status: 200,
        headers: {
            'Content-Type': 'application/json',
        },
    });
}
