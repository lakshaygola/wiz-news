export default function FormInput({inputPlaceholder, inputType, onChange}: any) {
    return (
        <div className="flex py-2 items-center justify-around">
            <input 
            placeholder={inputPlaceholder} 
            type={inputType}
            className="p-2 w-50 bg-transparent border border-gray-400 rounded-lg placeholder-black bg-gray-50 md:w-72"
            onChange={onChange}
            />
        </div>
    );
}