// The fetch to the API is done here
import axios from "axios";

// The connection to the API
const urlApi = 'http://localhost:5000';


// Products
export const fetchProducts = async () => {
    try {
      const response = await axios.get(`${urlApi}/products`);
      return response.data;
    } catch (error) {
      console.error('Error al obtener los productos:', error);
    }
  };

// Test to delete a product
// export const deleteProduct = async (id) => {
//     console.log('id:', id);
//     try {
//         await axios.post(`${urlApi}/delete_product/${id}`);
//     } catch (error) {
//         console.error('Error al eliminar el producto:', error);
//     }
// };

export const addProduct = async (product) => {
    try {
        await axios.post(`${urlApi}/add_product`, product);
    } catch (error) {
        console.error('Error al agregar el producto:', error);
    }
}


// Provider
export const fetchProviders = async () => {
    try {
        const response = await axios.get(`${urlApi}/consult_supplier`);
        return response.data;
    } catch (error) {
        console.error('Error al obtener los proveedores:', error);
    }
}; 


// Purchase
export const fetchPurchases = async () => {
    try {
        const response = await axios.get(`${urlApi}/compras`);
        return response.data.compras;
    } catch (error) {
        console.error('Error al obtener las compras:', error);
    }
};
