import { useState } from "react";
import { MdFilterListAlt } from "react-icons/md";
import { Modal } from "../Modal";
import { Button } from "../Button";

export const Filter = () => {
  const [isOpen, setIsOpen] = useState(false);

  const showModal = () => {
    setIsOpen(true);
  };
  return (
    <>
      {isOpen && <Modal setIsOpen={setIsOpen} />}
      <Button onClick={showModal}>
        <MdFilterListAlt />
      </Button>
    </>
  );
};
