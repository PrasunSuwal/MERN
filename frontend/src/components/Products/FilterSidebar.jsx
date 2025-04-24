import React, { useEffect } from "react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

const FilterSidebar = () => {
  const [searchParams, setSearchParams] = useSearchParams({});
  const [filters, setFilters] = useState({
    category: "",
    gender: "",
    color: "",
    size: [],
    material: [],
    brand: "",
    minPrice: 0,
    maxPrice: 100,
  });

  const [priceRange, setPriceRange] = useState([0, 100]);

  const categories = ["Top Wear", "Bottom Wear"];

  const color = ["Red", "Blue", "Green", "Black", "White", "Yellow", "Pink"];
  const size = ["S", "M", "L", "XL", "XXL"];
  const material = ["Cotton", "Polyester", "Wool", "Silk", "Denim"];
  const brands = [
    "Urban Threads",
    "Modern Fit",
    "Beach Breeze",
    "Reebok",
    "Street Style",
    "ChicStyle",
  ];
  const genders = ["Men", "Women"];

  useEffect(() => {
    const params = Object.fromEntries([...searchParams]);
    setFilters({
      category: params.category || "",
      gender: params.gender || "",
      color: params.color || "",
      size: params.size ? params.size.split(",") : [],
      material: params.material ? params.material.split(",") : [],
      brand: params.brand ? params.size.brand(",") : [],
      minPrice: params.minPrice || 0,
      maxPrice: params.maxPrice || 100,
    });
    setPriceRange([0, params.maxPrice || 100]);
  }, [searchParams]);

  return (
    <div className="p-4">
      <h3 className="text-xl font-medium text-shadow-gray-800 mb-4">Filter</h3>

      {/* Category Filter */}
    </div>
  );
};

export default FilterSidebar;
