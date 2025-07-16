import React from 'react';
import { useNavigate } from 'react-router-dom';

const PackageCard = ({ id, image, title, description, price }) => {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    if (!id) return;
    navigate(`/package-details/${id}`);
  };

  // console.log('PackageCard image:', image);

  const getImageUrl = (image) => {
    if (!image) return '';
    if (image.startsWith('http')) return image;
    if (image.startsWith('/images/')) return image; // for static images in public
    // For uploaded images, prepend backend URL
    if (image.startsWith('uploads/')) {
      return `${import.meta.env.VITE_API_BASE_URL}/${image}`;
    }
    return `${import.meta.env.VITE_API_BASE_URL}/uploads/${image}`;
  };

  return (
    <div 
      onClick={handleViewDetails}
      className="bg-global-1 border border-global-3 rounded-2xl overflow-hidden flex flex-col cursor-pointer hover:border-global-5 transition-colors"
    >
      <div className="relative w-full h-56" style={{ background: 'red' }}>
        <img src={getImageUrl(image)} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="flex-1 p-4 flex flex-col justify-between">
        <div>
          <h3 className="text-global-5 font-dm-sans font-medium text-lg leading-6 mb-2">{title}</h3>
          <p className="text-global-5 font-dm-sans text-sm leading-4 mb-4 whitespace-pre-line">{description}</p>
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