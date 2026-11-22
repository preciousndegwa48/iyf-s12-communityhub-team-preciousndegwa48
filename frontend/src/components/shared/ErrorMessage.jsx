import React from "react";
import "./ErrorMessage.css";

function ErrorMessage({
  message = "Something went wrong. Please try again.",
  onRetry,
}) {
  return (
    <div className="error-container" role="alert">
      <p className="error-text">{message}</p>

    {onRetry && (
        <button 
        type="button"
        className="error-retry"
        onClick={onRetry}
        >
          Try Again
        </button>
      )}
    </div>
  );
}

export default ErrorMessage;
