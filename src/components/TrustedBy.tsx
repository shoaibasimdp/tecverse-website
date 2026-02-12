

import React from 'react';

type Brand = {
    name: string;
    logoUrl: string;
};

const brands: Brand[] = [
    { name: 'CP-PLUS', logoUrl: 'https://theobservatory.in/wp-content/uploads/2020/08/4-4.jpg' },
    { name: 'xp', logoUrl: 'https://www.experis.com/-/media/project/manpowergroup/experis/a-experis-global/social-media/og-images/experis-logo-og.jpg' },
    { name: 'kforce', logoUrl: 'https://c.smartrecruiters.com/sr-company-logo-prod-aws-dc5/542648e3e4b0f0afeae3943b/huge?r=s3-eu-central-1&_1464190249417' },
    { name: 'synechron', logoUrl: 'data:image/png;base64,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' },
    { name: 'data panther', logoUrl: 'data:image/png;base64,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' },
    { name: 'Apex Industries', logoUrl: 'https://placehold.co/150x80/FFFFFF/000000?text=Apex' },
];

const BrandMarqueeRTL = () => {
    return (
        <section className="bg-white py-12 overflow-hidden">
            <div className=" mx-auto px-4">
                <h2 className="text-center text-black text-7xl font-light mb-12">
                    Trusted by Industry Leaders
                </h2>

                <div className="relative w-full overflow-hidden mt-16">
                    <div
                        className="flex w-max gap-16"
                        style={{
                            animation: 'marquee-rtl 30s linear infinite',
                        }}
                    >
                        {[...brands, ...brands].map((brand, index) => (
                            <div
                                key={`${brand.name}-${index}`}
                                className="flex items-center justify-center min-w-[180px]"
                            >
                                <img
                                    src={brand.logoUrl}
                                    alt={brand.name}
                                    className="h-20 w-auto object-contain  hover:opacity-100 hover: transition"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Inline keyframes (SERVER SAFE) */}
            <style>{`
        @keyframes marquee-rtl {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
        </section>
    );
};

export default BrandMarqueeRTL;
