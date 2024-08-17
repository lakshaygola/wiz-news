import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { useState } from 'react';


export default function CountryOptions() {
    const [country, setCountry] = useState("World");

    function changeCountry(e) {
        setCountry(e.target.innerHTML);
    }


    return (
        <Menu as="div" className="relative inline-block text-center">
            <div>
                <MenuButton className="inline-flex w-full justify-center rounded-md px-3 py-2 gap-1 text-white shadow-sm hover:text-black transition ease-in delay-150">
                {country}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4 m-auto">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
                </MenuButton>
            </div>

            <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in">
                    <div className="py-1">
                    <MenuItem>
                        <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                        onClick={changeCountry}>
                        In
                        </a>
                    </MenuItem>
                    <MenuItem>
                        <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                        onClick={changeCountry}>
                        US
                        </a>
                    </MenuItem>
                    <MenuItem>
                        <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                        onClick={changeCountry}>
                        UK
                        </a>
                    </MenuItem>
                    <MenuItem>
                        <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                        onClick={changeCountry}>
                        AU
                        </a>
                    </MenuItem>
                    <MenuItem>
                        <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                        onClick={changeCountry}>
                        RUS
                        </a>
                    </MenuItem>
                </div>
            </MenuItems>
        </Menu>
    );
}