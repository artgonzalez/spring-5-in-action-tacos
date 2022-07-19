package com.example.tacos.data;

import org.springframework.data.repository.CrudRepository;

import com.example.tacos.domain.Taco;

public interface TacoRepository extends CrudRepository<Taco, Long> {
}