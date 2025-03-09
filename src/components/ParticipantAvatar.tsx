
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

const getRandomColor = (name: string): string => {
  const colors = [
    'bg-anaplan-blue-stinson',
    'bg-anaplan-blue-coats',
    'bg-anaplan-blue-mariner',
    'bg-anaplan-blue-matisse',
    'bg-anaplan-neutral-cadet',
    'bg-anaplan-neutral-hazell',
    'bg-anaplan-neutral-manatee',
    'bg-anaplan-neutral-kimberly'
  ];
  
  // Simple hash function for consistent colors per name
  const hash = name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  return colors[hash % colors.length];
};

const ParticipantAvatar: React.FC<ParticipantAvatarProps> = ({ name, imagePath }) => {
  return (
    <div className="tooltip" data-tip={name}>
      {imagePath ? (
        <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white">
          <img
            src={imagePath}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
      ) : (
        <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-medium ${getRandomColor(name)}`}>
          {getInitials(name)}
        </div>
      )}
    </div>
  );
};

export default ParticipantAvatar;
