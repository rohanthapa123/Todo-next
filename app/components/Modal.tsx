type props = {
    modalOpen: boolean,
    setModalOpen: (state: boolean) => boolean | void;
    children: React.ReactNode
}

const Modal = ({ modalOpen, setModalOpen, children }: props) => {
    return (
        <div className={`modal ${modalOpen ? "modal-open" : " "}`}>
            <div className="modal-box relative">
                <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button onClick={() => setModalOpen(false)} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
                {children}
            </div>
        </div>
    )
}

export default Modal