import React from 'react';
import PropTypes from 'prop-types';

const SD = ({ size=100 }) => {
  return (
    <svg
      width={size}
      height={size}
      preserveAspectRatio="xMidYMid slice"
      viewBox="0 0 560 400"
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      clipRule="evenodd"
    >
      <path
        d="M223.522 66.637c-25.46 0-43.636 18.594-43.52 42.922v48.029c0 16.459 13.837 32.726 33.256 32.726h77.64c5.352 0 6.792 4.884 6.792 6.758 0 .666-.064 42.248-.064 42.248.032 11.074-6.452 19.786-17.968 19.786h-11.31v-58.259h-27.079v.044h-.01l.014 58.215h-28.5c-4.838-.164-5.682-4.729-5.682-6.786 0-1.43-.029-19.678-.029-26.241 0-6.978 8.574-9.245 10.66-9.774.267-.067.448-.215.416-.526-.022-.249-.19-.362-.362-.362h-37.764c0 13.77-.005 40.415-.005 40.449-.085 14.308 11.716 30.323 28.907 30.323h32.37l-.004 29.21c-.079 2.423-.488 4.542-1.125 6.416-2.499 6.6-8.629 9.836-11.4 10.437-.707.153-.711.963-.133 1.081l.059.03h90.575l.793-.005c38.459 0 59.953-18.708 59.953-56.609v-100.111c0-38.256-21.581-56.407-59.637-56.407 0 0-90.813.025-91.609.025-.721 0-.774 1.136 0 1.242.716.099 12.504 1.068 12.504 11.881l.004 29.893c-8.478 0-27.012.032-27.837 0-4.568-.055-6.125-3.33-6.366-5.886.007-7.026.008-42.696.015-43.164.27-13.553 7.6-20.475 20.347-20.475l61.608-.029c3.563 0 6.648 1.741 6.648 6.097 0 4.382-4.637 5.645-5.449 6.034-.352.203-.427.748-.034.748h34.43l-.015-11.355c-.275-8.336-5.8-28.594-31.666-28.594l-69.42-.01h-.001zm44.825 78.789h54.42c18.31 0 30.145 13.156 30.145 30.17v105.526c0 17.593-13.834 27.004-31.304 27.004-16.021 0-43.848.021-53.26.03v-21.966h14.327c25.46 0 42.129-18.426 42.129-42.615 0 0-.005-46.985-.005-49.833 0-10.407-8.511-30.473-33.252-30.473h-23.2v-17.844z"
        fill="#002d62"
      />
    </svg>
  );
};

SD.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};



export default SD;
