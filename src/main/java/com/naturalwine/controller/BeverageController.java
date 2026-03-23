package com.naturalwine.controller;

import com.naturalwine.dto.BeverageDto;
import com.naturalwine.service.BeverageService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/v1/beverages")
public class BeverageController {
    private final BeverageService beverageService;

    public BeverageController(final BeverageService beverageService){
        this.beverageService = beverageService;
    }

    @GetMapping("/catalog")
    public List<BeverageDto> getAvailableTypes(){
        return beverageService.getAvailableTypes();
    }
}
