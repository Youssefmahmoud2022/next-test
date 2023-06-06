"use client";
import { Dialog, Transition } from "@headlessui/react";
import React, { useState, Fragment, useCallback, Children } from "react";

import { AiFillCloseCircle } from "react-icons/ai";

const Modal = ({ title,children ,btnIcon}) => {
  const [toggleModal, setToggleModal] = useState(false);

  const toggleModalFunc = useCallback(() => {
    setToggleModal((prev) => (prev = !prev));
  }, [toggleModal]);

  return (
    <>
      <Transition appear show={toggleModal} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={toggleModalFunc}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-full p-4">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel
                  dir="rtl"
                  className="w-full transform overflow-scroll rounded-2xl bg-white p-2 shadow-xl transition-all h-[320px]"
                >
                  <div className="modal_body">
                    <button onClick={toggleModalFunc} className="text-2xl">
                      <AiFillCloseCircle />
                    </button>
                    <div className="mt-2">
                      {/* <Component imgsArray={imgsArray} showModal={showModal} toggleModalFunc={toggleModalFunc}
                        /> */}
                        {children}
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
      <button
        className={`mt-3 h-[50px] px-3 textColor flex items-center justify-center gap-1 border-[1px] border-[#484868] rounded-md p-2`}
        onClick={toggleModalFunc}
      >
        <span className={`whitespace-nowrap `}>{title}</span>
        <img src={btnIcon} alt="" />
      </button>
    </>
  );
};

export default Modal;
