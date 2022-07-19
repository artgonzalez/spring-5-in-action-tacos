package com.example.tacos.web;

import javax.validation.Valid;

import org.springframework.stereotype.Controller;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.SessionAttributes;
import org.springframework.web.bind.support.SessionStatus;

import com.example.tacos.data.OrderRepository;
import com.example.tacos.data.TacoRepository;
import com.example.tacos.domain.Order;
import com.example.tacos.domain.Taco;

@Controller
@RequestMapping("/orders")
@SessionAttributes("order")
public class OrderController {

	private OrderRepository orderRepo;
	private TacoRepository tacoRepo;

	public OrderController(OrderRepository orderRepo, TacoRepository tacoRepo) {
		this.orderRepo = orderRepo;
		this.tacoRepo = tacoRepo;
	}

	@GetMapping("/current")
	public String orderForm() {

		return "orderForm";
	}

	@PostMapping
	public String processOrder(@Valid Order order, Errors errors, SessionStatus sessionStatus) {
		if (errors.hasErrors()) {
			return "orderForm";
		}
		
		for(Taco taco: order.getTacos()) {
			taco = tacoRepo.save(taco);
		}

		orderRepo.save(order);
		
		sessionStatus.setComplete();
		return "redirect:/";
	}
}