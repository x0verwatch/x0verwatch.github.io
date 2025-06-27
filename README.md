# Muhammad Qaseem - Cybersecurity Engineer Portfolio

A modern, responsive portfolio website showcasing cybersecurity expertise, projects, certifications, and experience. Built with HTML, CSS, and JavaScript, optimized for GitHub Pages deployment.

## 🚀 Features

- **Modern Dark Theme**: Professional cybersecurity aesthetic with blue/green accents
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Interactive Animations**: Smooth scrolling, fade-in effects, and hover animations
- **Professional Sections**: Hero, About, Experience, Projects, Skills, Certifications, Awards, Contact
- **GitHub Pages Ready**: Static website optimized for GitHub Pages hosting

## 📁 Project Structure

```
x0verwatch.github.io/
├── index.html              # Main HTML file
├── styles.css              # Comprehensive CSS styling
├── script.js               # Interactive JavaScript features
├── profile.jpg             # Profile picture (circular display)
├── Muhammad_Qaseem_CV.pdf  # Downloadable CV
└── README.md               # This file
```

## 🛠️ Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**: Modern styling with Flexbox/Grid, animations, and responsive design
- **JavaScript**: Interactive features and smooth user experience
- **Font Awesome**: Professional icons
- **Google Fonts**: Inter font family for clean typography

## 🎨 Design Features

### Color Palette
- **Primary Background**: `#0a0a0a` (Deep black)
- **Secondary Background**: `#111111` (Dark gray)
- **Card Background**: `#1a1a1a` (Medium gray)
- **Primary Accent**: `#00d4ff` (Cyan blue)
- **Secondary Accent**: `#00ff88` (Green)
- **Text Primary**: `#e4e4e7` (Light gray)
- **Text Secondary**: `#a1a1aa` (Medium gray)

### Key Sections
1. **Hero Section**: Animated background grid, profile image, call-to-action buttons
2. **About**: Personal introduction with animated statistics
3. **Experience**: Timeline layout with company details and achievements
4. **Projects**: Card-based layout with technology tags
5. **Skills**: Categorized skill sets with interactive tags
6. **Certifications**: Badge-style certification display
7. **Awards**: Achievement showcase with gold accents
8. **Contact**: Interactive form with social media links

## 🚀 Deployment Instructions

### Method 1: GitHub Pages (Recommended)

1. **Create a GitHub Repository**:
   ```bash
   # If you haven't already, initialize git in your project folder
   cd /home/xOverwatch/Documents/x0verwatch.github.io
   git init
   ```

2. **Add and Commit Files**:
   ```bash
   git add .
   git commit -m "Initial portfolio website commit"
   ```

3. **Create GitHub Repository**:
   - Go to [GitHub](https://github.com)
   - Click "New Repository"
   - Name it `your-username.github.io` (replace with your actual GitHub username)
   - Make it public
   - Don't initialize with README (since you already have files)

4. **Push to GitHub**:
   ```bash
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/YOUR-USERNAME.github.io.git
   git push -u origin main
   ```

5. **Enable GitHub Pages**:
   - Go to your repository settings
   - Scroll to "Pages" section
   - Source: Deploy from a branch
   - Branch: main
   - Folder: / (root)
   - Click "Save"

6. **Access Your Site**:
   - Your site will be available at: `https://YOUR-USERNAME.github.io`
   - It may take a few minutes to deploy

### Method 2: Custom Domain (Optional)

If you want to use a custom domain:

1. **Add CNAME file**:
   ```bash
   echo "yourdomain.com" > CNAME
   git add CNAME
   git commit -m "Add custom domain"
   git push
   ```

2. **Configure DNS**:
   - Add DNS records pointing to GitHub Pages IPs:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`

## 🔧 Customization

### Updating Content

1. **Personal Information**: Edit the HTML in `index.html`
2. **Styling**: Modify colors and layouts in `styles.css`
3. **Functionality**: Add features in `script.js`

### Adding New Sections

1. Add HTML structure in `index.html`
2. Add corresponding styles in `styles.css`
3. Update navigation menu
4. Add intersection observer for animations in `script.js`

### Updating Assets

- **Profile Picture**: Replace `profile.jpg` with your image
- **CV**: Replace `Muhammad_Qaseem_CV.pdf` with your CV
- **Favicon**: Add `favicon.ico` to the root directory

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px

## 🎯 Performance Optimizations

- Optimized images and assets
- Minimal external dependencies
- Efficient CSS animations
- Lazy loading for scroll animations
- Compressed and minified code structure

## 🛡️ Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📞 Contact Information

- **Email**: qaseem.infosec@gmail.com
- **LinkedIn**: [linkedin.com/in/muhammad-qaseem](https://linkedin.com/in/muhammad-qaseem)
- **Location**: Punjab, Pakistan

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Built with ❤️ for the cybersecurity community**
