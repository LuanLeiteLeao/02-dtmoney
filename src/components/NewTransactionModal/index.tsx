import Modal from 'react-modal'
import { ContainerForm, TransactionTypeContainer, RadioBox } from './styles'
import closeImg from "../../assets/close.svg"
import incomeImg from "../../assets/income.svg"
import outcomeImg from "../../assets/outcome.svg"
import { useState } from 'react'

interface NewTransactionModalProps {
    onOpen: boolean
    onRequestClose: () => void
}



export function NewTransactionModal({ onOpen, onRequestClose }: NewTransactionModalProps) {

    const [type, setType] = useState<"deposit" | "withdraw">("deposit");


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
            <ContainerForm>
                <h2>Cadastrar Transação</h2>
                <input placeholder="Título" />
                <input type="number" placeholder="Valor" />

                <TransactionTypeContainer>
                    <RadioBox type="button" onClick={()=>setType("deposit")} isActive={type ==='deposit'} activeColor="green">
                        <img src={incomeImg} alt="Entrada" />
                        <span>Entrada</span>
                    </RadioBox>
                    <RadioBox type="button" onClick={()=>setType("withdraw")} isActive={type ==='withdraw'} activeColor="red">
                        <img src={outcomeImg} alt="Saída" />
                        <span>Saída</span>
                    </RadioBox>
                </TransactionTypeContainer>

                <input placeholder="Categoria" />

                <button type="submit" children="Cadastrar" />
            </ContainerForm>

        </Modal>
    )
}