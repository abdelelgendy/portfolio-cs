# Adding Your Profile Picture

## 📸 Profile Picture Setup

I've added profile picture spots to your portfolio:

### 🏠 Home Section (App.jsx)
- **Size**: 128x128 pixels (w-32 h-32)
- **Style**: Circular with blue border
- **Location**: Above your name in the hero section

### 📞 Contact Page (Contact.jsx)
- **Size**: 96x96 pixels (w-24 h-24)
- **Style**: Circular with blue border
- **Location**: Above the "Contact" heading

## 🖼️ How to Add Your Picture

### Step 1: Prepare Your Photo
1. **Take/Choose a professional headshot**
   - Clear, well-lit photo
   - Professional attire
   - Neutral background
   - Square crop works best

2. **Resize Your Image**
   - **Recommended size**: 256x256 pixels (higher resolution for crisp display)
   - **Format**: JPG or PNG
   - **File size**: Keep under 500KB for fast loading

### Step 2: Add to Your Project
1. **Save your image as**: `profile-picture.jpg`
2. **Place it in**: `public/profile-picture.jpg`
3. **The code will automatically use it!**

## 🎨 Current Fallback
- If no image is found, shows a blue placeholder with your initials "AE"
- This ensures your site always looks professional

## 🛠️ Alternative Image Sources

### Option 1: Local File (Recommended)
```
public/profile-picture.jpg
```

### Option 2: Online Image
Replace the `src` in both files:
```jsx
src="https://your-image-url.com/profile.jpg"
```

### Option 3: GitHub Profile
Use your GitHub profile picture:
```jsx
src="https://github.com/abdelelgendy.png"
```

## 📐 Image Specifications

### For Best Results:
- **Dimensions**: 256x256 pixels minimum
- **Aspect Ratio**: 1:1 (square)
- **Format**: JPG (smaller file) or PNG (transparency)
- **Quality**: High resolution for crisp display
- **Background**: Solid color or professional setting

### Photo Tips:
- ✅ Good lighting (natural light preferred)
- ✅ Professional attire
- ✅ Neutral/clean background
- ✅ Centered composition
- ✅ Friendly, professional expression

## 🔄 Testing Your Image
1. Add `profile-picture.jpg` to the `public/` folder
2. Refresh your browser
3. Your photo should appear in both the home and contact sections!

Your portfolio now has designated spots for your professional photo that will enhance your personal branding! 📸✨
