import PropTypes from 'prop-types';
import React from 'react'

const Logo = ({ src, alt, href}) => {
  return (
    <div>
      {LogoData.map[(item) => {
        return (
          <a className='w-[70px] block' key={item.href} href={item.href}>
              <img src={item.src} alt={item.href} />
          </a>
        )
      }]}
    </div>
  );
};

Logo.PropTypes={
  src: PropTypes.string,
  alt: PropTypes.string,
};

export default Logo