import React from 'react';
import { useNavigate } from 'react-router-dom';

const PackageCard = ({ id, image, badge, badgeColor, title, description, miles, fuel, transmission, price }) => {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    if (!id) return;
    navigate(`/package-details/${id}`);
  };

  return (
    <div 
      onClick={handleViewDetails}
      className="bg-global-1 border border-global-3 rounded-2xl overflow-hidden flex flex-col md:flex-row cursor-pointer hover:border-global-5 transition-colors"
    >
      <div className="relative flex-shrink-0 w-full h-56 md:w-80 md:h-68">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div className="absolute top-4 left-4 flex items-center justify-between w-full pr-8">
          {badge && (
            <span className={`${badgeColor} text-global-1 font-dm-sans font-medium text-sm leading-5 px-4 py-2 rounded-2xl capitalize`}>
              {badge}
            </span>
          )}
          <button 
            className="bg-global-10 border border-global-5 rounded-full p-2 ml-auto"
            onClick={(e) => e.stopPropagation()} // Prevent card click when clicking favorite
          >
            <img src="/images/img_background.svg" alt="Favorite" className="w-6 h-6" />
          </button>
        </div>
      </div>
      <div className="flex-1 p-4 md:p-6 flex flex-col justify-between">
        <div>
          <h3 className="text-global-5 font-dm-sans font-medium text-lg leading-6 mb-2">{title}</h3>
          <p className="text-global-5 font-dm-sans text-sm leading-4 mb-4 whitespace-pre-line">{description}</p>
          <div className="space-y-2 mb-4">
            {miles && (
              <div className="flex items-center space-x-2">
                <img src="/images/img_icon_white_a700_18x18.svg" alt="Miles" className="w-4 h-4" />
                <span className="text-global-5 font-dm-sans text-sm leading-5">{miles}</span>
              </div>
            )}
            {fuel && (
              <div className="flex items-center space-x-2">
                <img src="/images/img_icon_1.svg" alt="Fuel" className="w-4 h-4" />
                <span className="text-global-5 font-dm-sans text-sm leading-5">{fuel}</span>
              </div>
            )}
            {transmission && (
              <div className="flex items-center space-x-2">
                <img src="/images/img_icon_2.svg" alt="Transmission" className="w-4 h-4" />
                <span className="text-global-5 font-dm-sans text-sm leading-5">{transmission}</span>
              </div>
            )}
          </div>
        </div>
        <div className="flex items-center justify-between mt-4">
          <span className="text-global-5 font-dm-sans font-bold text-xl leading-7">{price}</span>
          <div className="flex items-center space-x-2 text-global-5 font-dm-sans font-medium text-base leading-5">
            <span>View Details</span>
            <img src="/images/img_vector_white_a700.svg" alt="Arrow" className="w-4 h-4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageCard; 