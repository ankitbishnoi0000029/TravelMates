import { NextResponse } from 'next/server'
 
export async function GET() {
  return NextResponse.json({ Result: "hello"},{status:200})
}

export async function POST(request) {
    const userInputData = await request.json();
    console.log(userInputData);

    
    return NextResponse.json({ Result: "hello"},{status:200})
  }