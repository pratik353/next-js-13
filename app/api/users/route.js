// Next.js supports the following HTTP methods

// 1. **GET**: Retrives data or resources from the server.
// 2. **POST**: Submits data to the server to create a new resource.
// 3. **PUT**: Updates or replace an existing resource on the server.
// 4. **PUT**: Parcially updates an existing resource on the server.
// 5. **DELETE: Removes a specific resource from the server.
// 6. **HEAD**: Retrives the headers of the resource without fetcing its body.
// 7. **Options**: Retrives the supported HTTP methods and other communication options for a resource.

// eg.
// node.js " http://localhost:3000/api/users " api route

export async function GET(request) {
    // Handels GET request for /api/users
    // Retrive users from the database or any data source
    const users = [
        { id:1, name: 'Pratik' },
        { id:2, name: 'Rutik' },
        { id:3, name: 'ABC' },
    ]
    return new Response(JSON.stringify(users));
}