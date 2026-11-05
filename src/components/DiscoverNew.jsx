import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useCart } from '../context/CartContext';
import { DoodleHeart, DoodleLeaf, DoodleSparkle } from './Doodles';
import { ArrowRight, Check } from 'lucide-react';

export const DiscoverNew = ({ onOpenQuickView }) => {
  const { lang } = useLanguage();
  const { addToCart } = useCart();
  const [addedId, setAddedId] = React.useState(null);

  const discoveryItems = [
    {
      id: 'prod-tropical-mix',
      titleEn: 'Tropical Fruit Mix',
      titleAr: 'ميكس الفواكه الاستوائية',
      descEn: 'Sun-kissed fruits in every handful.',
      descAr: 'فواكه مجففة طبيعية مشمسة في كل قضمة.',
      priceAED: 29,
      image: '/assets/bitejoy/tropical-fruit-bowl.png',
      bgColor: 'bg-[#E4F3EC]',
      borderColor: 'border-[#C9EFE0]',
      doodle: <DoodleLeaf className="w-6 h-6 text-[#4E9F88]" />,
    },
    {
      id: 'prod-choco-clusters',
      titleEn: 'Choco Almond Clusters',
      titleAr: 'عناقيد اللوز بالشوكولاتة',
      descEn: 'Crunchy, chocolaty & totally addictive.',
      descAr: 'قرمشة لوز بالشوكولاتة الداكنة لا تُقاوم.',
      priceAED: 31,
      image: '/assets/bitejoy/choco-clusters.png',
      bgColor: 'bg-[#FDF1F2]',
      borderColor: 'border-[#FAD4D6]',
      doodle: <DoodleHeart className="w-5 h-5 text-[#C0121D]" />,
    },
    {
      id: 'prod-chickpeas',
      titleEn: 'Herb Roasted Chickpeas',
      titleAr: 'حمص محمص بالأعشاب والملح',
      descEn: 'Savory crunch with a hint of herbs.',
      descAr: 'قرمشة مالحة خفيفة بنكهة الأعشاب العطرية.',
      priceAED: 20,
      image: '/assets/bitejoy/roasted-chickpeas.png',
      bgColor: 'bg-[#E1EFF8]',
      borderColor: 'border-[#C8E7F9]',
      doodle: <DoodleSparkle className="w-5 h-5 text-[#38BDF8]" />,
    },
  ];

  const handleTryItNow = (item) => {
    addToCart({
      id: item.id,
      nameEn: item.titleEn,
      nameAr: item.titleAr,
      priceAED: item.priceAED,
      image: item.image,
      weight: 'Full Pack',
    });
    setAddedId(item.id);
    setTimeout(() => setAddedId(null), 1800);
  };

  return (
    <section id="discover" className="py-10 sm:py-14 bg-[#FFFDF9] relative">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 sm:mb-10">
          <div className="flex items-center gap-2">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#24140E] tracking-tight font-sans">
              {lang === 'ar' ? 'اكتشف أصنافاً جديدة' : 'Discover Something New'}
            </h2>
            <DoodleHeart className="w-5 h-5 text-[#C0121D]" />
          </div>

          <a
            href="#top-picks"
            className="self-start sm:self-auto inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#63534B] hover:text-[#C0121D] px-3.5 py-1.5 rounded-full border border-[#24140E]/10 hover:border-[#C0121D] bg-white transition-all shadow-2xs group"
          >
            <span>{lang === 'ar' ? 'عرض الكل' : 'View All'}</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
          </a>
        </div>

        {/* 3 Large Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {discoveryItems.map((item) => (
            <div
              key={item.id}
              className={`rounded-3xl p-5 sm:p-7 relative overflow-hidden border transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col justify-between ${item.bgColor} ${item.borderColor}`}
            >
              {/* Doodle in corner */}
              <div className="absolute top-4 right-4 sm:top-6 sm:right-6 rtl:right-auto rtl:left-4 rtl:sm:left-6 opacity-85">
                {item.doodle}
              </div>

              {/* Text Area */}
              <div className="pe-12 max-w-[210px] sm:max-w-none">
                <h3 className="text-lg sm:text-2xl font-black text-[#24140E] leading-tight font-sans">
                  {lang === 'ar' ? item.titleAr : item.titleEn}
                </h3>
                <p className="text-xs sm:text-sm text-[#63534B] mt-1.5 font-medium leading-relaxed">
                  {lang === 'ar' ? item.descAr : item.descEn}
                </p>
                <div className="mt-2 text-xs sm:text-sm font-black text-[#24140E]">
                  {lang === 'ar' ? `${item.priceAED} د.إ` : `AED ${item.priceAED}`}
                </div>
              </div>

              {/* Bottom Row: Pill Button + Food Photo */}
              <div className="flex items-end justify-between mt-5 pt-2">
                <button
                  type="button"
                  onClick={() => handleTryItNow(item)}
                  className={`px-4 sm:px-5 py-2.5 rounded-full text-xs font-black transition-all shadow-sm flex items-center gap-1.5 active:scale-95 min-h-[40px] ${
                    addedId === item.id
                      ? 'bg-[#C0121D] text-white'
                      : 'bg-white text-[#24140E] hover:bg-[#C0121D] hover:text-white'
                  }`}
                >
                  {addedId === item.id ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-white" />
                      <span>{lang === 'ar' ? 'تمت الإضافة!' : 'Added!'}</span>
                    </>
                  ) : (
                    <>
                      <span>{lang === 'ar' ? 'جرّب الآن' : 'Try It Now'}</span>
                    </>
                  )}
                </button>

                {/* Food Photo */}
                <div className="w-18 h-18 sm:w-24 sm:h-24 rounded-full overflow-hidden shadow-md border-2 border-white flex items-center justify-center bg-white/60 transform hover:scale-110 transition-transform shrink-0">
                  <img
                    src={item.image}
                    alt={item.titleEn}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
