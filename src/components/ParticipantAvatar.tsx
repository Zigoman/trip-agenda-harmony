
import React from 'react';

type ParticipantAvatarProps = {
  name: string;
  imagePath?: string;
};

const getInitials = (name: string): string => {
  const parts = name.split(' ');
  if (parts.length >= 2) {
    return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
  }
  return name.substring(0, 2).toUpperCase();
};

const ParticipantAvatar: React.FC<ParticipantAvatarProps> = ({ name, imagePath }) => {
  return (
    <div className="tooltip inline-block" data-tip={name}>
      {imagePath ? (
        <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white z-10">
          <img
            src={imagePath}
            alt={name}
            className="w-full h-full object-cover"
            onError={(e) => {
              // If image fails to load, fallback to initials
              e.currentTarget.style.display = 'none';
              e.currentTarget.parentElement!.classList.add('bg-[#081C53]');
              e.currentTarget.parentElement!.classList.add('flex', 'items-center', 'justify-center', 'text-[#FE6100]', 'font-medium');
              if (e.currentTarget.parentElement!.textContent === '') {
                e.currentTarget.parentElement!.textContent = getInitials(name);
              }
            }}
          />
        </div>
      ) : (
        <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#081C53] text-[#FE6100] font-medium border-2 border-white z-10">
          {getInitials(name)}
        </div>
      )}
    </div>
  );
};

export default ParticipantAvatar;
