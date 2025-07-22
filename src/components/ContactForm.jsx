import React from "react";
import { useForm, ValidationError } from "@formspree/react";

function ContactForm() {
    const [state, handleSubmit] = useForm("mkgzjrjz");

    if (state.succeeded) {
        return <p className="text-center text-green-600 text-lg">Thansk for your message, I'll get back to you as soon as possible!</p>;
    }

    return (
        
        <form 
            className="max-w-xl mx-auto bg-gray-900 p-6 rounded shadow space-y-6" 
            onSubmit={handleSubmit}
        >
            {/* Name */}
            <div>
                <label className="block text-sm font-semibold text-[var(--color-text-default)]" htmlFor="name">
                    Name
                </label>
                <input 
                    className="w-full mt-1 px-4 py-2 border border-[var(--color-border-default)] rounded focus:ring-2 focus:ring-[var(--color-border-active)] focus:outline-none" 
                    id="name" 
                    type="text"
                    name="name" 
                    required
                />
            </div>

            {/* Email */}
            <div>
                <label className="block text-sm font-semibold text-[var(--color-text-default)]" htmlFor="email">
                    Email Address
                </label>
                <input 
                    className="w-full mt-1 px-4 py-2 border border-[var(--color-border-default)] rounded focus:ring-2 focus:ring-[var(--color-border-active)] focus:outline-none" 
                    id="email" 
                    type="email"
                    name="email" 
                    required 
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
            </div>

            {/* Phone Number */}
            <div>
                <label className="block text-sm font-semibold text-[var(--color-text-default)]" htmlFor="number">
                    Phone Number
                </label>
                <input 
                    className="w-full mt-1 px-4 py-2 border border-[var(--color-border-default)] rounded focus:ring-2 focus:ring-[var(--color-border-active)] focus:outline-none" 
                    id="number" 
                    type="tel"
                    name="number" 
                />
            </div>

            {/* Message */}
            <div>
                <label className="block text-sm font-semibold text-[var(--color-text-default)]" htmlFor="message">
                    Inquiry Message
                </label>
                <textarea
                    className="w-full mt-1 px-4 py-2 border border-[var(--color-border-default)] rounded focus:ring-2 focus:ring-[var(--color-border-active)] focus:outline-none"
                    id="message"
                    name="message"
                    required
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} />
            </div>

            {/* Submit Button */}
            <div className="text-center">
                <button 
                    className="inline-block px-6 py-2 bg-[var(--color-primary)] hover:bg-[var(--color-primary-active)] text-white rounded font-semibold transition"
                    type="submit"
                    disabled={state.submitting}
                >
                    Submit
                </button>
            </div>
        </form>
    );
}

export default ContactForm;
