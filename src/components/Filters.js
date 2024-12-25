import React from 'react'

const Filters = ({ filters, setFilters, handleAddProductModal }) => {

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFilters((prev) => ({
            ...prev,
            [name]: value,
        }));
    }


    return (
        <main>
            <section className='section-hero'>
                <div className="container filters">
                    <select name="sort" value={filters.sort} onChange={handleChange}>
                        <option value="">Sort by Price</option>
                        <option value="asc">Low to High</option>
                        <option value="desc">High to low</option>
                    </select>

                    <input
                        type="number"
                        name="minPrice"
                        value={filters.minPrice}
                        placeholder="Min Price"
                        onChange={handleChange}
                    />

                    <input
                        type="number"
                        name="maxPrice"
                        value={filters.maxPrice}
                        placeholder="Max Price"
                        onChange={handleChange}
                    />

                    <select name="type" value={filters.type} onChange={handleChange}>
                        <option value="All">Filter by Type</option>
                        <option value="fruit">Fruit</option>
                        <option value="vegetable">Vegetable</option>
                    </select>


                    <div className='customBtn'>
                        <button onClick={handleAddProductModal} className='submitBtn'>Add Product</button>
                        <button className="buy-now-btn">Buy Now</button>
                    </div>
                </div>


            </section>
        </main>
    )
}

export default Filters
