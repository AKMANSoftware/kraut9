import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

type Props = {
  videoLink?: string;
};

export default function VideoPreviewPopup({ videoLink }: Props) {
  let [isOpen, setIsOpen] = useState(false)
  function closeModal() {
    const videoElement = document.getElementById("video") as HTMLVideoElement;
    setIsOpen(false);
    videoElement.pause();
  }

  function openModal() {
    const videoElement = document.getElementById("video") as HTMLVideoElement;
    setIsOpen(true);
    // videoElement.play();
    }
    
    
    
    
    


  return (
    <>
      <div className="absolute inset-0 flex items-center justify-center">
        <button
          className="bg-secondary rounded-full p-7 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          onClick={openModal}
        >
          <img src="/images/playbutton.svg" width={24} height={24} />
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm"/>
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto ">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-screen-lg transform overflow-hidden  rounded-2xl bg-black text-left align-middle shadow-xl transition-all relative">
                  <video  src={videoLink} width={505} height={406} controls={true} autoPlay={false}
                    className="h-full w-full object-cover object-center aspect-video rounded-2xl"
                  ></video>
                  <button className='absolute top-5 right-5'>
                    <i className="fa-solid fa-xmark text-[32px] text-white"></i>
                  </button>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
