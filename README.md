# Hero Apps Dashboard

## Description
**Hero Apps Dashboard** is a React-based web application that showcases a collection of mobile apps called **Hero Apps**.  
Users can explore apps, view detailed information, install/uninstall apps, see download stats, ratings, reviews, and interactive charts for app metrics.  
The app is fully responsive and provides a smooth user experience across desktop and mobile devices.

---

## Features
- View all available Hero Apps with app icon, company name, and title.
- Detailed app pages with metrics like downloads, ratings, reviews, and size.
- Install and uninstall apps using localStorage.
- Interactive horizontal review charts using Recharts.
- Sort apps by download count.
- Responsive UI built with Tailwind CSS.
- Custom icon images for rating, downloads, and reviews.
- Error page with custom 404 image.

---

## Technologies Used
- **Frontend:** React.js, Tailwind CSS  
- **Routing:** React Router DOM  
- **Charts:** Recharts  
- **Notifications:** react-hot-toast  
- **Icons:** Custom image icons stored in `src/assets`  
- **State Management:** React Hooks (`useState`, `useEffect`)  
- **Browser Storage:** localStorage for installed apps  

---

## Project Structure

```
hero-apps-dashboard/
├── public/
│ └── index.html
├── src/
│ ├── assets/ # Images & icons
│ ├── components/ # Reusable components
│ ├── data/ # appsData.js
│ ├── pages/ # AppDetails.jsx, MyInstallation.jsx, ErrorPage.jsx
│ ├── App.jsx
│ └── main.jsx
├── package.json
└── README.md

```