export async function get (url, page=1, limit=-1) {
    const response = await fetch(`${url}?_limit=${limit}&_page=${page}`);
    return await response.json();
}