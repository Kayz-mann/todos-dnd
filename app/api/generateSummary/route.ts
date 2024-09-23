import { NextResponse } from "next/server";

import OpenAI from "openai";

const openai = new OpenAI();


export async function POST(request: Request) {
    //tods in the body of the POST request
    const { todos } = await request.json();
    console.log(todos);

    //communuicate with opnenAI GPT
    const chatCompletion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        n: 1,
        stream: false,
        messages: [
            {
                role: "system",
                content: `When responding, welcome the user always as Kayode and say welcome to the TODO App! 
                Limit the response to 200 characters`
            },
            {
                role: "user",
                content: `Hi there, provide a summary of the following todos. 
                 Count how many todos are in each category such as To do, in progress, done, then tell all the user to have a productive day!
                 Here's the data: ${JSON.stringify(todos)} `
            },
        ]
    });

    const { data }: any = chatCompletion;

    console.log('data is:', data);
    console.log(data.choices[0].message);

    return NextResponse.json({ todos })
}