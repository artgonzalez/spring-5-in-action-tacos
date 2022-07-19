package com.example.tacos.data;

import org.springframework.data.repository.CrudRepository;

import com.example.tacos.domain.Order;

public interface OrderRepository extends CrudRepository<Order, Long> {
}