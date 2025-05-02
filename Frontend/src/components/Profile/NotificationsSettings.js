import React, { useState, useEffect } from "react";
import { useAuth } from "../../context/auth";

const NotificationsSettings = () => {
  const [settings, setSettings] = useState({
    emailNotifications: true,
    pushNotifications: false,
    newsletter: true,
  });
  const [loading, setLoading] = useState(true);
  const { authTokens } = useAuth();

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const res = await fetch("/api/users/notifications-settings", {
          method: "GET",
          headers: {
            "x-auth-token": authTokens,
          },
        });

        if (!res.ok) throw new Error("Failed to fetch settings");
        const data = await res.json();
        setSettings(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchSettings();
  }, [authTokens]);

  const handleToggle = async (key) => {
    const updatedSettings = { ...settings, [key]: !settings[key] };
    setSettings(updatedSettings);

    try {
      const res = await fetch("/api/users/notifications-settings", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": authTokens,
        },
        body: JSON.stringify({ [key]: updatedSettings[key] }),
      });

      if (!res.ok) throw new Error("Failed to update setting");
    } catch (err) {
      console.error(err);
      // Revert on error
      setSettings({ ...settings });
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="notifications-settings">
      <h2>Notification Settings</h2>

      <div className="setting-item">
        <label>
          <input
            type="checkbox"
            checked={settings.emailNotifications}
            onChange={() => handleToggle("emailNotifications")}
          />
          Email Notifications
        </label>
      </div>

      <div className="setting-item">
        <label>
          <input
            type="checkbox"
            checked={settings.pushNotifications}
            onChange={() => handleToggle("pushNotifications")}
          />
          Push Notifications
        </label>
      </div>

      <div className="setting-item">
        <label>
          <input
            type="checkbox"
            checked={settings.newsletter}
            onChange={() => handleToggle("newsletter")}
          />
          Receive Newsletter
        </label>
      </div>
    </div>
  );
};

export default NotificationsSettings;
