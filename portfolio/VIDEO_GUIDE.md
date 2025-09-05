# Adding Videos and Thumbnails to Your Portfolio

## 📁 Folder Structure
```
public/
├── videos/
│   ├── movie-app-demo.mp4
│   ├── mealmind-demo.mp4
│   └── portfolio-demo.mp4
└── thumbnails/
    ├── movie-app-thumb.jpg
    ├── mealmind-thumb.jpg
    └── portfolio-thumb.jpg
```

## 🎥 How to Add Videos

### Step 1: Record Your Project Demos
1. **Screen Recording Tools:**
   - Windows: Built-in Xbox Game Bar (Win + G)
   - OBS Studio (free, professional)
   - Loom (web-based, easy)
   - Camtasia (paid, advanced)

2. **Recording Tips:**
   - Keep videos 30-60 seconds
   - Show key features/functionality
   - Use 1920x1080 resolution
   - Export as MP4 format

### Step 2: Place Videos in Public Folder
1. Save your recorded videos as:
   - `movie-app-demo.mp4`
   - `mealmind-demo.mp4` 
   - `portfolio-demo.mp4`
2. Copy them to: `public/videos/`

## 🖼️ How to Create Thumbnails

### Method 1: Extract from Video (Recommended)
1. **Using VLC Media Player:**
   - Open your video in VLC
   - Pause at a good frame
   - Video → Take Snapshot
   - Save as JPG in `public/thumbnails/`

2. **Using Video Editing Software:**
   - Import video
   - Find best frame
   - Export single frame as JPG

### Method 2: Screenshot Your App
1. Open your deployed project
2. Take a clean screenshot
3. Resize to 400x250 pixels
4. Save as JPG in `public/thumbnails/`

### Method 3: Design Custom Thumbnails
1. **Canva (Easy):**
   - Create 400x250px design
   - Add project screenshot
   - Add title overlay
   - Download as JPG

2. **Figma/Photoshop (Advanced):**
   - Create 400x250px canvas
   - Add screenshots
   - Add gradients/text
   - Export as JPG

## 🔧 Update Your Code

Once you have your files, update the projects array in App.jsx:

```javascript
const projects = [
  {
    id: 1,
    title: "React Movie Discovery App",
    description: "Responsive movie search application...",
    techStack: ["React", "Tailwind CSS", "REST API", "JavaScript"],
    videoUrl: "/videos/movie-app-demo.mp4",        // ← Your video
    thumbnailUrl: "/thumbnails/movie-app-thumb.jpg", // ← Your thumbnail
    liveLink: "https://your-movie-app.vercel.app",
    codeLink: "https://github.com/yourusername/movie-app"
  },
  // ... other projects
];
```

## 📱 Alternative: Hosted Videos

### YouTube/Vimeo Embed (Public)
```javascript
// For YouTube embed
videoUrl: "https://www.youtube.com/embed/YOUR_VIDEO_ID"

// Update the video element to use iframe:
<iframe 
  src={project.videoUrl}
  className="w-full h-full"
  allowFullScreen
/>
```

### Cloud Storage (Private)
- Upload to Google Drive/Dropbox
- Get direct link
- Use in videoUrl

## 🎨 Thumbnail Best Practices

1. **Size:** 400x250 pixels (maintains aspect ratio)
2. **Format:** JPG for photos, PNG for graphics
3. **Quality:** Balance file size vs clarity
4. **Content:** Show main UI/features
5. **Branding:** Consistent style across projects

## 🚀 Quick Start

1. Record a 30-second demo of each project
2. Extract thumbnail from best frame
3. Save files in public folders
4. Update the videoUrl and thumbnailUrl paths
5. Test in browser

Your videos will now play locally and load faster than external URLs!
