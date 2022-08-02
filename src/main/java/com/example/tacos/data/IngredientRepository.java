package com.example.tacos.data;

import org.springframework.data.repository.CrudRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.example.tacos.domain.Ingredient;

@CrossOrigin(origins = "http://localhost:4200")
public interface IngredientRepository extends CrudRepository<Ingredient, String> {
}