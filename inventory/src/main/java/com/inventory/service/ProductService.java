package com.inventory.service;

import com.inventory.model.Product;
import com.inventory.dto.ProductDTO;
import com.inventory.repository.ProductRepository;
import com.inventory.exception.ResourceNotFoundException;

import org.springframework.stereotype.Service;
import org.springframework.data.domain.*;

import java.util.List;

@Service
public class ProductService {

    private final ProductRepository repo;

    public ProductService(ProductRepository repo) {
        this.repo = repo;
    }

    // ✅ Get all products
    public List<Product> getAllProducts() {
        return repo.findAll();
    }

    // ✅ Get by ID
    public Product getProductById(Long id) {
        return repo.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Product not found"));
    }

    // ✅ Create product (WITH IMAGE URL)
    public Product createProduct(ProductDTO dto) {
        Product product = new Product();

        product.setName(dto.getName());
        product.setQuantity(dto.getQuantity());
        product.setPrice(dto.getPrice());
        product.setImageUrl(dto.getImageUrl());   // ⭐ important

        return repo.save(product);
    }

    // ✅ Update product (WITH IMAGE URL)
    public Product updateProduct(Long id, ProductDTO dto) {
        Product product = getProductById(id);

        product.setName(dto.getName());
        product.setQuantity(dto.getQuantity());
        product.setPrice(dto.getPrice());
        product.setImageUrl(dto.getImageUrl());   // ⭐ important

        return repo.save(product);
    }

    // ✅ Delete
    public void deleteProduct(Long id) {
        Product product = getProductById(id);
        repo.delete(product);
    }

    // ✅ Low stock
    public boolean isLowStock(Long id) {
        Product product = getProductById(id);
        return product.getQuantity() < 5;
    }

    // ✅ Search
    public List<Product> searchProducts(String keyword) {
        return repo.findByNameContainingIgnoreCase(keyword);
    }

    // ✅ Pagination + Sorting
    public Page<Product> getPaginatedProducts(int page, int size, String sortBy) {
        Pageable pageable = PageRequest.of(page, size, Sort.by(sortBy));
        return repo.findAll(pageable);
    }
    
    public List<Product> createProductsBulk(List<ProductDTO> dtoList) {

        List<Product> products = dtoList.stream().map(dto -> {
            Product product = new Product();
            product.setName(dto.getName());
            product.setQuantity(dto.getQuantity());
            product.setPrice(dto.getPrice());
            product.setImageUrl(dto.getImageUrl());
            return product;
        }).toList();

        return repo.saveAll(products);
    }
}