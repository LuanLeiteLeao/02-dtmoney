import Modal from 'react-modal'
import { ContainerForm, TransactionTypeContainer, RadioBox } from './styles'
import closeImg from "../../assets/close.svg"
import incomeImg from "../../assets/income.svg"
import outcomeImg from "../../assets/outcome.svg"
import { FormEvent, useState } from 'react'

interface NewTransactionModalProps {
    onOpen: boolean
    onRequestClose: () => void
}



export function NewTransactionModal({ onOpen, onRequestClose }: NewTransactionModalProps) {

    const [type, setType] = useState<"deposit" | "withdraw">("deposit");

    const [title, setTitle] = useState<string>('')
    const [value, setValue] = useState<number>(0)
    const [category, setCategory] = useState<string>('')


    function handleCreateNewTransaction(event: FormEvent) {
        event.preventDefault()

        console.log({
            title,
            value,
            category,
            type,    
        })
    }

    return (
        <Modal
            isOpen={onOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <button type="button" onClick={onRequestClose} className="react-modal-close">
                <img src={closeImg} alt="Fechar modal" />
            </button>
            <ContainerForm onSubmit={handleCreateNewTransaction}>
                <h2>Cadastrar Transação</h2>
                <input 
                    placeholder="Título" 
                    value={title}
                    onChange={(event) => setTitle(event.target.value)} />

                <input 
                    type="number" 
                    placeholder="Valor"
                    value={value}
                    onChange={(event) => setValue(Number(event.target.value))}
                    />

                <TransactionTypeContainer>
                    <RadioBox type="button" onClick={() => setType("deposit")} isActive={type === 'deposit'} activeColor="green">
                        <img src={incomeImg} alt="Entrada" />
                        <span>Entrada</span>
                    </RadioBox>
                    <RadioBox type="button" onClick={() => setType("withdraw")} isActive={type === 'withdraw'} activeColor="red">
                        <img src={outcomeImg} alt="Saída" />
                        <span>Saída</span>
                    </RadioBox>
                </TransactionTypeContainer>

                <input 
                    placeholder="Categoria"
                    value={category}
                    onChange={(event) => setCategory(event.target.value)}
                    />

                <button type="submit" children="Cadastrar" />
            </ContainerForm>

        </Modal>
    )
}