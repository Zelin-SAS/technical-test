import { useEffect, useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle, TransitionChild } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'

interface Props {
  children: React.ReactNode
  isOpen: boolean
  title: string
  description: string
  size: "md" | "lg"
  onClose: () => void
}

export default function Drawer({ children, isOpen, title, description, size = "md", onClose } : Props) {
  const [open, setOpen] = useState<boolean>(true)

    useEffect(() => {
        setOpen(isOpen)
    }, [isOpen]);

  return (
    <Dialog open={open} onClose={onClose} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500/75 transition-opacity duration-500 ease-in-out data-closed:opacity-0"
      />

      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <DialogPanel
              transition
              className={`pointer-events-auto relative w-screen max-w-${size} transform transition duration-500 ease-in-out data-closed:translate-x-full sm:duration-700`}
            >
              <div className="flex h-full flex-col bg-white pt-6 shadow-xl">
                <div className="px-4 sm:px-6">
                  <div className="flex items-center justify-between">
                    <div>
                        <DialogTitle className="text-2xl font-semibold text-gray-900">{title}</DialogTitle>
                    </div>
                    <TransitionChild>
                    <div className="flex duration-500 ease-in-out data-closed:opacity-0">
                      <button
                      type="button"
                      onClick={onClose}
                      className="relative p-1.5 -m-1.5 hover:cursor-pointer rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                      >
                      <span className="absolute -inset-2.5" />
                      <span className="sr-only">Close panel</span>
                      <XMarkIcon aria-hidden="true" className="size-6" />
                      </button>
                    </div>
                    </TransitionChild>
                    </div>
                    <p className="text-sm text-gray-500">{description}</p>
                </div>
                <div className="relative flex-1">{children}</div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </div>
    </Dialog>
  )
}