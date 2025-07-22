import React from "react";
import { Footer, FooterCopyright, FooterLink, FooterLinkGroup } from "flowbite-react";

function FooterComponent() {
    return (
        <Footer 
            container
            className="bg-gray-900 text-white border-t border-gray-800"
        >
            <div className="w-full max-w-screen-xl mx-auto p-4 flex flex-col md:flex-row items-center justify-between">
                <FooterCopyright 
                    href="#" 
                    by=" NDKM" 
                    year={2025} 
                    className="text-gray-400"
                />
                <FooterLinkGroup className="flex gap-4 mt-4 md:mt-0">
                    <FooterLink 
                        href="https://www.linkedin.com/in/nicholasmanning35/"
                        className="text-gray-400 hover:text-white transition"
                    >
                        LinkedIn
                    </FooterLink>
                    <FooterLink 
                        href="https://www.instagram.com/nicholas.d.k.manning/"
                        className="text-gray-400 hover:text-white transition"
                    >
                        Instagram
                    </FooterLink>
                    <FooterLink 
                        href="https://github.com/NicholasDKManning"
                        className="text-gray-400 hover:text-white transition"
                    >
                        GitHub
                    </FooterLink>
                </FooterLinkGroup>
            </div>
        </Footer>
    );
}

export default FooterComponent;