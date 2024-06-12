import axios from "axios";

const client = axios.create({
  baseURL: "http://localhost:3001/",
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
