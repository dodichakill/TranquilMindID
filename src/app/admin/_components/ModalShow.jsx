"use client";

import React, { useState, useRef } from "react";
import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";
import { AiFillEye } from "react-icons/ai";

const ModalShow = ({
  textBtn,
  nameModal,
  onBtnClick,
  onBtnClose,
  showRole,
  size = "md",
  children,
}) => {
  return (
    <>
      <Button onClick={onBtnClick} className="flex items-center bg-primary">
        <AiFillEye className="mr-2" />
        <span>{textBtn}</span>
      </Button>
      <Modal show={showRole} size={size} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
              {nameModal}
            </h3>
            {children}
            <Button onClick={onBtnClose} className="bg-red-500">
              Tutup
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalShow;
