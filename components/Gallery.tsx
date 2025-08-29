import React from 'react';

const Gallery: React.FC = () => {
    return (
        <section className="py-20">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold">Moments of Connection</h2>
                    <p className="text-slate-400 mt-2 max-w-3xl mx-auto">
                        A glimpse into the beautiful stories and connections sparked on our app.
                    </p>
                </div>
                <div className="max-w-5xl mx-auto">
                    <div 
                        className="group overflow-hidden rounded-xl shadow-2xl border border-slate-800 relative aspect-w-16 aspect-h-9" 
                        aria-label="Image collage of couples"
                    >
                        <img
                            src="https://media.discordapp.net/attachments/931126671250165783/1411078372536225952/image.png?ex=68b358a4&is=68b20724&hm=609ff20c81a84fce17b8e3c80bedee5b3e853f6c204355fd41734d82a10d340b&=&format=webp&quality=lossless"
                            alt="A collage of diverse couples sharing romantic and happy moments"
                            loading="lazy"
                            className="w-full h-full object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-105"
                        />
                         <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Gallery;
