package com.naturalwine.service;

import com.naturalwine.dto.BeverageDto;
import com.naturalwine.repository.BeverageRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BeverageService {
    private final BeverageRepository beverageRepository;

    public BeverageService(final BeverageRepository beverageRepository) {
        this.beverageRepository = beverageRepository;
    }

    public List<BeverageDto> getAvailableTypes() {
        return beverageRepository.findAll()
                .stream()
                .map(beverageEntity -> new BeverageDto(beverageEntity.getId(), beverageEntity.getName(), beverageEntity.getType())).toList();
    }
}
