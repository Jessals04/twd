import { AiOutlineUpCircle, AiOutlineDownCircle } from 'react-icons/ai';

export default function Pricing({ showPricing, handleSetShowPricing }) {

    function handleClick() {
        handleSetShowPricing();
    }

    return (
        <div className="w-full flex flex-col justify-center">
            <button
                className="underline hover:no-underline m-auto flex gap-2"
                onClick={handleClick}
            >Pricing</button>

            {
                showPricing
                ?
                <div className="mx-auto">
                    <div className="mx-auto py-4 md:py-6 flex flex-col md:flex-row gap-4">
                        <div className="bg-off-white border-2 border-grey rounded-md p-8 transition-shadow shadow-md hover:shadow-xl flex flex-col">
                            <h1 className="text-base md:text-lg m-auto">30 Minute Sessions</h1>
                            <p className="text-lg md:text-3xl m-auto">$50 <span className="text-xl">/ session*</span></p>
                        </div>

                        <div className="bg-off-white border-2 border-grey rounded-md p-8 transition-shadow shadow-md hover:shadow-xl flex flex-col">
                            <h1 className="text-base md:text-lg m-auto">45 Minute Sessions</h1>
                            <p className="text-lg md:text-3xl m-auto">$65 <span className="text-xl">/ session*</span></p>
                        </div>
                    </div>

                    <h1 className="m-auto text-center text-gray-400 text-xs md:text-sm">*public holiday surcharge may apply</h1>
                </div>
                :
                <></>
            }
        </div>
    );
}