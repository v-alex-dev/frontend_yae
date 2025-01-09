'use client';
import React, { useState } from 'react';

const AddIngredientForm: React.FC = () => {
    const [showInput, setShowInput] = useState(false);
    const [ingredient, setIngredient] = useState('');

    const handleButtonClick = () => {
        setShowInput(true);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIngredient(e.target.value);
    };

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Logic to add the ingredient to the database
        console.log('New ingredient:', ingredient);
        setShowInput(false);
        setIngredient('');
    };

    return (
        <div>
            <button onClick={handleButtonClick}>Add Ingredient</button>
            {showInput && (
                <form onSubmit={handleFormSubmit} className="dialog">
                    <input
                        type="text"
                        value={ingredient}
                        onChange={handleInputChange}
                        placeholder="Enter new ingredient"
                    />
                    <button type="submit">Save</button>
                </form>
            )}
        </div>
    );
};

export default AddIngredientForm;