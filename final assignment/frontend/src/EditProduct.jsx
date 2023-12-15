import InventoryForm from "./InventoryForm";
import { useState } from "react";


export default function EditProduct(){

    const [postResponse, setPostResponse] = useState("");
    const [toggleEdit, setToggleEdit] = useState(false);

    const [formData, setFormData] = useState({
        productName: "",
        brand: "",
        quantity: "",
        image: "",
        price: "",
      });

      const handleOnSubmit = (evt) => {
        evt.preventDefault;
        setPostResponse("");
        toggleEdit ? handleEditProduct(formData) : handlePostDB(formData);
        setFormData({
          id: "",
          productName: "",
          brand: "",
          quantity: "",
          image: "",
          price: "",
        });
        console.log("Here!");
      };
      

      const handleToggleEdit = (product) => {
        setFormData(product);
        setToggleEdit(true);
      };


      const handleEditProduct = async (product) => {
        const id = product._id;
        const postData = {
          id: product._id,
          productName: product.productName,
          brand: product.brand,
          quantity: product.quantity,
          image: product.image,
          price: product.price,
        };
        await axios
          .patch(`http://localhost:3000/products/${id}`, postData)
          .then((response) => setPostResponse(<p>{response.data}</p>))
          .then(setToggleEdit(false));
      };

    return(
        <InventoryForm 
        formData={formData}
        />
        
    )

}