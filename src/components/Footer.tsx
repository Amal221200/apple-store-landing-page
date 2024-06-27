import { footerLinks } from "../constants"


const Footer = () => {
    return (
        <footer className="px-5 py-5 sm:px-10">
            <div className="screen-max-width">
                <div>
                    <p className="text-xs font-semibold text-gray">More ways to shop: {' '}
                        <span className="text-blue underline">
                            Find an Apple {' '}
                        </span>
                        or {' '}
                        <span className="text-blue underline">
                            other retail store {' '}
                        </span> near you
                    </p>
                    <p className="text-xs font-semibold text-gray">
                        Or call 000800-040-1966
                    </p>
                </div>

                <div className="my-5 h-[1px] w-full bg-neutral-700" />
                <div className="flex flex-col justify-between md:flex-row md:items-center">
                    <p className="text-xs font-semibold text-gray">
                       Copyright @ 2024 Apple Inc. All rights reserved.
                    </p>
                    <div className="flex gap-x-1">
                        {
                         footerLinks.map((link)=> (
                            <p key={link} className="group text-xs font-semibold text-gray">
                                {link} <span className="inline group-last-of-type:hidden">|</span>
                            </p>
                         ))   
                        }
                    </div>
                </div>

            </div>
        </footer>
    )
}

export default Footer