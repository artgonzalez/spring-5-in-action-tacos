package com.example.tacos.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.SessionAttributes;

@Controller
@RequestMapping("/orders")
@SessionAttributes("order")
public class OrderController {
	@GetMapping("/current")
	public String orderForm() {
		
		return "orderForm";
	}
}