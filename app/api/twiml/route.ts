import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const twiml = `<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Dial>+27658475289</Dial>
</Response>`;

  return new NextResponse(twiml, {
    headers: {
      'Content-Type': 'text/xml',
    },
  });
}

export async function GET(request: Request) {
  const twiml = `<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Dial>+27658475289</Dial>
</Response>`;

  return new NextResponse(twiml, {
    headers: {
      'Content-Type': 'text/xml',
    },
  });
}
