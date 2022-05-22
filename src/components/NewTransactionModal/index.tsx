import Modal from 'react-modal'
import { ContainerForm } from './styles'
import closeImg from "../../assets/close.svg"

interface NewTransactionModalProps {
    onOpen: boolean
    onRequestClose: () => void
}

export function NewTransactionModal({ onOpen, onRequestClose }: NewTransactionModalProps) {
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
                <input placeholder="Categoria" />

                <button type="submit" children="Cadastrar"/>
            </ContainerForm>

        </Modal>
    )
}