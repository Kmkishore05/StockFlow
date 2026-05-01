package com.inventory.controller;

import com.inventory.model.Product;
import com.inventory.dto.ProductDTO;
import com.inventory.service.ProductService;

import jakarta.validation.Valid;

import org.springframework.web.bind.annotation.*;
import org.springframework.data.domain.Page;

import java.util.List;

@RestController
@RequestMapping("/api/products")
@CrossOrigin(origins = "*")
public class ProductController {

    private final ProductService service;

    public ProductController(ProductService service) {
        this.service = service;
    }

    // ✅ GET all
    @GetMapping
    public List<Product> getAllProducts() {
        return service.getAllProducts();
    }

    // ✅ GET by ID
    @GetMapping("/{id}")
    public Product getProduct(@PathVariable Long id) {
        return service.getProductById(id);
    }

    // ✅ POST (WITH IMAGE URL)
    @PostMapping
    public Product createProduct(@Valid @RequestBody ProductDTO dto) {
        return service.createProduct(dto);
    }

    // ✅ PUT
    @PutMapping("/{id}")
    public Product updateProduct(@PathVariable Long id,
                                @Valid @RequestBody ProductDTO dto) {
        return service.updateProduct(id, dto);
    }

    // ✅ DELETE
    @DeleteMapping("/{id}")
    public String deleteProduct(@PathVariable Long id) {
        service.deleteProduct(id);
        return "Product deleted successfully";
    }

    // ✅ Low stock
    @GetMapping("/{id}/low-stock")
    public boolean checkLowStock(@PathVariable Long id) {
        return service.isLowStock(id);
    }

    // ✅ Search
    @GetMapping("/search")
    public List<Product> search(@RequestParam String keyword) {
        return service.searchProducts(keyword);
    }

    // ✅ Pagination
    @GetMapping("/paginated")
    public Page<Product> getPaginatedProducts(
            @RequestParam int page,
            @RequestParam int size,
            @RequestParam(defaultValue = "id") String sortBy) {

        return service.getPaginatedProducts(page, size, sortBy);
    }
    
    @PostMapping("/bulk")
    public List<Product> createProductsBulk(@RequestBody List<ProductDTO> dtoList) {
        return service.createProductsBulk(dtoList);
    }
}