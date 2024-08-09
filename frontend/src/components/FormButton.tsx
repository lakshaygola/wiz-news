export default function FormButton ({buttonText, onClick}: any) {
    return (
        <div 
        className="border border-black rounded-lg w-2/3 px-4 py-2 text-center mt-6 text-lg bg-black text-white hover:text-black hover:border-white hover:bg-white transition ease-in delay-550 md:w-2/3"
        onClick={onClick}>
            {buttonText}
        </div>
    );
}