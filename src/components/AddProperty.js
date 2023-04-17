import React, { useState } from "react";
import "../styles/add-property.css";

const initialState = {
  fields: {
    title: "",
    city: "",
    propertyType: "",
  },
};

const AddPropertyPage = () => {
  const [fields, setFields] = useState(initialState.fields);
  const handleAddProperty = (event) => {
    event.preventDefault();
    console.log(fields);
  };
  const handleFieldChange = (event) => {
    setFields({ ...fields, [event.target.name]: event.target.value });
  };
  return (
    <div className="add-property">
      <form onSubmit={handleAddProperty}>
        <label htmlFor="title">
          Title
          <input
            id="title"
            name="title"
            value={fields.title}
            placeholder="Property Type, City"
            onChange={handleFieldChange}
          />
        </label>
        <button className="theAddPropertyButton" type="submit">
          Add
        </button>
        <label htmlFor="city">
          City
          <select
            label="city"
            id="city"
            name="city"
            value={fields.city}
            onChange={handleFieldChange}
          >
            <option value="Manchester">Manchester</option>
            <option value="Leeds">Leeds</option>
            <option value="Sheffield">Sheffield</option>
            <option value="Liverpool">Liverpool</option>
          </select>
        </label>
        <label htmlFor="city">
          Property Type
          <select
            id="propertyType"
            name="propertyType"
            value={fields.propertyType}
            onChange={handleFieldChange}
          >
            <option value="Flat">Flat</option>
            <option value="Semi-Detached">Semi-Detached</option>
            <option value="Terranced">Terranced</option>
            <option value="End of Terrance">End of Terrance</option>
            <option value="Cottage">Cottage</option>
            <option value="Bungalow">Bungalow</option>
          </select>
        </label>
      </form>
      <p>Add Property Page</p>
    </div>
  );
};

export default AddPropertyPage;
