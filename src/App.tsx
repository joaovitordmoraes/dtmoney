import { useState } from "react"

import { GlobalStyle } from "./styles/global"
import { Header } from "./components/Header"
import { Dashboard } from "./components/Dashboard"
import Modal from 'react-modal'

Modal.setAppElement('#root')

export function App() {
  const [isNewTransactionsModalOpen, setIsNewTransactionsModalOpen] = useState(false);

    function handleOpenNewTransactionModal() {
        setIsNewTransactionsModalOpen(true)
    }

    function handleCloseNewTransactionModal() {
        setIsNewTransactionsModalOpen(false)
    }

  return (
    <>
      <GlobalStyle />
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />

      <Modal
        isOpen={isNewTransactionsModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      >
        <h2>Cadastrar transação</h2>
      </Modal>
    </>
  );
}
