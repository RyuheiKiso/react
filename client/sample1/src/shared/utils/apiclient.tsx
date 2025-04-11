// API通信ユーティリティ
export async function fetchApi(url: string) {
    const response = await fetch(url);
    return response.json();
}
