import React from 'react';
import { Twitter, Instagram, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-800 text-white mt-6 py-4 px-6">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0">
                    <h3 className="text-lg font-semibold">MLB Trip Planner</h3>
                    <p className="text-sm">Race to visit all 30 stadiums</p>
                </div>

                {/* <div className="flex space-x-4">
                    <a href="#" className="hover:text-blue-400 transition-colors duration-300">
                        <Twitter size={20} />
                    </a>
                    <a href="#" className="hover:text-pink-400 transition-colors duration-300">
                        <Instagram size={20} />
                    </a>
                    <a href="#" className="hover:text-blue-600 transition-colors duration-300">
                        <Facebook size={20} />
                    </a>
                </div> */}

                <div className="mt-4 md:mt-0 text-sm">
                    {/* <a href="#" className="hover:underline mr-4">Privacy Policy</a>
                    <a href="#" className="hover:underline mr-4">Terms of Service</a> */}
                    <span>&copy; 2024 MLB Trip Planner</span><br/>
                    <span>
                        Authors: Galen Wei and Zachary Silver
                    </span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;