# Earthquake Visualization with Leaflet

## Background

The United States Geological Survey (USGS) collects extensive data on earthquakes worldwide, and there's a need to develop visualization tools to effectively communicate this data. This project aims to create interactive earthquake visualizations using Leaflet, allowing the USGS to better educate the public and government organizations about seismic activity and its impact on our planet.

## Project Overview

### Part 1: Create the Earthquake Visualization

**Data Source:** The USGS provides earthquake data in JSON format, updated every 5 minutes, through their GeoJSON Feed. This project visualizes earthquake data, highlighting magnitude and depth.

**Key Steps:**
1. Retrieve earthquake data from the USGS GeoJSON Feed.
2. Create a Leaflet map that plots earthquake locations based on latitude and longitude.
3. Customize the data markers:
   - Size of the marker corresponds to the earthquake's magnitude.
   - Marker color represents the earthquake's depth.
4. Implement popups to display additional information when markers are clicked.
5. Include a legend for context.
6. Produce an interactive visualization resembling a map.

### Part 2: Gather and Plot More Data (Optional)

**Tasks:**
1. Plot tectonic plates data alongside earthquake data on the map.
2. Add various base maps for user selection.
3. Organize data into separate overlays with independent visibility controls.
4. Implement layer controls to switch between datasets.

## Usage

- To explore the earthquake visualization, open the HTML file containing the Leaflet map.
- Interact with the map to view earthquake markers and gain insights into seismic activity.
- Optionally, enable tectonic plates data and switch between base maps for a comprehensive understanding.

## Credits

- Earthquake data provided by the United States Geological Survey (USGS).
- Tectonic plates data sourced from the [fraxen/tectonicplates repository](https://github.com/fraxen/tectonicplates).

## Note

This project offers an opportunity to enhance visualization skills using Leaflet and provides valuable insights into earthquake patterns and tectonic plate boundaries.

**Disclaimer:** This is a learning project, and all data sources and references belong to their respective owners.
