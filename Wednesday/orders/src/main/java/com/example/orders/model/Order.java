package com.example.orders.model;

public class Order {
    private String ticker;

    private String side;

    private int qty;

    private double price;

    public Order(String ticker, String side, int qty, double price) {
        this.ticker = ticker;
        this.side = side;
        this.qty = qty;
        this.price = price;
    }

    public String getTicker() {
        return ticker;
    }

    public void setTicker(String ticker) {
        this.ticker = ticker;
    }

    public String getSide() {
        return side;
    }

    public void setSide(String side) {
        this.side = side;
    }

    public int getQty() {
        return qty;
    }

    public void setQty(int qty) {
        this.qty = qty;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }
}
