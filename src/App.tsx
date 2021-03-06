import { useState } from "react"
import { TransactionsProvider } from "./hooks/useTransactions"

import { GlobalStyle } from "./styles/global"
import { Header } from "./components/Header"
import { Dashboard } from "./components/Dashboard"
import Modal from 'react-modal'
import { NewTransactionModal } from "./components/NewTransactionModal"

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
    <TransactionsProvider>
      <GlobalStyle />
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />

      <NewTransactionModal
        isOpen={isNewTransactionsModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
    </TransactionsProvider>
  );
}
