mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN;

// ── connect() ─────────────────────────────────────────────────────────────────

let map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/maelie/cmb7nnzmz00r901pact8o1xtf",
  center: [-1.55, 47.216671],
  zoom: 5,
});

fetchMarkers();

// ── fetchMarkers() ────────────────────────────────────────────────────────────

async function fetchMarkers() {
  const response = await fetch(API_RECORDS);
  const data = await response.json();
  const markers = data.results;
  addMarkersToMap(markers);
  fitMapToMarkers(markers);
}

// ── addMarkersToMap() ─────────────────────────────────────────────────────────

function addMarkersToMap(markers) {
  markers.forEach((marker) => {
    const popup = new mapboxgl.Popup({ maxWidth: "260px" }).setHTML(
      buildPopupHTML(marker),
    );

    new mapboxgl.Marker()
      .setLngLat([marker.geo_point_2d.lon, marker.geo_point_2d.lat])
      .setPopup(popup)
      .addTo(map);
  });
}

// ── fitMapToMarkers() ─────────────────────────────────────────────────────────

function fitMapToMarkers(markers) {
  const bounds = new mapboxgl.LngLatBounds();
  markers.forEach((marker) =>
    bounds.extend([marker.geo_point_2d.lon, marker.geo_point_2d.lat]),
  );
  map.fitBounds(bounds, { padding: 70, maxZoom: 15, duration: 0 });
}

// ── buildPopupHTML() ──────────────────────────────────────────────────────────

// function buildPopupHTML(marker) {
//   const nom = marker.libelle_commun || "Inconnu";
//   const genre = marker.genre || "—";
//   const espece = marker.espece || "—";

//   return `
//     <div class="popup-title">🌳 ${nom}</div>
//     <div class="popup-row"><span class="popup-label">Genre</span><span class="popup-value">${genre}</span></div>
//     <div class="popup-row"><span class="popup-label">Espèce</span><span class="popup-value">${espece}</span></div>
//   `;
// }
