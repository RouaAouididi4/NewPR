import React, { useState } from "react";
import { useAuth } from "../../context/auth";
import { useNavigate } from "react-router-dom";

const DeleteAccount = () => {
  const [confirmation, setConfirmation] = useState("");
  const [error, setError] = useState("");
  const { user, token, logout } = useAuth(); // Get auth values from useAuth
  const navigate = useNavigate();

  const handleDelete = async () => {
    if (confirmation !== "DELETE") {
      setError('Please type "DELETE" to confirm');
      return;
    }

    if (
      !window.confirm(
        "Are you sure you want to delete your account? This action is irreversible."
      )
    ) {
      return;
    }

    try {
      const response = await fetch("/api/users", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Use standard Authorization header
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to delete account");
      }

      logout(); // Call logout without parameters
      navigate("/login");
    } catch (err) {
      setError(err.message || "Error while deleting account");
      console.error("Delete account error:", err);
    }
  };

  return (
    <div className="delete-account-section">
      <h2>Delete Account</h2>
      <p>
        This action will permanently delete all your data. You won't be able to
        recover your account.
      </p>

      <div className="form-group">
        <label>
          Type <strong>DELETE</strong> to confirm:
        </label>
        <input
          type="text"
          value={confirmation}
          onChange={(e) => setConfirmation(e.target.value.toUpperCase())}
          placeholder="DELETE"
          aria-label="Confirmation input for account deletion"
        />
      </div>

      {error && (
        <div className="alert error" role="alert">
          {error}
        </div>
      )}

      <button
        onClick={handleDelete}
        className="btn-danger"
        disabled={confirmation !== "DELETE"}
        aria-disabled={confirmation !== "DELETE"}
      >
        Permanently delete my account
      </button>
    </div>
  );
};

export default DeleteAccount;
