import { Dialog, DialogPanel, DialogTitle, TransitionChild } from "@headlessui/react";
import { CheckCircleIcon, ExclamationCircleIcon, ExclamationTriangleIcon, InformationCircleIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";

interface Props {
    isOpen: boolean;
    title: string;
    message: string;
    type: "success" | "error" | "warning";
    onClose: () => void;
    duration?: number;
}

export function Toast({ isOpen, title, message, type, onClose, duration = 2000 }: Props) {
    const [open, setOpen] = useState(false);

    const getIcon = () => {
        switch(type) {
            case "success":
                return <CheckCircleIcon className="w-6 h-6 text-green-500" />;
            case "error":
                return <ExclamationCircleIcon className="w-6 h-6 text-red-500" />;
            case "warning":
                return <ExclamationTriangleIcon className="w-6 h-6 text-yellow-500" />;
            default:
                return <InformationCircleIcon className="w-6 h-6 text-blue-500" />;
        }
    }

    const timer = setTimeout(() => {
        onClose();
    }, duration);

    useEffect(() => {
        setOpen(isOpen);
        timer;
    }, [isOpen]);

    return (
    <Dialog open={open} onClose={() => {}} className="relative z-100">
        <div className=" h-max pointer-events-none fixed inset-y-0 top-0 right-0 flex max-w-full">
            <DialogPanel
                transition
                className="pointer-events-auto relative w-screen max-w-md transform transition duration-500 ease-in-out data-closed:translate-x-full sm:duration-700"
            >
                <div className="px-4 py-6 sm:px-6 rounded-lg shadow-md m-4 bg-white">
                    <div className="flex items-start">
                        <div className="relative p-1.5 -m-1.5">
                            {getIcon()}
                        </div>
                        <div className="flex-grow ml-3">
                        <DialogTitle className="font-medium text-gray-900">{title}</DialogTitle>
                        <p className="text-sm text-gray-500">{message}</p>
                        </div>
                        <TransitionChild>
                            <div className="flex duration-500 ease-in-out data-closed:opacity-0">
                                <button
                                type="button"
                                onClick={onClose}
                                className="relative p-1.5 -m-1.5 hover:cursor-pointer rounded-md text-gray-400 hover:text-gray-500 focus:outline-none"
                                >
                                <XMarkIcon aria-hidden="true" className="size-5" />
                                </button>
                            </div>
                        </TransitionChild>
                    </div>
                </div>
            </DialogPanel>
        </div>
    </Dialog>
    )
}