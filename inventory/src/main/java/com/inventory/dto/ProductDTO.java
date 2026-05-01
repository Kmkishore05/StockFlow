package com.inventory.dto;

import jakarta.validation.constraints.*;

public class ProductDTO {

    @NotBlank(message = "Name is required")
    private String name;

    @Min(value = 0, message = "Quantity cannot be negative")
    private int quantity;

    @Positive(message = "Price must be positive")
    private double price;
    
    public String getImageUrl() {
		return imageUrl;
	}

	public void setImageUrl(String imageUrl) {
		this.imageUrl = imageUrl;
	}

	@NotBlank(message = "Image URL is required")
    private String imageUrl;


	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

    
}