export async function get (page=1, limit=-1) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}&_page=${page}`);
    return await response.json();
}