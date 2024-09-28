import React from 'react';
import PropTypes from 'prop-types';

const LAD = props => {
  const { size } = props;
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
        d="m392.076 179.515c-7.526 11.403-28.249 19.392-88.51 41.331.521-3.82 1.506-10.709 2.257-15.34 1.333-2.373 2.953-4.921 4.689-7.467l.464-.696c1.303-1.89 2.734-3.688 4.284-5.383 1.388 2.316 3.531 5.442 7.988 5.326 14.935-.405 21.476-28.365 23.792-39.306 1.196.272 2.419.408 3.645.407-1.042 3.531-9.377 22.459 1.679 25.644 10.998 3.24 17.772-27.207 19.74-33.807 6.716 7.756 5.037 15.919 1.622 17.598-1.738.867-3.706-1.795-5.674.057-2.894 2.778-.983 7.351 3.01 8.047 5.731.926 9.494-2.953 13.257-6.946 1.215-1.217 5.672-3.938 8.393-1.97 4.168 2.837 1.158 9.783-.637 12.504zm-98.756 22.982c-6.079 1.158-4.111-22.577 4.919-23.676 1.738-.175 3.531 1.909 3.185 5.383-.305 3.232-.905 6.428-1.795 9.551-1.158 3.588-3.067 8.161-6.309 8.741zm35.368-36.99c4.516 2.257-3.356 11.751-6.946 15.63.58-8.741 4.921-16.672 6.946-15.63zm-32.417 57.772s-2.084.926-3.067 1.274c1.388-2.027 3.879-6.716 4.398-7.583-.23 1.561-1.331 6.309-1.331 6.309zm-10.13 28.249c-3.995.694-1.968-9.435 1.158-14.299 4.052-1.563 7.467-3.183 7.467-3.183-2.084 10.015-3.879 16.614-8.625 17.482zm-15.63-54.705c-.057 1.042-1.215 10.072-1.504 11.057-1.101 4.573-3.415 7.872-6.657 7.699-5.558-.173-3.069-23.619 4.862-22.809 1.855.048 3.355 1.587 3.355 3.442 0 .205-.019.41-.056.61zm-36.294 32.301c-4.516-.926-4.341-13.024-1.217-18.35 2.027 3.704 7.41 4.111 10.652 3.647.232 5.267-3.82 15.803-9.435 14.703zm9.262-20.375c-.945.243-1.924.321-2.896.23-2.257-.23-3.936-1.331-4.109-2.257-1.099-5.151 6.773-4.398 7.005 2.027zm156.064-41.968c-2.662-7.583-12.793-6.079-15.34-3.706 0-9.956-5.037-12.677-10.304-18.814-1.158-4.282 2.257-5.73 2.721-9.377.926-7.467-10.768-5.326-7.467 9.956-1.39 7.119-8.916 28.943-12.852 29.523-2.257.289-2.43-3.358-1.215-7.699 1.158-4.341 7.41-12.215 3.531-16.209-2.257-2.316-6.425 1.158-10.188-.926 0 0 .116-3.126-.867-4.284-1.034-.978-2.673-.978-3.706 0-2.835 2.2-2.951 8.22-1.447 11.23-1.158 7.467-2.084 10.477-5.731 20.493-3.704 10.361-12.561 15.281-14.587 8.972 17.713-17.019 13.777-23.56 10.998-25.876-4.573-3.763-18.698 3.01-19.392 24.486.017 1.029.114 2.055.289 3.069-1.39 1.679-3.82 4.689-6.946 8.973 1.447-9.494 3.472-23.33 4.168-28.424-2.276 1.423-4.816 2.368-7.469 2.778l-.521 3.531c-3.761-5.672-21.36-.346-20.723 27.439-.869 8.568-5.442 9.494-5.615 7.467-.578-10.13 5.731-40.058 7.872-50.883-2.271 1.264-4.769 2.071-7.351 2.375-2.583.302-5.442 27.553-5.556 27.553-1.895-1.676-4.541-2.227-6.948-1.447-6.598 1.563-11.75 10.882-12.098 16.788-1.133 1.163-2.441 2.14-3.879 2.894-.81-3.531-2.43-6.773-6.077-7.872-11.983-3.647-21.824 14.124-18.64 30.854.947 3.126 2.953 5.83 5.674 7.64 8.451 4.168 19.449-7.235 19.565-25.007 1.253-.856 2.318-1.959 3.126-3.242-.753 5.383.926 15.456 7.005 16.325 6.541.983 10.188-6.83 11.172-10.131.791 2.189 2.883 3.653 5.21 3.647 5.615-.232 7.351-7.351 8.393-10.42 4.921 7.874 12.909.637 14.704-3.993l-.637 3.82c-4.516 5.442-12.909 18.93-12.909 18.93-15.63 5.672-46.021 16.903-58.525 35.659 6.276-1.199 12.739-1.001 18.93.578 2.027-5.499 14.414-16.556 32.649-22.634-4.457 9.03-3.59 22.345 4.052 22.229 13.198-.289 17.54-22.982 19.392-31.607 11.751-5.035 32.706-13.14 54.646-22.518 20.318-8.741 49.495-23.387 42.895-42.142zm-238.553 96.614c-.869-2.143 4.978-7.237 10.188-7.469-2.027 3.474-9.378 9.61-10.188 7.469zm-10.998-49.726c-.926 8.509.637 14.24 7.235 16.961 4.862 2.025 10.477-2.257 12.04-4.689 1.622-2.451 2.653-5.245 3.01-8.161.357-2.918-9.203 8.856-14.53.751-3.067-4.688-1.447-18.582 16.614-28.422 18.061-9.783 27.034-1.795 27.034-1.795 10.882 6.136 11.346 24.372 8.161 38.496-2.43 10.535-7.41 21.592-18.755 23.676-4.227.753-5.847.289-9.726.173 2.794-6.46 4.459-13.353 4.921-20.377 2.721-33.227 6.309-36.41 9.609-41.389-24.543 12.503-17.481 54.935-22.286 61.938-18.003 2.664-22.113 17.367-18.525 19.682 2.721 1.736 14.936-1.563 23.271-15.051 6.02-.116 25.298 5.21 37.049-16.209 7.93-14.472 10.477-39.768-2.316-52.273-18.35-18.061-59.913.405-62.807 26.686z"
        fill="#005a9c"
      />
      <path
        d="m329.037 108.603c4.448-2.7 7.779-6.915 9.378-11.867 1.615-4.975 1.349-10.376-.753-15.167-9.165 5.58-12.865 17.176-8.625 27.034zm-17.888 2.084c2.141.739 4.392 1.11 6.657 1.099 2.8-.006 5.572-.556 8.161-1.62-5.077-11.526-.701-25.18 10.131-31.607-3.95-6.287-10.868-10.118-18.293-10.13-2.875 0-5.725.55-8.393 1.62 2.448 5.556 2.758 11.828.867 17.598-1.828 5.793-5.723 10.719-10.94 13.834 2.707 4.383 6.899 7.65 11.809 9.205zm-4.109-24.081c1.588-4.911 1.363-10.234-.637-14.993-9.043 5.568-12.723 17.006-8.625 26.802 4.411-2.688 7.702-6.884 9.262-11.809z"
        fill="#fff"
      />
      <path
        d="m335.057 112.481-.315-.029c-.823 0-1.53.605-1.654 1.418l-6.541 35.6c-.187.921.411 1.833 1.331 2.027h.348c.815-.008 1.519-.591 1.679-1.39l6.541-35.6c.162-.934-.461-1.841-1.39-2.027zm-14.24 8.104c-.92-.186-1.833.413-2.025 1.333l-7.99 35.6c-.17.918.423 1.819 1.333 2.025l.346.059c.815-.008 1.519-.591 1.679-1.39l7.931-35.543c.032-.132.048-.268.048-.405 0-.796-.548-1.493-1.322-1.679zm-8.047 115.428c-.931-.145-1.825.469-2.025 1.39l-6.368 33.054-.024.291c0 .824.6 1.538 1.414 1.677.11.046.229.067.348.057.81-.04 1.488-.646 1.62-1.447l6.425-32.995c.162-.936-.459-1.841-1.39-2.027zm-25.007 32.649c-.931-.173-1.849.413-2.084 1.331l-5.035 22.634c-.032.133-.049.27-.049.407 0 .794.55 1.492 1.323 1.677h.405c.785-.003 1.465-.562 1.62-1.331l5.094-22.693c.032-.129.048-.262.048-.394 0-.785-.554-1.469-1.322-1.631zm21.13-149.119c-.904-.245-1.854.268-2.143 1.158l-13.488 43.647c-.065.179-.098.369-.098.561 0 .734.492 1.382 1.199 1.581.157.094.338.133.521.116.745-.01 1.403-.502 1.62-1.215l13.488-43.647c.283-.904-.206-1.882-1.099-2.2zm-40.985 132.678c-.888-.281-1.852.214-2.141 1.101l-3.242 10.477c-.281.904.208 1.882 1.101 2.198l.521.059c.75.006 1.417-.494 1.62-1.215l3.242-10.479c.281-.888-.214-1.852-1.101-2.141zm-6.309 20.434c-.164-.051-.335-.078-.508-.078-.758 0-1.428.507-1.633 1.236l-18.235 58.93c-.281.89.214 1.852 1.101 2.141.167.067.342.105.521.116.751-.03 1.415-.51 1.679-1.215l18.177-58.987c.281-.89-.214-1.852-1.101-2.143zm23.271-125.847c.214.111.453.172.694.173.683-.002 1.299-.413 1.563-1.042l12.736-29.059c.095-.218.146-.453.146-.691 0-.939-.772-1.711-1.711-1.711-.674 0-1.287.397-1.561 1.012l-12.736 29.061c-.345.859.037 1.851.869 2.257zm-53.199 121.678c-.221-.1-.461-.152-.702-.152-.675 0-1.288.403-1.555 1.021l-9.203 21.014c-.105.222-.16.465-.16.712 0 .674.407 1.285 1.028 1.546.214.111.453.172.696.173.677-.017 1.285-.423 1.563-1.042l9.203-21.012c.105-.224.159-.467.159-.713 0-.674-.407-1.283-1.028-1.544zm59.392-168.277c-.81-.457-1.852-.172-2.314.635l-17.772 31.955c-.465.828-.179 1.89.637 2.373.275.113.57.172.867.173.608.011 1.172-.326 1.447-.867l17.772-31.955c.457-.81.172-1.852-.637-2.314zm-48.508 90.535 26.222-46.889c.437-.826.125-1.865-.694-2.314-.81-.457-1.854-.172-2.316.637l-26.224 46.947c-.141.251-.216.535-.216.824 0 .627.353 1.204.912 1.49.237.164.523.245.81.232.632-.011 1.21-.367 1.506-.926zm-40.348 69.349c-.845-.435-1.897-.127-2.373.696l-13.603 24.486c-.437.826-.125 1.865.694 2.316.256.113.532.172.81.173.627.027 1.215-.313 1.506-.869l13.603-24.486c.457-.81.17-1.852-.637-2.316zm108.075-172.445c1.89-5.771 1.581-12.042-.867-17.598 2.669-1.071 5.518-1.62 8.393-1.62 7.424.011 14.342 3.842 18.293 10.13-10.832 6.427-15.208 20.081-10.131 31.607-2.589 1.064-5.361 1.614-8.161 1.62-2.265.011-4.516-.361-6.657-1.099-4.91-1.555-9.102-4.823-11.809-9.205 5.216-3.115 9.111-8.041 10.94-13.834zm-13.14-4.227c1.588-4.908 4.873-9.095 9.262-11.809 2.001 4.759 2.227 10.082.637 14.993-1.56 4.924-4.851 9.121-9.262 11.809-1.978-4.764-2.203-10.079-.637-14.993zm41.274 13.314c-1.6 4.953-4.931 9.167-9.378 11.867-4.24-9.858-.54-21.454 8.625-27.034 2.102 4.791 2.368 10.191.753 15.167zm1.677-18.119c-4.294-8.347-12.927-13.616-22.315-13.616-13.766 0-25.094 11.327-25.094 25.093 0 10.876 7.07 20.569 17.424 23.893 2.489.805 5.089 1.215 7.706 1.215 10.863 0 20.543-7.073 23.843-17.424 2.076-6.335 1.512-13.246-1.563-19.161z"
        fill="#ef3e42"
      />
      <path
        d="m406.664 183.105h-1.101v-.985h.926c.405 0 .926 0 .926.464 0 .405-.289.521-.751.521zm1.563-.464c0-1.099-.637-1.274-1.563-1.274h-1.97v4.111h.869v-1.622h.694l.928 1.622h.926l-.985-1.622.044.002c.585 0 1.066-.481 1.066-1.067l-.011-.149h.002zm-1.91 3.879c-1.662-.032-3.01-1.407-3.01-3.069s1.349-3.036 3.01-3.067c1.682 0 3.067 1.385 3.067 3.067 0 1.684-1.385 3.069-3.067 3.069zm0-7.005c-2.133.016-3.879 1.774-3.879 3.908 0 2.144 1.763 3.908 3.908 3.908 2.133 0 3.892-1.746 3.908-3.879v-.032c0-2.143-1.762-3.904-3.904-3.904h-.032z"
        fill="#005a9c"
      />
    </svg>
  );
};

LAD.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

LAD.defaultProps = {
  size: '100'
};

export default LAD;
