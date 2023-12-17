import { useState, useEffect } from "react";
import InventoryForm from "./InventoryForm";
import axios from "axios";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function EditProduct() {
  const [formData, setFormData] = useState({id: "",
    productName: "",
    brand: "",
    quantity: "",
    image: "",
    price: "",
  });
  const [postResponse, setPostResponse] = useState("");
  const [toggleEdit, setToggleEdit] = useState(false);

  // useEffect(() => {
  //     setFormData(
  //       () => {return productData
  //     });
  //   }
  
    
  // }, []);

  useEffect(() => {
    setFormData(
      productData
    )
  }, [])


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

  const location = useLocation();
  const productData = location.state;
  console.log(productData)
  console.log(location)




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
