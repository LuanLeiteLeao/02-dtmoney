import Modal from 'react-modal'

interface NewTransactionModalProps{
    onOpen:boolean
    onRequestClose:()=>void
}

export function NewTransactionModal({onOpen, onRequestClose}:NewTransactionModalProps){
    return (
        <Modal
          isOpen={onOpen}
          onRequestClose={onRequestClose}
        >
          <h1>Cadastrar Transação</h1>
        </Modal>
      )
}