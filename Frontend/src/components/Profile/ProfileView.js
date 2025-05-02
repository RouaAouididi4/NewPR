import React, { useState, useEffect } from "react";
import { useAuth } from "../../context/auth";

const ProfileView = () => {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    phone: "",
    region: "",
    gender: "",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const { authTokens } = useAuth();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await fetch("/api/users/me", {
          method: "GET",
          headers: { "x-auth-token": authTokens },
        });

        if (!res.ok) throw new Error("Failed to fetch profile");
        const data = await res.json();
        setProfile(data);
      } catch (err) {
        setError("Error loading profile");
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, [authTokens]);

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/users/me", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": authTokens,
        },
        body: JSON.stringify(profile),
      });

      if (!res.ok) throw new Error("Failed to update profile");

      setSuccess("Profile updated successfully");
      setTimeout(() => setSuccess(""), 3000);
    } catch (err) {
      setError(err.message || "Error updating profile");
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="profile-view">
      <h1>My Profile</h1>
      {error && <div className="alert error">{error}</div>}
      {success && <div className="alert success">{success}</div>}

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Full Name</label>
          <input
            type="text"
            name="name"
            value={profile.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={profile.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Phone</label>
          <input
            type="tel"
            name="phone"
            value={profile.phone || ""}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Region</label>
          <select
            name="region"
            value={profile.region || ""}
            onChange={handleChange}
          >
            <option value="">Select...</option>
            <option value="Europe">Europe</option>
            <option value="America">America</option>
            <option value="Africa">Africa</option>
            <option value="Asia">Asia</option>
          </select>
        </div>

        <div className="form-group">
          <label>Gender</label>
          <div className="radio-group">
            {["Female", "Male", "Other"].map((gender) => (
              <label key={gender}>
                <input
                  type="radio"
                  name="gender"
                  value={gender}
                  checked={profile.gender === gender}
                  onChange={handleChange}
                />
                {gender}
              </label>
            ))}
          </div>
        </div>

        <button type="submit" className="btn-primary">
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default ProfileView;
