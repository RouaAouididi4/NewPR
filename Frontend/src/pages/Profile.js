import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth";
import PasswordChange from "../components/Profile/PasswordChange.js";
import NotificationsSettings from "../components/Profile/NotificationsSettings.js";
import DeleteAccount from "../components/Profile/DeleteAccount.js";
import "./Profile.css";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState("profile");
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    phone: "",
    region: "",
    gender: "",
  });
  const { authTokens } = useAuth();
  const navigate = useNavigate();

  // Récupération des données utilisateur
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          navigate("/login");
          return;
        }

        const res = await fetch("/api/users/me", {
          method: "GET",
          headers: { "x-auth-token": authTokens || `Bearer ${token}` },
        });

        if (!res.ok) throw new Error("Failed to fetch profile");
        const data = await res.json();
        setProfile(data);
        setUser(data);
      } catch (err) {
        setError("Error loading profile");
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, [authTokens, navigate]);

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleProfileUpdate = async (updatedData) => {
    try {
      const response = await fetch("/api/users/me", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": authTokens,
        },
        body: JSON.stringify(updatedData),
      });

      if (!response.ok) throw new Error("Failed to update profile");

      setUser(updatedData);
      alert("Profile updated successfully");
    } catch (err) {
      setError(err.message);
    }
  };

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="profile-container">
      <div className="profile-header">
        <h1>Bonjour, {user.FullName}</h1>
        <p>Gérez vos paramètres personnels</p>
      </div>

      {/* Navigation par onglets */}
      <div className="profile-tabs">
        <button
          className={activeTab === "profile" ? "active" : ""}
          onClick={() => setActiveTab("profile")}
        >
          Profil
        </button>
        <button
          className={activeTab === "password" ? "active" : ""}
          onClick={() => setActiveTab("password")}
        >
          Mot de passe
        </button>
        <button
          className={activeTab === "notifications" ? "active" : ""}
          onClick={() => setActiveTab("notifications")}
        >
          Notifications
        </button>
        <button
          className={activeTab === "delete" ? "active" : ""}
          onClick={() => setActiveTab("delete")}
        >
          Supprimer le compte
        </button>
      </div>

      {/* Contenu des onglets */}
      <div className="tab-content">
        {activeTab === "profile" && (
          <div className="profile-section">
            <h2>Informations personnelles</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleProfileUpdate({
                  FullName: e.target.FullName.value,
                  phone: e.target.phone.value,
                });
              }}
            >
              <div className="form-group">
                <label>Nom complet</label>
                <input
                  type="text"
                  name="FullName"
                  defaultValue={user.FullName}
                  required
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" value={user.email} disabled />
              </div>
              <div className="form-group">
                <label>Téléphone</label>
                <input
                  type="tel"
                  name="phone"
                  defaultValue={user.phone || ""}
                  pattern="[0-9]{10}"
                  title="10 chiffres requis"
                />
              </div>
              <button type="submit" className="save-button">
                Enregistrer
              </button>
            </form>
          </div>
        )}

        {activeTab === "password" && <PasswordChange />}

        {activeTab === "notifications" && (
          <NotificationsSettings user={user} onUpdate={handleProfileUpdate} />
        )}

        {activeTab === "delete" && <DeleteAccount />}
      </div>
    </div>
  );
};

export default Profile;
