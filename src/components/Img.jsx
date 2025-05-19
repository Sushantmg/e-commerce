import React from 'react';

const Img = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-green-100 to-green-200 dark:from-gray-800 dark:to-gray-900 px-4  transition-colors duration-500">
            <div className="backdrop-blur-xl bg-white/20 dark:bg-white/10 border border-white/30 dark:border-white/20 rounded-3xl shadow-2xl p-10 w-full max-w-7xl text-center">
                <h1 className="text-4xl font-extrabold text-green-500 drop-shadow mb-8 dark:text-green-300">
                    Download our App!
                </h1>

                {/* App preview image */}
                <img
                    src="webimg.webp"
                    alt="App Preview"
                    className="mx-auto mb-10 w-full max-w-6xl rounded-2xl shadow-xl border border-white/20 dark:border-white/10"
                />

                {/* Download buttons */}
                <div className="flex justify-center gap-6 flex-wrap">
                    <img
                        src="googleplay.webp"
                        alt="Get it on Google Play"
                        className="w-44 hover:scale-110 hover:rotate-1 transition-transform duration-300 shadow-lg rounded-lg"
                    />
                    <img
                        src="appstore.webp"
                        alt="Download on the App Store"
                        className="w-44 hover:scale-110 hover:-rotate-1 transition-transform duration-300 shadow-lg rounded-lg"
                    />
                </div>
            </div>
        </div>
    );
};

export default Img;
