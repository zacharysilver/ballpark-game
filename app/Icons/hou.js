import React from 'react';
import PropTypes from 'prop-types';

const HOU = ({ size=100 }) => {
  return (
    <svg
      width={size}
      height={size}
      preserveAspectRatio="xMidYMid slice"
      clipRule="evenodd"
      fillRule="evenodd"
      viewBox="0 0 560 400"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m279.994 50c-82.671 0-149.693 67.16-149.693 150.013 0 82.809 67.022 149.987 149.693 149.987 82.681 0 149.705-67.172 149.705-149.987 0-82.854-67.017-150.013-149.705-150.013"
        fill="#002d62"
      />
      <path
        d="m279.994 56.918c-79.02 0-143.078 64.058-143.078 143.078 0 79.023 64.058 143.064 143.078 143.064 79.017 0 143.078-64.041 143.078-143.064 0-79.026-64.064-143.078-143.078-143.078"
        fill="#eb6e1f"
      />
      <path
        d="m417.407 200v.013c0 75.879-61.53 137.414-137.414 137.414-75.888 0-137.414-61.535-137.414-137.427 0-75.895 61.521-137.414 137.402-137.414 67.587 0 123.77 48.806 135.242 113.084 1.426 7.894 2.161 16.026 2.161 24.334"
        fill="#002d62"
      />
      <path
        d="m279.994 108.202c-50.7 0-91.795 41.102-91.795 91.81 0 50.69 41.095 91.767 91.795 91.767 50.712 0 91.794-41.077 91.794-91.767 0-50.706-41.081-91.812-91.794-91.812"
        fill="#eb6e1f"
      />
      <path
        d="m331.471 268.342-6.187-19.029h-23.719l28.052 20.367c-13.999 10.002-31.12 15.888-49.631 15.888-18.492 0-35.626-5.886-49.604-15.888l28.054-20.367h-14.751l-16.308 22.57 1.15-3.541c-20.709-15.627-34.1-40.399-34.1-68.328 0-8.973 1.375-17.596 3.94-25.714l44.849 32.614v-5.676l-34.247-24.912-14.11-4.546h4.348c11.52-32.948 42.596-56.688 79.311-57.309l1.468-4.558v83.856h17.946v-17.842l-11.608-4.147v-14.713h8.998l-13.848-42.59c36.721.631 67.793 24.36 79.291 57.305h4.374l-14.095 4.558h-34.241v30.55l44.825-32.561c2.556 8.104 3.939 16.717 3.939 25.688 0 27.913-13.396 52.701-34.097 68.327"
        fill="#002d62"
      />
      <path
        d="m297.936 230.452v-17.844h-27.739l-8.136 11.272v6.571l11.587 4.161v3.622l6.345-4.614 6.331 4.615v-3.622"
        fill="#eb6e1f"
      />
      <path
        d="m280.065 109.918-1.473 4.562-13.85 42.593 8.983.004v14.717l-11.596 4.147v17.835h17.937v-83.858zm-85.151 61.877 14.102 4.546 34.266 24.917v-25.318l-11.605-4.147h-36.762v.002zm133.553 0-11.589 4.145v.413h34.248l14.097-4.559h-36.755zm-66.341 40.844v11.26l8.131-11.26zm-18.843 17.835-2.696.937v.012l2.696-.95zm-8.502 18.864-6.179 19.034-1.167 3.539 16.327-22.573z"
        fill="#f4871e"
      />
      <path
        d="m275.273 71.18-3.451 3.432v9.936l3.451 3.416h7.665l.72.732v6.092l-.72.715h-6.57l-1.02-2.688h-3.527v7.32h13.044l3.43-3.446v-9.909l-3.434-3.457h-7.67l-.71-.706v-6.078l.71-.715h6.568l1.032 2.675h3.508v-7.32h-13.026zm-23.92 2.826-8.152 2.549 1.097 3.483 2.123.265 5.701 18.189-.482.911-5.629 1.747-.923-.44-5.692-18.189 1.6-1.419-1.111-3.5-8.143 2.56 1.088 3.46 2.153.294 6.265 20.024 4.303 2.232 9.333-2.898 2.246-4.324-6.267-20.027 1.586-1.43-1.095-3.486zm57.77.14-2.376 7.647 3.303 1.02 2.029-2.893 2.717.857-5.883 18.892-2.148.284-1.072 3.462 8.15 2.537 1.084-3.486-1.587-1.437 5.892-18.862 2.71.851.032 3.529 3.306 1.034 2.393-7.661-18.55-5.773zm40.268 17.138-4.792.885-12.572 18.137.883 4.807 8.019 5.556v-.004l4.802-.881 12.56-18.133-.86-4.785zm-138.795.1-8.017 5.552-.885 4.797 12.602 18.149 4.797.885 8.033-5.598.848-4.751-12.581-18.163zm137.73 4.837 4.886 3.36.168 1.009-10.382 14.992-.995.179-4.872-3.378-.173-.99 10.384-14.994.985-.179zm-136.661.082 1.018.179 10.379 14.966-.173 1.02-4.864 3.367-.999-.156-10.405-14.962.186-1.035v-.004l4.858-3.374zm163.577 16.246-2.872 2.234.494 2.08-15.684 12.224-1.901-.979-2.886 2.248 5.27 6.75 2.88-2.246-.513-2.108 10.696-8.324-9.962 16.637 3.339 4.284 19.253-15.023 1.903 1.006 2.886-2.262-5.272-6.733-2.851 2.258.48 2.083-10.694 8.322 9.986-16.633-4.553-5.817zm-190.64.345-5.242 6.74 2.865 2.232 1.911-.976 6.022 4.653-4.41 5.694-6.022-4.688.494-2.078-2.865-2.248-5.272 6.754 2.886 2.234 1.908-.967 15.7 12.182-.491 2.085 2.872 2.229 5.251-6.75-2.872-2.218-1.911.976-6.015-4.673 4.41-5.676 6.009 4.687-.496 2.094 2.887 2.234 5.251-6.754-2.863-2.234-1.931.997-15.691-12.197.489-2.095-2.873-2.232-.002-.002zm47.076 44.178v14.719l3.723-2.658 11.618 4.157-3.732 2.646v54.531l-11.609 4.166v14.703l3.723-3.762h34.581v-8.34l3.748-2.602-11.596-4.163-3.748 2.619v-24.214h43.374l-3.749 3.751v17.844l-11.6 4.163v14.703l3.744-3.762h34.572v-8.34l3.737-2.602-11.588-4.163-3.753 2.619v-59.796l11.603-4.159v-8.313l3.737-3.744h-42.057v14.717l3.746-2.66 11.605 4.159-3.751 2.647v17.832h-35.877l-3.748 3.748v-24.225l11.596-4.161v-8.311l3.748-3.748h-42.048v-.004zm183.65 18.606c1.069 5.917 1.75 11.977 2.024 18.14-.273-6.164-.953-12.22-2.024-18.14zm-59.288 89.671-9.273 9.124-.033 4.89 6.959 7.059 4.879.04 5.456-5.361h1.007l4.275 4.301v1.02l-4.68 4.615-2.624-1.169-2.504 2.437 5.14 5.237 9.287-9.147.035-4.893-6.968-7.027-4.86-.072-5.464 5.4h-1.028l-4.266-4.343.014-1.03 4.695-4.588 2.61 1.183 2.493-2.467-5.151-5.207zm-149.372 2.491v.004l-19.994 14.591-2.004-.715-2.553 2.589 6.118 6.011 2.539-2.605-.75-1.999 2.546-1.845 5.3 5.205-1.805 2.575-1.999-.699-2.533 2.589 6.102 5.98 2.549-2.589-.75-1.987 14.219-20.271-6.985-6.835zm-.449 6.053 1.363 1.347-7.012 10.007-4.196-4.15 9.844-7.204zm123.208 13.063-8.732 4.394-1.507 4.645 9.934 19.705 4.629 1.503 8.732-4.396 1.514-4.615-9.941-19.708zm-98.464.166-4.594 1.529-4.454 8.872 1.529 4.632 6.859 3.404.314.99-2.714 5.419-.972.315-5.869-2.95.261-2.851-3.12-1.586-3.294 6.572 11.644 5.86 4.631-1.544 4.45-8.89-1.538-4.604-6.845-3.444-.322-.965 2.726-5.44.96-.305 5.878 2.936-.272 2.865 3.112 1.573 3.292-6.559-11.661-5.831zm98.843 4.85.964.315 8.22 16.288-.331.965-5.282 2.658-.958-.314-8.22-16.264.315-.976 5.293-2.675v.002zm-74.711 5.235-1.228 7.9 3.411.548 1.586-3.183 2.808.47-3.038 19.53-2.053.603-.571 3.585 8.462 1.321.55-3.595-1.784-1.17 3.031-19.572 2.814.427.541 3.486 3.443.554 1.216-7.926-19.188-2.977zm45.436.676-14.81 2.342.566 3.597 2.069.589 3.099 19.626-1.784 1.202.571 3.595 8.436-1.349-.561-3.583-2.06-.576-1.19-7.528 4.177-.646 3.278 6.835-1.489 1.035.578 3.579 8.441-1.335-.566-3.585-2.276-.662-3.425-7.136 2.405-3.336-1.535-9.811-3.926-2.852zm-1.188 4.893.818.606.951 5.995-.585.827-6.393.978-1.172-7.397z"
        fill="#fff"
      />
      <path
        d="m328.389 171.78v-14.715l-3.741 3.759v8.296l-11.601 4.159v59.786l3.76-2.617v-54.522m11.581 58.685-3.741 2.604v8.335h-34.564l-3.754 3.763h42.061m-66.326-36.694h35.872l3.75-3.763h-43.37v24.223l3.748-2.631v-6.571m11.595 14.356v-3.621l-3.739 2.602v8.335h-34.58l-3.732 3.763h42.052m-26.704-76.033-11.614-4.162-3.72 2.662 11.602 4.146m46.861-6.807-3.754 2.659 11.602 4.147 3.756-2.644m-28.028-1.501v-14.715l-3.739 3.759v8.296l-11.604 4.159v24.223l3.748-3.733v-17.845"
        fill="#e7e9ea"
      />
    </svg>
  );
};

HOU.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};



export default HOU;
