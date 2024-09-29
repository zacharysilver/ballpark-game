import React from 'react';
import PropTypes from 'prop-types';

const MIL = ({ size=100 }) => {
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
        d="m289.743 255.863 15.3-26.869c1.126 9.669 4.807 18.485 10.581 25.154-8.864.075-17.542.648-25.88 1.715m-53.125 11.719 9.226-33.814 2.181 23.233 5.709 5.605c-5.799 1.481-11.838 3.241-17.115 4.976m-25.074-103.454c-5.357-5.202-11.2-7.861-17.391-7.861l-.123.008c.848-9.624 7.655-18.04 16.923-21.19-1.085 5.699.611 10.615 4.76 13.882l-4.169 15.16zm156.945 91.534-.948-.951-8.111-8.123s-2.02-.213-4.175-.448c-2.179-6.087-1.976-14.133-.565-18.964l8.594-30.92 1.748-6.279 2.087-7.482 1.736-6.264 2.388-8.579 1.056-3.789 16.938-60.892c.128-.43.25-.901.337-1.347l.035-.031h.023v-.018c.273-.244 1-.764 1.365-1.026 3.113-2.214 8.276-5.894 10.81-15.069l2.653-9.612-10.869-10.866-49.367 12.079-20.576 36.11-1.859 3.26-31.699 55.621-1.286-13.45c-1.467-15.64-7.491-29.234-17.455-39.321-.008-.014-5.449-5.451-6.416-6.437h-.02l-.162-.177c-1.504-1.473-3.103-2.88-4.766-4.183-12.453-9.825-28.737-14.352-45.878-12.737-15.695 1.475-30.267 8.864-41.081 20.81-10.723 11.861-16.638 26.971-16.638 42.544 0 15.538 5.069 29.159 14.275 38.367l5.907 5.9c6.15 6.144 13.795 9.9 21.304 10.514l-4.306 15.632-1.036 3.774-4.393 15.951-.774 2.944c-.704 2.915-1.129 3.951-1.314 4.321-4.274 2.81-9.671 7.851-11.943 16.134l-4.015 14.429 11.8 11.802 4.079-2.427c2.45-1.445 5.964-3.468 10.165-5.739l-1.687 5.983-.658.379c-11.637 6.566-22.902 14.151-33.508 22.552l-4.753 3.779 9 11.584 4.853-3.849c10.046-7.954 20.704-15.134 31.702-21.339l.64-.362 13.37 3.753.802-.378c1.709-.808 3.748-1.766 5.938-2.779 1.524-.697 3.159-1.422 4.917-2.196 24.234-10.596 70.441-26.288 136.424-16.844 1.277.186 2.543.355 3.831.555 1.352.213 2.66.347 4.036.583l2.152.36 1.958-7.535 13.275 1.146 1.806-11.643-12.221-4.999 2.072-7.744-6.293-1.355c-1.344-.295-2.615-.547-3.869-.792-.386-.085-.826-.177-1.205-.254l-.232-3.668.003-.003z"
        fill="#0a2351"
      />
      <path
        d="m391.748 71.785-1.704 6.181c-1.944 7.071-5.7 9.738-8.43 11.694-1.987 1.402-3.079 2.187-3.702 4.299l-34.966 125.678c-2.304 7.906-1.769 20.355 3.09 27.595 1.409 2.086 3.058 3.483 4.936 4.27-3.953-7.371-4.27-18.619-2.14-25.957l34.988-125.667c.612-2.126 1.714-2.899 3.691-4.305 2.741-1.961 6.497-4.631 8.441-11.705l1.693-6.17-5.897-5.91zm-131.269 45.283c9.356 9.161 14.969 21.579 16.356 36.248 0 0 2.806 29.594 4.434 46.695l4.597-8.059c-1.507-15.692-3.123-32.735-3.123-32.726-1.343-14.33-6.738-26.513-15.703-35.606-1.081-1.085-5.423-5.439-6.543-6.539l-.017-.013zm-47.124 4.627c-1.055-.008-2.115.039-3.18.141-15.841 1.489-28.26 14.912-28.26 30.552 0 4.321 1.507 8.474 4.202 11.748.826-.36 1.699-.583 2.563-.836l-.162-.04c-.451-1.598-.711-3.267-.711-4.968 0-15.634 12.422-29.061 28.277-30.554 5.045-.472 9.99.288 14.52 2.108l2.741-.675c-5.556-4.761-12.609-7.426-19.991-7.475zm111.177 44.589-47.709 83.665c-7.48.928-17.009 2.719-22.886 4.281l6.013 5.908c5.069-1.365 16.59-3.483 22.792-4.27l33.033-57.931c2.326-8.419 5.678-20.486 8.758-31.653zm-77.624 12.881-22.887 83.877c-16.972 5.777-36.257 15.823-47.058 22.288l5.919 5.908c12.485-7.393 29.992-16.544 47.005-22.179l18.939-69.364zm-71.894 14.021c.988.983 4.907 4.892 5.92 5.897 5.59 5.602 12.573 8.812 19.123 8.812 2.13 0 4.192-.339 6.113-.972l3.386-12.307c-3.628 4.499-9.176 7.382-15.387 7.382-6.571 0-13.542-3.221-19.155-8.812zm138.651 12.351c-.404 1.431-.677 2.435-.808 2.927.131-.502.415-1.507.808-2.927zm7.688 45.809c1.147 1.179 5.1 5.056 5.908 5.908 1.256 1.31 2.621 2.435 4.051 3.483-6.432-.36-12.897-.535-19.449-.306l-2.086 2.479c8.31-.371 16.555-.36 24.745-.109 7.131 3.909 15.823 4.903 25.28 2.654l1.933-.459c3.604.491 7.218.961 10.767 1.616l.055-.207c-3.167-.677-6.388-1.234-9.588-1.813l-.393-6.181-5.919-5.919.404 6.301-3.145.764c-13.006 3.069-24.548.153-32.563-8.212zm-12.656 9.216c-2.708.12-5.427.284-8.146.491-1.627.131-3.189.284-4.794.437l-7.928 10.592c4.04-.524 8.092-.961 12.187-1.299zm-16.085 1.256c-4.313.459-8.605 1.026-12.831 1.693l-7.295 11.095c3.986-.775 8.015-1.463 12.078-2.053l8.048-10.734zm16.129 2.195-6.618 7.797 8.07 6.792 12.613-7.546zm-32.105.022c-4.27.743-8.518 1.572-12.722 2.49l-6.571 11.488c3.963-1.026 7.936-1.955 11.943-2.796l7.349-11.182zm-15.793 3.189c-4.222.994-8.403 2.075-12.541 3.276l-5.863 11.892c3.872-1.267 7.786-2.435 11.741-3.516l6.662-11.652zm64.572 2.708 2.097 1.223-1.987 1.179c19.732.339 39.279 2.25 57.865 6.672l.055-.251c-18.684-5.089-37.98-8.507-58.029-8.823zm-80.16 1.474c-4.15 1.245-8.258 2.588-12.32 4.04l-5.116 12.198c3.806-1.496 7.63-2.916 11.509-4.237zm54.968 1.78c-4.029.339-8.026.753-11.99 1.289l11.291 8.452c.906-.076 1.802-.186 2.719-.251 2.85-.229 5.722-.382 8.594-.502l-10.614-8.987zm-15.255 1.747c-4.008.579-7.983 1.245-11.903 2.009l11.761 7.742c3.724-.568 7.458-1.048 11.248-1.441zm-54.992 1.572c-4.06 1.507-8.092 3.09-12.057 4.794l-4.367 12.536c3.702-1.736 7.437-3.385 11.219-4.947l5.204-12.383zm39.802 1.07c-3.964.83-7.877 1.747-11.752 2.752l12.254 7.011c3.68-.775 7.404-1.485 11.138-2.108l-11.641-7.655zm49.064 1.987c-2.446 0-4.892.055-7.36.153l2.774 2.326c18.542-.546 36.899.273 54.502 3.483l.066-.207c-16.227-3.516-32.869-5.777-49.981-5.755zm-64.009 1.627c-3.893 1.059-7.764 2.217-11.57 3.462l12.651 6.235c3.632-1.016 7.297-1.944 10.981-2.796zm-39.824 1.387c-3.965 1.747-7.885 3.593-11.74 5.526l-3.571 12.765c3.57-1.977 7.214-3.855 10.9-5.635zm25.111 3.112c-3.83 1.299-7.604 2.697-11.336 4.171l13.004 5.449c3.57-1.245 7.179-2.391 10.799-3.462l-12.466-6.159zm-14.388 5.416c-3.73 1.529-7.417 3.156-11.054 4.859l13.306 4.63c3.478-1.452 6.998-2.828 10.562-4.117l-12.814-5.373zm-14.055 6.268c-3.611 1.769-7.201 3.615-10.725 5.547l13.569 3.8c3.398-1.66 6.821-3.243 10.298-4.761zm-14.858 5.1c-11.516 6.497-22.436 13.879-32.693 22.026l1.463 1.911c10.198-8.103 21.064-15.441 32.494-21.895l-1.263-2.042z"
        fill="#b6922e"
      />
      <path
        d="m230.582 129.829-12.751 3.129-.591 2.13c-2.156 7.735 3.101 9.874 5.071 10.674l.561.227c-.044.227-9.149 33.352-9.149 33.352-.583-4.206-2.532-8.087-5.583-11.144-3.733-3.745-8.71-5.789-13.984-5.789-1.882 0-3.709.351-5.489.875-.865.25-1.737.471-2.563.832-2.694-3.273-4.202-7.424-4.202-11.742 0-15.64 12.416-29.059 28.254-30.55 8.516-.808 16.818 1.894 23.166 7.334l-2.74.673zm115.413 117.359c-4.864-7.233-5.406-19.681-3.101-27.585l34.963-125.652c.628-2.115 1.713-2.899 3.705-4.303 2.727-1.953 6.48-4.62 8.429-11.692l1.705-6.177-43.449 10.64-62.416 109.505-4.599 8.055c-1.62-17.097-4.431-46.684-4.431-46.684-1.381-14.665-6.996-27.082-16.347-36.239-1.344-1.312-2.764-2.558-4.262-3.735-11.211-8.846-25.951-12.915-41.506-11.457-14.151 1.347-27.318 8.022-37.098 18.82-9.716 10.735-15.067 24.38-15.067 38.437 0 13.889 4.439 25.985 12.485 34.035 5.608 5.595 12.579 8.812 19.151 8.812 6.211 0 11.759-2.88 15.386-7.374l-3.387 12.306-12.448 45.256c-.588 2.062-1.923 7.389-4.201 8.913-2.724 1.827-7.529 6.103-9.499 13.234l-3.056 10.985c10.799-6.466 30.082-16.509 47.051-22.285l22.881-83.855 1.917 20.522 5.108 54.521c5.877-1.565 15.401-3.35 22.884-4.276l47.702-83.654c-3.083 11.162-6.429 23.233-8.759 31.65-.868 3.132-1.583 5.707-2.107 7.602-.392 1.414-.677 2.422-.805 2.921l-.108.37c-4.437 15.725-1.074 32.408 8.594 42.509 8.018 8.36 19.565 11.273 32.56 8.209l3.148-.767-.4-6.296-3.232-.338c-.864-.093-1.679-.345-2.467-.663-1.867-.782-3.522-2.182-4.925-4.268"
        fill="#fff"
      />
      <path
        d="m220.879 260.08 27.827-101.804 8.562 91.3c3.057-.64 10.42-2.197 17.2-3.125l61.712-108.225-19.826 71.601c-6.829 24.092 6.312 53.21 36.638 46.035-13.969-1.481-17.604-23.931-13.735-37.264l34.977-125.683c2.185-7.432 9.211-5.362 12.134-15.951l-35.658 8.728-72.087 126.492-5.56-58.519c-3.098-32.871-28.725-50.794-58.033-48.04-27.448 2.583-48.75 26.501-48.75 53.503 0 26.11 16.09 39.082 27.871 39.082 8.845 0 16.026-7.18 16.026-16.026s-7.183-16.018-16.026-16.018c-3.26 0-6.272.966-8.8 2.627-4.431-4.059-7.203-9.908-7.203-16.416 0-17.627 13.705-32.604 31.655-34.293 12.253-1.152 23.645 4.184 30.738 13.182l-19.671 4.833c-2.411 8.687 7.587 3.805 5.548 11.255l-29.942 108.565c-3.355 12.204-9.272 6.103-13.437 21.455 10.764-5.984 24.306-12.381 37.846-17.29"
        fill="#0a2351"
      />
    </svg>
  );
};

MIL.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};



export default MIL;
