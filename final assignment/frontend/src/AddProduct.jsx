import { useState, useEffect } from "react";
import InventoryForm from "./InventoryForm";

import axios from "axios";

export default function AddProduct() {
  const [formData, setFormData] = useState({
    productName: "",
    brand: "",
    quantity: "",
    image: "",
    price: "",
  });
  const [postResponse, setPostResponse] = useState("");
  const [products, setProducts] = useState([]);



  const handleOnChange = (evt) => {
    const fieldName = evt.target.name;
    const fieldValue = evt.target.value;
    console.log(fieldName);
    setFormData((prevData) => {
      return {
        ...prevData,
        id: crypto.randomUUID(),
        [fieldName]: fieldValue,
      };
    });
  };

  useEffect(() => {
    handleFindDB();
  }, [postResponse]);

  async function handleFindDB() {
    const response = await fetch("http://localhost:3000/products");
    const products = await response.json();
    setProducts(products);
  }


  const handlePostDB = async (product) => {
    const postData = {
      id: crypto.randomUUID(),
      productName: product.productName,
      brand: product.brand,
      quantity: product.quantity,
      image: product.image,
      price: product.price,
    };

    await axios
      .post("http://localhost:3000/submitProduct", postData)
      .then((response) => setPostResponse(<p>{response.data}</p>));
  };

  const handleAddProduct = async (productData) => {
    // Add logic to handle adding the product to the database
    await handlePostDB(productData);
  };



  const handleOnSubmit = async (evt = {}) => {
    evt.preventDefault;
  
    console.log("Submitting product data:", formData);
  
    await handleAddProduct(formData);
  
    setFormData({
      productName: "",
      brand: "",
      quantity: "",
      image: "",
      price: "",
    });
  };
  

  const handleAddToInventory = async () => {
    console.log("Add Product to Inventory button clicked");
  
    await handleOnSubmit();
  };
  
  return (
    <>
      <h2>Add Product</h2>
      <InventoryForm
        handleOnChange={handleOnChange}
        formData={formData}
        handleOnSubmit={handleOnSubmit}
        handleAddProduct={handleAddProduct}
      />
      {postResponse}
      <button onClick={handleAddToInventory}>Add Product</button>

      





    </>
  );
}
