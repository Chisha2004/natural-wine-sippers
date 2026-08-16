package com.naturalwine.service.payment;

import com.naturalwine.entity.Transaction;
import com.naturalwine.repository.TransactionRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
class TransactionService {

    private final TransactionRepository transactionRepository;

    TransactionService(TransactionRepository transactionRepository) {
        this.transactionRepository = transactionRepository;
    }

    List<Transaction> getTransactionsForOrder(Long orderId) {
        return transactionRepository.findAllByOrderId(orderId);
    }

    void save(Transaction transaction){
        transactionRepository.save(transaction);
    }
}
