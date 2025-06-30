"use client";

import { useEffect, useState, useRef } from "react";

interface LocationData {
  latitude: number;
  longitude: number;
  accuracy: number;
  timestamp: number;
}

export default function MaharashtraGPSTracker() {
  const mapRef = useRef<HTMLDivElement>(null);
  const markerRef = useRef<any>(null);
  const [location, setLocation] = useState<LocationData | null>(null);
  const [isTracking, setIsTracking] = useState(false);
  const [error, setError] = useState<string>("");
  const [watchId, setWatchId] = useState<number | null>(null);
  const [mapLoaded, setMapLoaded] = useState(false);

  // Maharashtra bounds
  const maharashtraBounds = {
    north: 22.0,
    south: 15.6,
    east: 80.9,
    west: 72.6,
  };

  const isInMaharashtra = (lat: number, lng: number) => {
    return (
      lat >= maharashtraBounds.south &&
      lat <= maharashtraBounds.north &&
      lng >= maharashtraBounds.west &&
      lng <= maharashtraBounds.east
    );
  };

  useEffect(() => {
    const loadMap = () => {
      if (typeof window !== "undefined") {
        // Load Leaflet CSS
        const cssLink = document.createElement("link");
        cssLink.rel = "stylesheet";
        cssLink.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
        document.head.appendChild(cssLink);

        // Load Leaflet JS
        const script = document.createElement("script");
        script.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
        script.onload = () => {
          setMapLoaded(true);
          initMap();
        };
        document.body.appendChild(script);
      }
    };

    const initMap = () => {
      if (mapRef.current && (window as any).L) {
        const L = (window as any).L;

        // Create map
        const map = L.map(mapRef.current).setView([19.7515, 75.7139], 7);

        // Add tile layer
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution: "© OpenStreetMap contributors",
        }).addTo(map);

        // Add Maharashtra boundary (approximate)
        const maharashtraBoundary = [
          [22.0, 72.6],
          [22.0, 80.9],
          [15.6, 80.9],
          [15.6, 72.6],
          [22.0, 72.6],
        ];

        L.polygon(maharashtraBoundary, {
          color: "#ef4444",
          weight: 2,
          opacity: 0.8,
          fillOpacity: 0.1,
        }).addTo(map);

        // Store map reference
        (mapRef.current as any).leafletMap = map;
      }
    };

    loadMap();

    return () => {
      if (watchId) {
        navigator.geolocation.clearWatch(watchId);
      }
    };
  }, []);

  const startTracking = () => {
    if (!navigator.geolocation) {
      setError("GPS not supported by this browser");
      return;
    }

    setIsTracking(true);
    setError("");

    const success = (position: GeolocationPosition) => {
      const { latitude, longitude, accuracy } = position.coords;
      const locationData: LocationData = {
        latitude,
        longitude,
        accuracy,
        timestamp: Date.now(),
      };

      setLocation(locationData);

      // Update map
      if (
        mapRef.current &&
        (mapRef.current as any).leafletMap &&
        (window as any).L
      ) {
        const L = (window as any).L;
        const map = (mapRef.current as any).leafletMap;

        // Remove old marker
        if ((mapRef.current as any).currentMarker) {
          map.removeLayer((mapRef.current as any).currentMarker);
        }

        // Add new marker
        const marker = L.marker([latitude, longitude]).addTo(map);
        marker.bindPopup(
          `Location: ${latitude.toFixed(4)}, ${longitude.toFixed(4)}`
        );

        // Store marker reference
        (mapRef.current as any).currentMarker = marker;

        // Center map
        map.setView([latitude, longitude], 12);
      }
    };

    const errorCallback = (error: GeolocationPositionError) => {
      setError(`GPS Error: ${error.message}`);
      setIsTracking(false);
    };

    const id = navigator.geolocation.watchPosition(success, errorCallback, {
      enableHighAccuracy: true,
      timeout: 10000,
      maximumAge: 0,
    });
    setWatchId(id);
  };

  const stopTracking = () => {
    if (watchId) {
      navigator.geolocation.clearWatch(watchId);
      setWatchId(null);
    }
    setIsTracking(false);
  };

  const resetMap = () => {
    if (mapRef.current && (mapRef.current as any).leafletMap) {
      const map = (mapRef.current as any).leafletMap;
      map.setView([19.7515, 75.7139], 7);

      if ((mapRef.current as any).currentMarker) {
        map.removeLayer((mapRef.current as any).currentMarker);
        (mapRef.current as any).currentMarker = null;
      }
    }
    setLocation(null);
    setError("");
  };

  const buttonStyle = {
    padding: "10px 20px",
    borderRadius: "6px",
    border: "none",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: "500",
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    transition: "all 0.2s",
  };

  const primaryButtonStyle = {
    ...buttonStyle,
    backgroundColor: "#3b82f6",
    color: "white",
  };

  const dangerButtonStyle = {
    ...buttonStyle,
    backgroundColor: "#ef4444",
    color: "white",
  };

  const outlineButtonStyle = {
    ...buttonStyle,
    backgroundColor: "transparent",
    color: "#374151",
    border: "1px solid #d1d5db",
  };

  const cardStyle = {
    backgroundColor: "white",
    borderRadius: "8px",
    border: "1px solid #e5e7eb",
    boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
    overflow: "hidden",
  };

  const cardHeaderStyle = {
    padding: "20px 24px 0 24px",
    borderBottom: "none",
  };

  const cardContentStyle = {
    padding: "20px 24px 24px 24px",
  };

  const badgeStyle = {
    display: "inline-flex",
    alignItems: "center",
    borderRadius: "9999px",
    fontSize: "12px",
    fontWeight: "500",
    padding: "4px 10px",
  };

  const successBadgeStyle = {
    ...badgeStyle,
    backgroundColor: "#dcfce7",
    color: "#166534",
  };

  const secondaryBadgeStyle = {
    ...badgeStyle,
    backgroundColor: "#f3f4f6",
    color: "#374151",
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f9fafb",
        padding: "16px",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "24px" }}>
          <h1
            style={{
              fontSize: "30px",
              fontWeight: "bold",
              margin: "0 0 8px 0",
              color: "#111827",
            }}
          >
            Maharashtra GPS Tracker
          </h1>
          <p style={{ color: "#6b7280", margin: "0" }}>
            Track your location within Maharashtra state boundaries
          </p>
        </div>

        {/* Controls Card */}
        <div style={{ ...cardStyle, marginBottom: "24px" }}>
          <div style={cardHeaderStyle}>
            <h2
              style={{
                fontSize: "18px",
                fontWeight: "600",
                margin: "0",
                color: "#111827",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              📍 GPS Controls
            </h2>
          </div>
          <div style={cardContentStyle}>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "8px",
                marginBottom: "16px",
              }}
            >
              {!isTracking ? (
                <button
                  onClick={startTracking}
                  style={primaryButtonStyle}
                  onMouseOver={(e) =>
                    ((e.target as HTMLElement).style.backgroundColor =
                      "#2563eb")
                  }
                  onMouseOut={(e) =>
                    ((e.target as HTMLElement).style.backgroundColor =
                      "#3b82f6")
                  }
                >
                  📍 Start Tracking
                </button>
              ) : (
                <button
                  onClick={stopTracking}
                  style={dangerButtonStyle}
                  onMouseOver={(e) =>
                    ((e.target as HTMLElement).style.backgroundColor =
                      "#dc2626")
                  }
                  onMouseOut={(e) =>
                    ((e.target as HTMLElement).style.backgroundColor =
                      "#ef4444")
                  }
                >
                  ⏹️ Stop Tracking
                </button>
              )}
              <button
                onClick={resetMap}
                style={outlineButtonStyle}
                onMouseOver={(e) =>
                  ((e.target as HTMLElement).style.backgroundColor = "#f9fafb")
                }
                onMouseOut={(e) =>
                  ((e.target as HTMLElement).style.backgroundColor =
                    "transparent")
                }
              >
                🔄 Reset Map
              </button>
            </div>

            {error && (
              <div
                style={{
                  padding: "12px",
                  backgroundColor: "#fef2f2",
                  border: "1px solid #fecaca",
                  borderRadius: "6px",
                  marginBottom: "16px",
                }}
              >
                <p style={{ color: "#dc2626", fontSize: "14px", margin: "0" }}>
                  {error}
                </p>
              </div>
            )}

            {location && (
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                  gap: "16px",
                }}
              >
                <div>
                  <p
                    style={{
                      fontSize: "14px",
                      fontWeight: "500",
                      margin: "0 0 4px 0",
                      color: "#111827",
                    }}
                  >
                    Latitude
                  </p>
                  <p
                    style={{ fontSize: "14px", color: "#6b7280", margin: "0" }}
                  >
                    {location.latitude.toFixed(6)}
                  </p>
                </div>
                <div>
                  <p
                    style={{
                      fontSize: "14px",
                      fontWeight: "500",
                      margin: "0 0 4px 0",
                      color: "#111827",
                    }}
                  >
                    Longitude
                  </p>
                  <p
                    style={{ fontSize: "14px", color: "#6b7280", margin: "0" }}
                  >
                    {location.longitude.toFixed(6)}
                  </p>
                </div>
                <div>
                  <p
                    style={{
                      fontSize: "14px",
                      fontWeight: "500",
                      margin: "0 0 4px 0",
                      color: "#111827",
                    }}
                  >
                    Accuracy
                  </p>
                  <p
                    style={{ fontSize: "14px", color: "#6b7280", margin: "0" }}
                  >
                    {location.accuracy.toFixed(0)}m
                  </p>
                </div>
                <div>
                  <p
                    style={{
                      fontSize: "14px",
                      fontWeight: "500",
                      margin: "0 0 4px 0",
                      color: "#111827",
                    }}
                  >
                    Status
                  </p>
                  <span
                    style={
                      isInMaharashtra(location.latitude, location.longitude)
                        ? successBadgeStyle
                        : secondaryBadgeStyle
                    }
                  >
                    {isInMaharashtra(location.latitude, location.longitude)
                      ? "✅ In Maharashtra"
                      : "❌ Outside Maharashtra"}
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Map Card */}
        <div style={{ ...cardStyle, marginBottom: "24px" }}>
          <div style={cardHeaderStyle}>
            <h2
              style={{
                fontSize: "18px",
                fontWeight: "600",
                margin: "0",
                color: "#111827",
              }}
            >
              🗺️ Map View
            </h2>
          </div>
          <div style={cardContentStyle}>
            <div style={{ position: "relative" }}>
              <div
                ref={mapRef}
                style={{
                  width: "100%",
                  height: "500px",
                  borderRadius: "8px",
                  border: "1px solid #e5e7eb",
                }}
              />
              {!mapLoaded && (
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    color: "#6b7280",
                    fontSize: "16px",
                  }}
                >
                  Loading map...
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Instructions Card */}
        <div style={cardStyle}>
          <div style={cardHeaderStyle}>
            <h2
              style={{
                fontSize: "18px",
                fontWeight: "600",
                margin: "0",
                color: "#111827",
              }}
            >
              📋 How to Use
            </h2>
          </div>
          <div style={cardContentStyle}>
            <ol
              style={{
                paddingLeft: "20px",
                margin: "0",
                color: "#374151",
                fontSize: "14px",
                lineHeight: "1.6",
              }}
            >
              <li style={{ marginBottom: "8px" }}>
                Click "Start Tracking" to begin GPS location tracking
              </li>
              <li style={{ marginBottom: "8px" }}>
                Allow location access when prompted by your browser
              </li>
              <li style={{ marginBottom: "8px" }}>
                Your current location will be displayed on the map with a marker
              </li>
              <li style={{ marginBottom: "8px" }}>
                The red boundary shows the approximate borders of Maharashtra
              </li>
              <li style={{ marginBottom: "8px" }}>
                Your location status will show if you're inside or outside
                Maharashtra
              </li>
              <li style={{ marginBottom: "8px" }}>
                Click "Stop Tracking" to stop location updates
              </li>
              <li>Use "Reset Map" to return to the default view</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
