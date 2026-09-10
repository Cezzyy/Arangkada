# Arangkada

A static scooter and motorcycle maintenance logging app built with React Native and Expo.

**Student Name:** John Cez B. Casupanan 

**Section:** CS41A

---

## How to Run

```bash
# Install dependencies
bun install

# Start the development server
bun run start
```

Then scan the QR code with **Expo Go** on your phone.

---

## Screens

| Screen | Role |
|--------|------|
| **Dashboard** | Shows current odometer reading and service schedule alerts |
| **History** | Displays full maintenance log with total spend summary |
| **Profile** | Shows bike specifications and allows uploading a service receipt photo |

---

## Packages Used

| Package | Purpose |
|---------|---------|
| `expo` | Core Expo SDK |
| `expo-image-picker` | Gallery access for uploading service receipts |
| `expo-status-bar` | Status bar control |
| `@expo/vector-icons` | Ionicons used throughout the app |
| `@react-navigation/native` | Navigation container |
| `@react-navigation/bottom-tabs` | Bottom tab navigation |
| `react-native-screens` | Native screen optimization |
| `react-native-safe-area-context` | Safe area insets handling |

---

## Custom Components

- **`StatusCard`** — Reusable row component with icon, title, subtitle, and colored status label. Used in Dashboard and History screens.
- **`CustomButton`** — Reusable button with primary and outline variants and optional icon. Used in Dashboard and Profile screens.
