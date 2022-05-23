import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "./services/api";

interface ITransaction {
    id: number;
    title: string
    amount: number
    type: string
    category: string
    createdAt: string;
}

interface TransactionsProviderProps {
    children?: ReactNode
}

type ITransactionInput = Omit<ITransaction, 'id' | 'createdAt'>

interface TransactionsContextData {
    transactions: ITransaction[];
    createTransaction: (transaction: ITransactionInput) => void;
}

export const TransactionsContext = createContext<TransactionsContextData>({} as TransactionsContextData)

export function TransactionsProvider({ children }: TransactionsProviderProps) {
    const [transactions, setTransactions] = useState<ITransaction[]>([]);

    useEffect(() => {
        api.get('transactions')
            .then(reponse => setTransactions(reponse.data.transactions))
    }, [])

    async function createTransaction(transactionInput: ITransactionInput) {

        const response = await api.post('/transactions', {
            ...transactionInput,createdAt: new Date()
        })
        const  {transaction}  = response.data
     

        setTransactions([
            ...transactions,
            transaction
        ])
    }

    return (
        <TransactionsContext.Provider value={{ transactions, createTransaction }}>
            {children}
        </TransactionsContext.Provider>
    )

}