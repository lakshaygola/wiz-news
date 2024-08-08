export default function FormInput({inputPlaceholder, inputType, onChange}: any) {
    return (
        <div className="flex py-2 items-center justify-around">
            <input 
            placeholder={inputPlaceholder} 
            type={inputType}
            className="p-2 w-72 bg-transparent border border-gray-400 rounded-lg placeholder-black bg-gray-50"
            onChange={onChange}
            />
        </div>
    );
}