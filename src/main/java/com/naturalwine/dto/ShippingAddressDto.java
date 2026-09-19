package com.naturalwine.dto;

import lombok.Builder;

@Builder
public record ShippingAddressDto(String firstName,
                                 String lastName,
                                 String streetName,
                                 String houseNumber,
                                 String postcode,
                                 String city,
                                 String country) { //TODO country should be an enum
}
