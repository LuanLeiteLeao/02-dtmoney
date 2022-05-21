import logoImg from "../../assets/logo.svg"
import { Container, Content } from "./styles"

interface HeaderProps {
    onOpenHandleOpenNewTransactionModal: () => void;
}

export function Header({ onOpenHandleOpenNewTransactionModal }: HeaderProps) {


    return (
        <Container>
            <Content>
                <img src={logoImg} alt="dt money" />
                <button type="button" onClick={onOpenHandleOpenNewTransactionModal}>
                    Nova transação
                </button>
            </Content>
        </Container>
    )
}