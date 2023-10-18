package com.example.orders.controller;

import com.example.orders.model.Order;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@CrossOrigin
@RestController
public class OrderController {

    List<Order> portfolio = new ArrayList<>(
            Arrays.asList(new Order("GOOGL", "BUY", 10, 100.1)));

    @GetMapping("/orders")
    public List<Order> getAllOrders(){
        return this.portfolio;
    }

    @PostMapping("/orders")
    public void saveOrder(@RequestBody Order order){
        System.out.println(order);
        this.portfolio.add(order);
    }

    @GetMapping("/orders/{ticker}")
    public Order getOrderByTicker(@PathVariable String ticker){
        return this.portfolio.stream().filter(el -> el.getTicker().equals(ticker)).toList().get(0);
    }
}
