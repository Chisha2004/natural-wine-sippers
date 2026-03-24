package com.naturalwine.service;

import com.naturalwine.dto.BeverageDto;
import com.naturalwine.entity.BeverageEntity;
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
                .map(this::convertToDto).toList();
    }

    private BeverageDto convertToDto(BeverageEntity beverage) {
        if (beverage == null) {
            return null;
        }

        return new BeverageDto(
                beverage.getId(),
                beverage.getName(),
                beverage.getType(),
                beverage.getCategory(),
                beverage.getDescription(),
                beverage.getPrice(),
                beverage.getImgUrl(),
                beverage.getCountry(),
                beverage.getRegion(),
                beverage.getProducer(),
                beverage.getGrapeVariety(),
                beverage.getVintage(),
                beverage.getDegree(),
                beverage.getCapacity(),
                beverage.getRating(),
                beverage.getYear()
        );
    }


}
