package com.example.tacos.web;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.SessionAttributes;

import com.example.tacos.data.IngredientRepository;
import com.example.tacos.domain.Ingredient;
import com.example.tacos.domain.Ingredient.Type;
import com.example.tacos.domain.Order;
import com.example.tacos.domain.Taco;

@Controller
@RequestMapping("/design")
@SessionAttributes("order")
public class DesignTacoController {

	private final IngredientRepository ingredientRepo;

	@Autowired
	public DesignTacoController(IngredientRepository ingredientRepo) {
		this.ingredientRepo = ingredientRepo;
	}

	@GetMapping
	public String showDesignForm(Model model) {
		List<Ingredient> ingredients = new ArrayList<>();
		ingredientRepo.findAll().forEach(i -> ingredients.add(i));
		Type[] types = Ingredient.Type.values();
		for (Type type : types) {
			model.addAttribute(type.toString().toLowerCase(), filterByType(ingredients, type));
		}
		
		return "design";
	}
	
	@ModelAttribute(name = "order")
	  public Order order() {
	    return new Order();
	  }

	  @ModelAttribute(name = "design")
	  public Taco design() {
	    return new Taco();
	  }	

	@PostMapping
	public String processDesign(@Valid Taco design, Errors errors,
			@ModelAttribute Order order) {
		
		if(errors.hasErrors()) {
			return "design";
		}
		
		order.addDesign(design);

		return "redirect:/orders/current";
	}

	private List<Ingredient> filterByType(List<Ingredient> ingredients, Type type) {
		return ingredients.stream().filter(x -> x.getType().equals(type)).collect(Collectors.toList());
	}
}