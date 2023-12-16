// EditProduct.jsx
import { useState, useEffect } from "react";
import InventoryForm from "./InventoryForm";
import axios from "axios";
import { Link } from "react-router-dom";

export default function EditProduct() {
  const [formData, setFormData] = useState({
    id: "",
    productName: "",
    brand: "",
    quantity: "",
    image: "",
    price: "",
  });
  const [postResponse, setPostResponse] = useState("");
  const [toggleEdit, setToggleEdit] = useState(false);

  useEffect(() => {
    const fetchproduct = async () => {
      const productId = formData.id; // Assuming your formData contains the product ID
      const response = await axios.get(`http://localhost:3000/products/${productId}`);
      const productData = response.data;
  
      setFormData({
        id: productData.id,
        productName: productData.productName,
        brand: productData.brand,
        quantity: productData.quantity,
        image: productData.image,
        price: productData.price,
      });
    };
  
    fetchproduct()
  }, [formData.id]);


  const handleOnChange = (evt) => {
  const fieldName = evt.target.name;
  const fieldValue = evt.target.value;

  setFormData((prevData) => ({
    ...prevData,
    [fieldName]: fieldValue,
  }));
};

const handleEditProduct = async (evt) => {
    evt.preventDefault();

    const id = formData.id;
  
    const postData = {
      productName: formData.productName,
      brand: formData.brand,
      quantity: formData.quantity,
      image: formData.image,
      price: formData.price,
    };
  
    await axios
      .patch(`http://localhost:3000/products/${id}`, postData)
      .then((response) => setPostResponse(<p>{response.data}</p>))
      .then(() => setToggleEdit(false));
  };
  
  const handleOnSubmit = async (evt) => {
    evt.preventDefault();
    setPostResponse("");
    handleEditProduct();
  };
  return (
    <>
      <h2>Edit Product</h2>
      <InventoryForm
        handleOnChange={handleOnChange}
        formData={formData}
        handleOnSubmit={handleOnSubmit}
      />
      {postResponse}
      <button onClick={handleEditProduct}>Save Changes</button>
      <Link to={{ pathname: "/main" }}>
        <button>Back to Inventory</button>
      </Link>
    </>
  );
}
