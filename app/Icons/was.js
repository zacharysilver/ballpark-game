import React from 'react';
import PropTypes from 'prop-types';

const WAS = ({ size=100 }) => {
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
        d="m280 50c-82.84 0-150 67.154-150 150 0 82.84 67.157 149.994 150 149.994 82.84 0 150-67.154 150-150 0-82.84-67.16-149.994-150-149.994"
        fill="#ab0003"
      />
      <path
        d="m280.002 58.334c-78.251 0-141.678 63.43-141.678 141.675 0 78.248 63.43 141.675 141.678 141.675 78.243 0 141.675-63.428 141.675-141.678 0-78.24-63.433-141.67-141.675-141.67"
        fill="#14264b"
      />
      <path
        d="m280 98.082c-56.293 0-101.922 45.632-101.922 101.925s45.629 101.925 101.922 101.925 101.925-45.632 101.925-101.928c0-56.29-45.632-101.922-101.925-101.922"
        fill="#ab0003"
      />
      <path
        d="m280 104.017c-53.017 0-96.001 42.976-96.001 95.991 0 53.022 42.984 96.004 96.001 96.004s95.999-42.981 95.999-96.004c0-53.015-42.981-95.991-95.999-95.991"
        fill="#14264b"
      />
      <path
        d="m280.395 64.955-1.968 25.32 4.74.359 1.132-14.662 13.164 16.121 1.168.09 1.96-25.32-4.737-.364-1.134 14.659-13.161-16.113-1.163-.09zm-17.321 1.751-4.937.715 3.582 24.79 4.948-.715-3.592-24.79zm-21.936 4.283-4.671 1.801 4.745 12.307-9.49 3.65-4.724-12.315-4.671 1.796 8.999 23.377 4.663-1.788-2.614-6.794 9.482-3.65 2.614 6.794 4.658-1.794zm83.365 2.769c-5.312 0-9.833 3.176-11.808 8.277-2.624 6.834.752 14.048 7.86 16.785 2.026.775 3.917 1.161 5.781 1.161 1.469 0 2.904-.245 4.394-.736l.277-.09 3.471-9.007-10.339-3.985-1.646 4.275 5.945 2.287-.955 2.466c-1.598.282-3.292.053-5.251-.699-4.592-1.77-6.502-6.032-4.745-10.608 1.3-3.363 4.08-5.454 7.256-5.454.928 0 1.873.177 2.793.53 3.176 1.224 4.078 2.97 4.729 4.647l.232.596 4.439-1.833-.208-.564c-1.277-3.41-3.64-5.679-7.435-7.137-1.559-.601-3.162-.91-4.79-.91zm26.795 11.988-2.69 3.703 5.716 4.154-12.054 16.545 4.03 2.943 12.059-16.545 5.708 4.165 2.696-3.695-15.464-11.27zm-146.821 3.94c-1.387.174-2.746.739-4.059 1.699-1.664 1.205-2.759 2.843-3.094 4.603-.327 1.77.113 3.603 1.253 5.172 1.469 2.015 3.358 2.957 5.937 2.957 1.034 0 2.184-.148 3.613-.462l1.757-.375c.915-.19 1.783-.372 2.527-.372.997 0 1.67.327 2.226 1.095.364.496.498 1.039.404 1.609-.135.865-.781 1.754-1.825 2.511-1.778 1.298-3.706 1.477-5.602.522l-.551-.274-2.205 4.239.572.282c1.427.696 2.909 1.05 4.41 1.05 2.136 0 4.204-.707 6.124-2.107 4.233-3.089 5.241-7.237 2.622-10.832-1.54-2.107-3.434-3.091-5.966-3.091-1.031 0-2.2.145-3.793.485l-1.765.38c-1.073.229-1.931.38-2.622.38-.921 0-1.466-.264-1.989-.984-.791-1.087-.533-2.271.691-3.16 1.232-.899 2.379-.997 3.882-.348l.604.253 1.646-4.336-.551-.24c-1.443-.612-2.859-.828-4.246-.654zm170.651 21.306c-2.899 0-5.668.989-8.039 2.883-2.764 2.21-4.481 5.304-4.819 8.693-.338 3.347.683 6.689 2.867 9.416 2.508 3.141 6.177 4.937 10.044 4.937 2.899 0 5.676-.997 8.037-2.891 2.769-2.216 4.476-5.296 4.819-8.685.34-3.342-.675-6.689-2.859-9.416-2.508-3.141-6.177-4.937-10.049-4.937zm-199.1 3.083-.625.775 12.789 24.701 3.234-3.94-2.094-3.948 5.826-7.098 4.275 1.295 3.344-4.075-26.753-7.71h.003zm199.614 1.817c2.292 0 4.386 1.044 5.908 2.943 2.817 3.518 2.168 8.224-1.535 11.188-1.63 1.3-3.482 1.997-5.349 1.997-2.295 0-4.386-1.044-5.908-2.943-2.809-3.518-2.171-8.224 1.535-11.188 1.625-1.3 3.474-1.997 5.349-1.997zm-191.913 5.199 5.945 1.804.812.245-3.45 4.186-3.307-6.233v-.003zm-20.889 11.086-1.981 4.642 11.13 9.767-15.838.066-.401.952 10.943 11.436-14.797-1.155-2.063 4.864 26.848 1.706.388-.944-11.719-12.375 16.978.024.425-.984-19.913-17.996zm238.74 8.918-23.638 9.342 1.751 4.418 13.676-5.41-8.609 18.661-.113.24.417 1.095 23.646-9.342-1.759-4.418-13.668 5.402 8.714-18.893zm-218.626 109.439-21.335 13.797 2.577 3.993 12.36-7.986-4.864 20.248.662.968 21.319-13.773-2.577-3.993-12.357 7.979 4.848-20.233zm196.768 2.846c-3.06 0-5.46 1.382-7.142 4.112-1.079 1.746-1.474 3.674-1.11 5.423.356 1.77 1.459 3.302 3.112 4.323 1.216.746 2.421 1.108 3.682 1.108 1.82 0 3.648-.723 6.109-2.419l1.474-1.021c1.229-.831 2.303-1.551 3.321-1.551.454 0 .899.14 1.358.425.528.319.849.765.981 1.319.2.855-.058 1.931-.728 3.033-1.166 1.883-2.851 2.751-4.993 2.598l-.617-.045-.433 4.761.641.037c.243.018.483.032.723.032 3.574 0 6.633-1.778 8.612-4.993 1.477-2.398 1.994-4.763 1.503-6.839-.404-1.701-1.495-3.144-3.173-4.178-1.316-.81-2.585-1.208-3.867-1.208-2.068 0-3.956 1-6.145 2.498l-1.498 1.013c-1.501 1.023-2.469 1.58-3.3 1.58-.385 0-.773-.121-1.205-.388-1.139-.702-1.348-1.888-.551-3.181.775-1.261 1.786-1.804 3.344-1.804l.775.016-.121-4.639-.752-.008v-.003zm-24.099 25.523-3.545 3.524 17.669 17.759 10.988-10.935-3.234-3.242-7.441 7.406-14.438-14.512zm-147.721 2.577-25.096 12.001 3.835 3.36 4.017-1.968 6.913 6.043-1.432 4.231 3.972 3.479 8.543-26.497zm-6.504 8.126-1.989 5.884-.274.799-4.067-3.577.752-.364 5.578-2.743zm19.08 2.548-2.147 4.038 6.235 3.315-9.58 18.086 4.41 2.347 9.587-18.094 6.243 3.307 2.144-4.038-16.893-8.962zm114.817 1.482-.849.522 3.569 27.586 4.381-2.601-.612-4.426 7.897-4.671 3.577 2.674 4.544-2.68-22.506-16.405zm4.85 9.231 4.961 3.732.678.506-4.671 2.756-.119-.836-.849-6.159zm-23.042.462-4.605 1.176 3.65 14.251-17.424-10.869-.224-.148-1.139.29 6.312 24.606 4.603-1.176-3.658-14.251 17.432 10.867.224.15 1.139-.29-6.309-24.606zm-69.974.952-6.971 24.054 4.795 1.393 6.974-24.068zm27.847 4.56c-7.295-.33-13.151 5.048-13.483 12.246-.324 7.195 5.088 13.085 12.323 13.409.214.013.422.024.633.024 7.008 0 12.523-5.272 12.842-12.262.324-7.195-5.088-13.087-12.315-13.417zm-.578 4.668.404.008c2.197.1 4.149 1.018 5.489 2.577 1.335 1.554 2.012 3.679 1.907 5.966-.208 4.763-3.579 8.034-8.142 7.839-4.494-.206-7.607-3.798-7.396-8.546.214-4.618 3.4-7.844 7.739-7.844zm5.639-203.542c-49.741 0-90.067 40.325-90.067 90.064 0 49.747 40.325 90.072 90.067 90.072 49.744 0 90.075-40.325 90.075-90.072 0-49.739-40.331-90.064-90.075-90.064"
        fill="#fff"
      />
      <path
        d="m282.798 183.8c4.945-11.732 14.746-14.601 14.746-.013 0 15.896-7.928 34.747-14.836 46.384-6.623-13.095-5.684-32.653.09-46.371m48.278-47.816c-12.879-10.318-24.587 2.582-24.587 9.973 12.9 2.756 24.41 15.638 19.251 49.151-4.21 27.396-20.359 44.453-30.537 44.799 6.38-9.202 12.061-19.402 15.767-30.833 3.466-10.632 5.101-19.552 5.101-27.043.011-10.294-2.809-17.859-6.678-22.886-1.936-2.506-4.125-4.381-6.351-5.644-2.208-1.242-4.777-1.92-6.929-1.939-5.291-.005-10.487 2.158-14.623 5.61-6.217 5.193-11.051 13.251-14.448 22.543-3.381 9.295-5.294 19.855-5.301 30.134 0 8.005 1.163 15.838 3.785 22.775 1.593 4.215 3.751 8.105 6.525 11.439-1.759 1.725-3.561 3.231-5.367 4.463-3.867 2.632-7.728 4.022-11.547 4.022-1.794-.005-3.606-.303-5.468-.971-2.598-.96-4.333-2.661-5.66-5.476-1.306-2.801-1.997-6.72-1.997-11.418-.021-11.647 4.204-27.839 10.698-43.92 6.151-15.263 14.311-30.511 22.598-42.063-1.801-.058-4.133-.111-5.568-.111-22.018.005-37.988 5.093-48.597 12.534-10.595 7.438-15.799 17.308-15.799 26.505-.011 5.985 2.216 11.61 6.465 15.778 2.35 2.469 5.491 3.851 8.709 3.851 2.622 0 5.072-.957 6.889-2.693 2.102-1.989 3.176-4.753 3.041-7.791-.124-2.888-1.34-5.687-3.431-7.886-1.298-1.366-2.862-2.411-4.544-3.073 1.168-2.099 2.962-4.212 5.531-6.151 3.748-2.851 9.173-5.294 16.471-6.604-4.558 8.01-8.401 16.002-11.465 23.772-5.483 13.945-8.477 27.185-8.485 38.656 0 7.81 1.39 14.831 4.486 20.652 3.078 5.818 7.965 10.347 14.441 12.858 2.951 1.155 6.006 1.704 9.068 1.704h.008c5.942 0 11.84-2.018 17.479-5.388 4.61-2.759 9.086-6.422 13.335-10.769 8.944 4.853 29.728 6.831 45.492-21.269 18.916-33.697 19.6-83.352 2.239-97.288"
        fill="#14264b"
      />
      <path
        d="m321.383 135.219c-1.543-.026-3.07.314-4.552 1.026-3.323 1.583-5.821 4.766-6.794 7.488 7.963 2.664 20.04 10.906 20.04 36.279 0 4.595-.388 9.764-1.274 15.561-3.98 25.851-18.378 43.401-29.889 46.79-3.194.947-6.114.757-8.538-.425 7.282-9.851 13.52-21.665 17.806-33.866 13.235-38.732-3.439-53.563-11.816-53.563-27.333-.944-44.057 65.662-20.262 89.61-8.153 8.867-17.664 13.739-27.436 10.234-22.137-7.947-2.234-67.611 21.074-102.801-57.214.005-70.734 35.111-55.824 49.762 3.302 3.474 8.435 3.962 11.45 1.087 3.025-2.87 2.806-8.015-.493-11.486-1.83-1.928-4.204-2.93-6.488-2.959 2.384-8.343 12.28-16.999 31.714-18.629-26.193 43.079-31.672 86.699-5.565 96.901 12.344 4.821 26.391-2.369 38.64-15.561 3.442 1.888 8.25 3.64 12.373 3.584 8.205-.124 20.153-3.885 30.617-22.514 8.707-15.546 13.931-35.433 14.303-54.594.382-18.294-3.872-32.782-11.323-38.759-2.572-2.063-5.191-3.125-7.762-3.168v.003zm-28.607 35.762c14.723 0 6.802 39.777-10.094 64.76-14.688-19.676-5.982-64.76 10.094-64.76zm-133.911 30.53-2.711 8.329h-8.754l7.084 5.148-2.703 8.319 7.084-5.138 7.077 5.138-2.703-8.319 7.084-5.148h-8.754l-2.703-8.329zm242.284.008-2.711 8.321h-8.759l7.084 5.148-2.698 8.327 7.084-5.146 7.079 5.146-2.706-8.327 7.084-5.148h-8.759z"
        fill="#ab0003"
      />
    </svg>
  );
};

// WAS.propTypes = {
//   size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
// };



export default WAS;
