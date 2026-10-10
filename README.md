# Natural Wine Sippers

## Overview

Natural Wine Sippers is a monolithic web application: an Angular frontend and a Java Spring Boot backend are built and packaged together. The backend serves the compiled frontend from `src/main/resources/static/` and uses MySQL for persistence.

## Project structure

```text
.
├── build.gradle                         # Gradle build and frontend build task
├── frontend-app/                        # Angular/Nx workspace
│   ├── apps/
│   │   ├── smwine-fe-app/               # Storefront Angular application
│   │   │   └── src/app/
│   │   │       ├── components/          # Shared UI such as header and cart
│   │   │       ├── models/              # Frontend data interfaces
│   │   │       ├── pages/               # Landing, checkout, dashboard, registration
│   │   │       └── services/            # API and application services
│   │   └── smwine-fe-app-e2e/           # Cypress end-to-end tests
│   ├── libs/                            # Reusable admin, security, shared, interceptor code
│   └── mock-server/                     # Mock API for frontend development
└── src/
    ├── main/
    │   ├── java/com/naturalwine/
    │   │   ├── Application.java         # Spring Boot entry point
    │   │   ├── config/                  # Web, servlet, and security configuration
    │   │   ├── controller/              # HTTP API endpoints
    │   │   ├── dto/                     # API request/response objects
    │   │   ├── entity/                  # JPA persistence entities and enums
    │   │   ├── exception/               # Domain errors and global error handling
    │   │   ├── repository/              # Spring Data repositories
    │   │   ├── service/                 # Business logic
    │   │   │   └── payment/             # Payment service and gateway implementations
    │   │   ├── util/
    │   │   └── validation/
    │   └── resources/
    │       ├── application*.yml         # Spring configuration
    │       ├── data.sql                 # Seed data
    │       ├── static/                  # Angular build output, images, translations
    │       └── templates/               # Freemarker templates
    └── test/java/                       # Backend tests
```

## Checkout feature

The Angular checkout page collects the shipping address and payment method, then submits the current cart to the backend. The backend verifies cart ownership, creates or reuses an order, marks the cart as in checkout, and asks the payment service for a payment session. Payment gateways are selected by payment method; mock gateway implementations are provided for development.

```text
Angular: frontend-app/apps/smwine-fe-app/src/app/
├── pages/checkout/
│   ├── checkout.component.ts            # Address form, cart submission, redirect handling
│   ├── checkout.component.html
│   └── checkout.component.scss
├── models/
│   ├── checkout.interface.ts            # Checkout request/response types
│   └── shipping-address.interface.ts
└── services/checkout/
    └── checkout.service.ts              # HTTP calls for checkout and saved address

Spring Boot: src/main/java/com/naturalwine/
├── controller/CheckoutController.java  # Checkout and default-address endpoints
├── service/CheckoutService.java        # Cart validation and order creation
├── service/payment/
│   ├── PaymentService.java             # Selects gateway and manages transactions
│   ├── TransactionService.java         # Reads and persists payment transactions
│   ├── PaymentGateway.java             # Gateway interface
│   ├── PaymentResponse.java
│   └── mock/
│       ├── MockIdealPaymentGateway.java
│       └── MockPaypalPaymentGateway.java
├── dto/
│   ├── CheckoutRequest.java
│   ├── CheckoutResponseDto.java
│   └── ShippingAddressDto.java
├── entity/
│   ├── Cart.java
│   ├── Order.java
│   ├── Transaction.java
│   └── CartStatus.java, OrderStatus.java, PaymentMethod.java, TransactionStatus.java
└── repository/
    ├── OrderRepository.java
    ├── TransactionRepository.java
    └── DefaultShippingAddressRepo.java
```

Checkout endpoints are declared on `CheckoutController` under `/v1/checkout`: `POST /initiate-checkout` starts checkout and `GET /shipping-address` retrieves the signed-in user's default address. `CheckoutService` ensures the cart belongs to the signed-in user before creating an order. `PaymentService` checks for an existing successful or reusable pending transaction before creating a new payment session.

## Build

From `frontend-app/`, run `npm run build` to build the Angular app. Its configured output directory is `src/main/resources/static/`. From the repository root, run `.\gradlew.bat build` to build the Spring Boot application and package the static frontend with it.
