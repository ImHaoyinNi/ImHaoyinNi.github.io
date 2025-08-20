# Haoyin Ni - Portfolio Website

A personal portfolio website built with React and Vite, showcasing projects, bio, and creative works.

## 🚀 Getting Started

### Prerequisites
- Node.js (version 18 or higher)
- npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/ImHaoyinNi/ImHaoyinNi.github.io.git
cd ImHaoyinNi.github.io
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run deploy` - Deploy to GitHub Pages (manual)

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Header.jsx      # Navigation header
│   ├── Bio.jsx         # About section
│   ├── Projects.jsx    # Projects showcase
│   ├── Gallery.jsx     # Photos and artworks
│   └── Footer.jsx      # Site footer
├── App.jsx             # Main app component
├── main.jsx           # React entry point
└── index.css          # Global styles
```

## 🎨 Customization

### Adding Your Content

1. **Bio Section**: Edit `src/components/Bio.jsx` to add your personal information
2. **Projects**: Update the projects array in `src/components/Projects.jsx`
3. **Gallery**: Replace placeholder content in `src/components/Gallery.jsx`
4. **Contact Info**: Update social links in `src/components/Footer.jsx`

### Adding Images

1. Place your images in the `public/` directory
2. Reference them in components using `/image-name.jpg`

## 🚀 Deployment

This site is automatically deployed to GitHub Pages using GitHub Actions when you push to the main branch.

### Manual Deployment

You can also deploy manually using:
```bash
npm run deploy
```

## 📝 License

This project is open source and available under the [MIT License](LICENSE).