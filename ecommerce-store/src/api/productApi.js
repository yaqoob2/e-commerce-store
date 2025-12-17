const BASE_URL = "https://fakestoreapi.com";

async function request(endpoint) {
  try {
    const res = await fetch(`${BASE_URL}${endpoint}`);

    if (!res.ok) {
      throw new Error(`API Error: ${res.status} ${res.statusText} (${endpoint})`);
    }

    return await res.json();
  } catch (err) {
    throw new Error(err?.message || "Unknown network error");
  }
}

export async function getAllProducts() {
  return request("/products");
}

export async function getCategories() {
  return request("/products/categories");
}

export async function getProductsByCategory(category) {
  return request(`/products/category/${encodeURIComponent(category)}`);
}

export async function getProductById(id) {
  return request(`/products/${id}`);
}
