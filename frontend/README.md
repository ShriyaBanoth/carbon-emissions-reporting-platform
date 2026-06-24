# Carbon Emissions Reporting Platform

## Overview

The Carbon Emissions Reporting Platform is a full-stack web application designed to help organizations track, calculate, analyze, and report greenhouse gas (GHG) emissions in accordance with the GHG Protocol.

The platform supports Scope 1 (Direct Emissions) and Scope 2 (Indirect Energy Emissions), provides historical emission factor tracking, emission intensity calculations, hotspot identification, trend analysis, and a complete audit trail for manual overrides.

---

## Technology Stack

### Frontend

* React
* Vite
* Recharts

### Backend

* Node.js
* Express.js

### Database

* PostgreSQL

### Containerization

* Docker
* Docker Compose

---

## System Architecture

```text
React Dashboard
      ↓
Express REST APIs
      ↓
PostgreSQL Database
```

---

## Database Schema

### EmissionFactors

Stores versioned emission factors.

| Field         | Description         |
| ------------- | ------------------- |
| activity_name | Activity type       |
| scope         | Scope 1 / Scope 2   |
| factor_value  | Emission factor     |
| unit          | Measurement unit    |
| source        | Factor source       |
| valid_from    | Start validity date |
| valid_to      | End validity date   |

---

### EmissionRecords

Stores all recorded emissions.

| Field               | Description       |
| ------------------- | ----------------- |
| activity_name       | Activity type     |
| scope               | Scope category    |
| quantity            | Activity quantity |
| activity_date       | Activity date     |
| factor_id           | Factor used       |
| calculated_emission | Calculated kgCO₂e |

---

### BusinessMetrics

Stores production/business metrics.

| Field       | Description  |
| ----------- | ------------ |
| metric_name | Metric name  |
| value       | Metric value |
| metric_date | Metric date  |

---

### AuditLogs

Tracks all manual overrides.

| Field      | Description       |
| ---------- | ----------------- |
| record_id  | Emission record   |
| old_value  | Previous emission |
| new_value  | Updated emission  |
| reason     | Override reason   |
| created_at | Timestamp         |

---

## Core Features

### Scope-Based Emissions Reporting

* Scope 1 emissions support
* Scope 2 emissions support

---

### Historical Accuracy Engine

The system automatically selects the emission factor valid on the activity date, ensuring historical accuracy and compliance.

Emission Calculation:

```text
Activity Data × Emission Factor = kgCO₂e
```

---

### Manual Overrides & Audit Trail

Users can manually override calculated emissions.

Every override is logged with:

* Previous value
* Updated value
* Reason
* Timestamp

---

## Analytics & Reporting

### Year-over-Year (YoY) Emissions

Compares annual emissions by scope.

### Emission Hotspots

Identifies the largest emission sources.

### Monthly Emission Trends

Tracks emissions over time.

### Emission Intensity KPI

Calculates:

```text
kgCO₂e / Ton of Product
```

---

## API Endpoints

### Emissions

```http
POST /api/emissions
```

Create emission record.

---

### Business Metrics

```http
POST /api/metrics
```

Create business metric.

---

### Manual Override

```http
PUT /api/emissions/:id/override
```

Override emission value.

---

### Analytics

```http
GET /api/analytics/yoy
GET /api/analytics/hotspots
GET /api/analytics/monthly
GET /api/analytics/intensity
```

---

## Dashboard Visualizations

The platform includes:

* Emission Intensity KPI Card
* Year-over-Year Emissions Chart
* Emission Hotspot Chart
* Monthly Emission Trend Chart

---

## Docker Deployment

### Build and Run

```bash
docker compose up --build
```

### Access Application

Frontend:

```text
http://localhost:5173
```

Backend:

```text
http://localhost:5000
```

---

## Screenshots

## Screenshots

### Emission Submission Form
![Emission Form](screenshots/emission-form.png)

### Business Metric Form
![Business Metric Form](screenshots/business-metric-form.png)

### Year-over-Year Emissions
![YoY](screenshots/yoy-chart.png)

### Emission Hotspots - Diesel
![Diesel](screenshots/hotspot-diesel.png)

### Emission Hotspots - Grid Electricity
![Grid Electricity](screenshots/hotspot-grid-electricity.png)

### Monthly Emission Trends
![Monthly Trends](screenshots/monthly-trend-chart.png)

---

## Future Enhancements

* Scope 3 emissions support
* User authentication & RBAC
* ESG reporting exports
* Automated sustainability reports
* Cloud deployment
* Real-time monitoring dashboards

---

## Author

Shriya Banoth

B.Tech CSE, IIIT Naya Raipur
