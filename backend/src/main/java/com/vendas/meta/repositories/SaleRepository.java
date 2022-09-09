package com.vendas.meta.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.vendas.meta.entities.Sale;

public interface SaleRepository extends JpaRepository<Sale, Long>{

}
