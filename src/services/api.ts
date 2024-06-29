import axios from "axios";

const client = axios.create({
  baseURL: "http://localhost:8000/",
});

export async function getProducts() {
  try {
    const { data } = await client("/products");
    console.log(data);
    return data;
  } catch {
    throw new Error("error is here");
  }
}

export async function getProduct(id: string | number) {
  const { data } = await client(`/products/${id}`);
  return data;
}

export async function login(username: string, password: string) {
  const { data } = await client({
    method: "POST",
    url: "/login",
    data: { username, password },
  });
  return data;
}
