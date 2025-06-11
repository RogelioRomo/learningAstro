import type { APIRoute } from 'astro';
import { Clients, db } from 'astro:db';

export const prerender = false;

export const GET: APIRoute = async ({ params, request }) => {
  //Select * from clients
  const users = await db.select().from(Clients)

  return new Response(JSON.stringify(users), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export const POST: APIRoute = async ({ params, request }) => {

  try {
    const { id, ...body } = await request.json();

    const { lastInsertRowid } = await db.insert(Clients).values(body)

    return new Response(JSON.stringify({ id: +lastInsertRowid!.toString(), ...body }), {
      status: 201,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ msg: 'Nobody found' }), {
      status: 201,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
