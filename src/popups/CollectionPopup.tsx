import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

export default function CollcetioPreviewPopup() {
    const [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }
    function openModal() {
        setIsOpen(true)
    }

    return (
        <>
            <a className="bg-white pr-5 underline cursor-pointer" onClick={openModal}>
                Read More
            </a>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-[60]" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
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
                                <Dialog.Panel className="w-full max-w-4xl transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all relative">
                                    <div className="absolute top-3 right-3">
                                        <span
                                            className="cursor-pointer transition-all text-2xl text-black rounded-full block px-2 aspect-square hover:bg-gray-200"
                                            onClick={closeModal}
                                        >
                                            <i className="fa-solid fa-xmark"></i>
                                        </span>
                                    </div>
                                    <div className='mt-5 max-h-[85vh] overflow-y-auto p-10'>
                                        <Dialog.Title
                                            as="h3"
                                            className="text-3xl font-extrabold text-secondary"
                                        >
                                            RoboMetamorphs – Hagen Pietsch Edition 1 of 3
                                        </Dialog.Title>
                                        <div className="mt-2">
                                            <p className="text-sm text-secondary font-normal">
                                                <span className='text-base'>Unleashing the Power of AI and Art in an Immersive Experience!</span>
                                                <br /><br />
                                                Discover where art and AI collide as visionary artist Hagen Pietsch unveils his inaugural NFT collection, "RoboMetamorphs”, a eamless integration of AI-generated imagery and animation, as delightful little robots gracefully transform into captivating forms, showcasing the ever-evolving nature of AI technology.
                                                <br /><br />
                                                By acquiring a "RoboMetamorph" NFT, you can also get an exquisite fine art print of your NFT and serve as a tangible reminder of the harmonious blend of human creativity and technological innovation.
                                                <br /><br />

                                                As a member of our exclusive Discord community, you'll gain access to a sanctuary of like-minded individuals who share your passion for AI-driven art. Immerse yourself in an inspiring atmosphere, exchange ideas, and connect with fellow art enthusiasts fascinated by the extraordinary potential of AI technology.
                                                <br /><br />

                                                Holders also get exclusive tutorials and AMA’s led by Hagen Pietsch himself. Unleash your creativity and learn firsthand how to harness the power of generative image generators, transforming your artistic visions into extraordinary realities.
                                                <br /><br />


                                                Join us on this extraordinary artistic odyssey, where human ingenuity and AI brilliance converge to create an unparalleled experience. Mint your "RoboMetamorph" NFT today and become part of a transformative movement that celebrates the boundless horizons of AI artistry. Unleash your imagination, for the possibilities are truly limitless.
                                                <br /><br />

                                                RoboMetamorphs high quality 3d artworks each one refined by hand beat all the usual flat comic-like PFPs! As owner you qualify for one airdrop per collection. Owners of NFTs from all 3 collection qualifies for a master airdrop.
                                                Join the Discord below and open a ticket to be whitelisted
                                            </p>
                                        </div>
                                    </div>


                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}
