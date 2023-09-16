"use client";

import React, { useState, useRef } from "react";
import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";

const ModalForm = ({
  textBtn,
  nameModal,
  showRole,
  size = "md",
  onClose,
  onSubmit,
  children,
  onBtnClick,
  disabled,
}) => {
  return (
    <>
      <Button onClick={onBtnClick} className="mb-5">
        {textBtn}
      </Button>
      <Modal show={showRole} size={size} popup onClose={onClose}>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
              {nameModal}
            </h3>
            {children}
            <div className="w-full flex gap-5">
              <Button onClick={onClose} className="bg-red-500 hover:bg-red-600">
                Batalkan
              </Button>
              <Button
                onClick={onSubmit}
                disabled={disabled}
                className="disabled:bg-slate-500 disabled:cursor-not-allowed"
              >
                Submit
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalForm;
