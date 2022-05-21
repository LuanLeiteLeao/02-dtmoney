import Modal from 'react-modal'
import { ContainerForm } from './styles'

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
            <ContainerForm>
                <h1>Cadastrar Transação</h1>
                <input placeholder="Título" />
                <input type="number" placeholder="Valor" />
                <input placeholder="Categoria" />

                <button type="submit" />
            </ContainerForm>

        </Modal>
    )
}