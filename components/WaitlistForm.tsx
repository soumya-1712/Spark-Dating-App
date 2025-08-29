import React, { useState } from 'react';

const InstagramIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
);

const PhoneIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
);

const WaitlistForm: React.FC = () => {
    // 1. **SETUP FORM IN FORMSPREE**
    //    - Go to https://formspree.io/ and create a new form.
    //    - You will get a unique endpoint URL. It will look like:
    //      https://formspree.io/f/xxxxxxxx
    //    - Replace 'YOUR_FORM_ID_HERE' with your actual form ID.
    const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xvgbkpkj';

    const [instagramId, setInstagramId] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsLoading(true);
        setError(null);
        
        try {
            const response = await fetch(FORMSPREE_ENDPOINT, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    instagram: instagramId,
                    phone: phoneNumber,
                }),
            });

            if (response.ok) {
                setIsSuccess(true);
                setInstagramId('');
                setPhoneNumber('');
            } else {
                const data = await response.json();
                // FIX: Replace `Object.hasOwn` with a more compatible check for older JS environments.
                if (Object.prototype.hasOwnProperty.call(data, 'errors')) {
                    setError(data["errors"].map((error: any) => error["message"]).join(", "));
                } else {
                    setError('An unexpected error occurred. Please try again.');
                }
            }
        } catch (err) {
            setError('Failed to submit the form. Please check your connection.');
        } finally {
            setIsLoading(false);
        }
    };

    if (isSuccess) {
        return (
            <div className="bg-green-500/10 border border-green-500 text-green-300 p-6 rounded-lg text-center">
                <h3 className="font-bold text-xl mb-2">You're on the list! 🎉</h3>
                <p>Thanks for joining the Spark waitlist. We'll be in touch soon with exciting updates.</p>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4 p-4 md:p-6 bg-slate-800/50 rounded-lg border border-slate-700 shadow-lg backdrop-blur-sm">
            {error && (
                <div className="bg-red-500/10 border border-red-500 text-red-300 p-3 rounded-md text-sm">
                    {error}
                </div>
            )}
            <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <InstagramIcon />
                </div>
                <input
                    type="text"
                    name="instagram" // Important for Formspree
                    placeholder="Your Instagram ID"
                    value={instagramId}
                    onChange={(e) => setInstagramId(e.target.value)}
                    required
                    className="w-full pl-10 pr-4 py-3 bg-slate-700/50 border border-slate-600 rounded-md focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-all duration-300"
                />
            </div>
            <div className="relative">
                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <PhoneIcon />
                </div>
                <input
                    type="tel"
                    name="phone" // Important for Formspree
                    placeholder="Your Phone Number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    required
                    className="w-full pl-10 pr-4 py-3 bg-slate-700/50 border border-slate-600 rounded-md focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-all duration-300"
                />
            </div>
            <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-pink-600 text-white font-bold py-3 px-4 rounded-md hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-pink-500 transition-all duration-300 disabled:bg-pink-800 disabled:cursor-not-allowed flex items-center justify-center"
            >
                {isLoading ? (
                    <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Submitting...
                    </>
                ) : (
                    'Join Waitlist'
                )}
            </button>
        </form>
    );
};

export default WaitlistForm;