import { useEffect, RefObject } from "react";
import Button from "./Button";

interface ModalProps {
  onClose: () => void;
  modalRef: RefObject<HTMLElement | null>;
}

function Modal({ onClose, modalRef }: ModalProps) {
  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      console.log("executing onClose function");
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="fixed inset-0">
      <div className="fixed inset-0 bg-black opacity-30 z-10"></div>
      <div
        ref={modalRef}
        className="w-1/2 h-1/2 bg-white relative z-20 rounded-lg translate-1/2 p-10"
      >
        <h2 className="font-semibold">
          Ahorra en sobreprecios en el tipo de cambio
        </h2>
        <p>
          El coste de tu transferencia se basa en la comisión y en el tipo de
          cambio. Muchos grandes bancos comerciales ofrecen transferencias "sin
          comisiones", pero en realidad ocultan un sobreprecio en el tipo de
          cambio y acabas pagando más.
        </p>
        <p>
          En Wise, nunca haremos eso. Solo usamos el tipo de cambio medio del
          mercado y mostramos nuestras comisiones por adelantado. Esta tabla
          compara las comisiones que realmente pagarías al enviar dinero con los
          bancos y proveedores más populares, y con nosotros.
        </p>
        <div className="mt-4">
          <Button onClick={onClose} variant="solid">
            Close
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
