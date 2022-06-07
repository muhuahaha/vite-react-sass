import { Link } from 'react-router-dom';
import bedIcon from './assets/svg/bedIcon.svg';
import bathtubIcon from './assets/svg/bathtubIcon.svg';

function ListingItem({ listing, id, onEdit, onDelete }) {
  console.log(listing, 'listing');
  return (
    <li className="categoryListing">
      <Link to={`/category/${listing.type}/${id}`} className="categoryListingLink">
        <img src={listing.imgUrls[0]} alt={listing.name} className="categoryListingImg" />
        <div className="categoryListingDetails">
          <p className="categoryListingLocation">{listing.location}</p>
          <p className="categoryListingName">{listing.name}</p>
          <p className="categoryListingPrice">
            $
            {listing.offer
              ? listing.discountedPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
              : listing.regularPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            {listing.type === 'rent' && ' / Month'}
          </p>
          <div className="categoryListingInfoDiv">
            <img src={bedIcon} alt="bed" />
            <p className="categoryListingInfoText">
              {listing.bedrooms > 1 ? `${listing.bedrooms} Bedrooms` : '1 Bedroom'}
            </p>
            <img src={bathtubIcon} alt="bath" />
            <p className="categoryListingInfoText">
              {listing.bathrooms > 1 ? `${listing.bathrooms} Bathrooms` : '1 Bathroom'}
            </p>
          </div>
        </div>
      </Link>

      {onDelete && (
        <div className="removeIcon" onClick={() => onDelete(listing.id, listing.name)}>
          <h1>delete</h1>
        </div>
      )}

      {onEdit && (
        <div className="editIcon" onClick={() => onEdit(id)}>
          edit
        </div>
      )}
    </li>
  );
}

export default ListingItem;
