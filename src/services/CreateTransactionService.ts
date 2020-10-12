import TransactionsRepository from '../repositories/TransactionsRepository';
import Transaction from '../models/Transaction';

class CreateTransactionService {
  private transactionsRepository: TransactionsRepository;

  constructor(transactionsRepository: TransactionsRepository) {
    this.transactionsRepository = transactionsRepository;
  }

  public execute({ title, value, type }: Omit<Transaction, 'id'>): Transaction {
    const newTransaction = new Transaction({ title, value, type });

    const transaction = this.transactionsRepository.create(newTransaction);

    return transaction;
  }
}

export default CreateTransactionService;
