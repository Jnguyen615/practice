import React from 'react';
import PropTypes from 'prop-types';
import FavoriteIcon from '../FavoriteIcon/FavoriteIcon';
import './MountCard.scss'

const MountCard = ({
  id,
  name,
  image,
  description,
  mount,
  onClick,
  favoriteMounts,
  toggleFavoriteMount,
  isFavoritesPage,
  openModal,
}) => {
  const isFavorite = favoriteMounts.some((favMount) => favMount.id === id); // Change includes to some

  const handleOnClick = () => {
    if (onClick) {
      onClick();
    }
  };

  const handleToggleFavorite = () => {
    toggleFavoriteMount(mount); // Calls the function to toggle the mount's favorite status
  };

  return (
    <div className="mount-card">
      <h3 className="mount-name">{name}</h3>
      <img
        id={id}
        src={image}
        alt={name}
        className="mount-card-image"
        onClick={handleOnClick}
      />
     <p className='mount-description'>{description}</p>
      {!isFavoritesPage && ( // Conditionally render the FavoriteIcon except on the FavoritesPage
        <FavoriteIcon
          id={id}
          isFavorite={isFavorite}
          toggleFavoriteMount={handleToggleFavorite}
        />
      )}
    </div>
  );
};

MountCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  favoriteMounts: PropTypes.array.isRequired,
  toggleFavoriteMount: PropTypes.func.isRequired,
  favoriteMounts: PropTypes.array.isRequired,
};

export default MountCard;
