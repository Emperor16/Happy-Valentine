# 💕 MyVal - Will You Be My Valentine?

A fun, interactive Valentine's Day webpage with playful animations and SpongeBob GIFs!

## 🌸 Overview

This project is for my futre wife on Valentine's Day. This is a webpage that asks your special person to be your Valentine. It features:
- A personalized name entry experience
- Interactive "Yes" and "No" buttons
- Cute SpongeBob GIF animations
- Falling hearts background effect
- Mobile-responsive design


## NOT FOR YOU!!
```FUTURE WIFE INSERT THE DATE OF WHEN WE MET AND OUR WEDDING DATE
Daniel 13|02|2016 -6:31 WAT {Your turn?}
```
## 📁 Project Structure

```
myVal/
├── index.html    # Main HTML structure
├── styles.css    # All styling and animations
├── scripts.js    # JavaScript functionality
├── MIT License   #The license functionality
└── README.md     # This file

```

## 🎯 Features

### 1. Name Entry Flow
- Users are greeted with "Let's get personal 💕"
- Enter your name to personalize the experience
- Name is displayed as "Dear {name}" on the Valentine card
- Press Enter or click the button to proceed

### 2. Valentine Card
- Displays "Happy Valentine's Day ❤️"
- Personalized with the entered name
- "Will you be my Valentine?" question
- Interactive Yes/No buttons

### 3. "Yes" Button Celebration 🎉
- Clicking "Yes" triggers a celebration screen
- Shows a dancing SpongeBob GIF
- Displays: "You've made my day 💖" and "Happy Valentine! 🎉"
- Romantic emoji decorations (🥰🌹💕)
- GitHub star request at the bottom

### 4. "No" Button - The Playful Challenge ❌
The "No" button has several interactive behaviors:

#### Desktop:
- **Hover Movement**: Button moves away randomly when hovered
- **Progressive Difficulty**: Each click increases the move distance by 30px
- **Random Colors**: Button changes to random colors on hover
- **Fade Effect**: Button fades out and back in on click
- **SpongeBob GIF**: Cute SpongeBob appears above the card

#### Mobile:
- Touch/click triggers the same playful effects
- Larger touch targets for better UX

### 5. Falling Hearts Animation ❤️
- Hearts continuously fall from the top of the screen
- Random positions and sizes for variety
- Smooth 4-second animation

## 🎨 Design

### Color Palette
- **Primary**: #ff4d6d (Pink/Coral)
- **Secondary**: #ffc2d1 (Light Pink)
- **Accent**: #d6336c (Darker Pink)
- **Background**: Gradient from #ff4d6d to #ffc2d1

### Typography
- Font: Arial, sans-serif
- Clean, modern styling
- Responsive text sizes

### Animations
- `fadeIn`: Smooth fade-in for containers
- `cardReveal`: Card reveal animation
- `bounceIn`: Bouncy GIF appearance
- `celebrationPop`: Celebration screen pop effect
- `spongebobDance`: Dancing SpongeBob animation
- `fall`: Falling hearts animation

## 📱 Mobile Responsiveness

The page is fully responsive with breakpoints at 480px:
- Smaller containers for better fit
- Adjusted button sizes
- Reduced text sizes
- Optimized touch targets

## 🔧 Customization

### Changing GIFs
Edit the GIF URLs in `scripts.js`:
```javascript
// SpongeBob crying GIF
spongebobGif.src = "https://media.giphy.com/media/OPU6wzx8JrHna/giphy.gif";

// Celebration dancing SpongeBob
<img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ20xYTdjZjF4dzNzcWU5cHgxNGZqYW9rM3JpODRnZTlqcDE0d2V6dCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/xRJZH4Ajr973y/giphy.gif">
```



### Changing Colors
Edit the color palette in `scripts.js`:
```javascript
const colors = [
  "#ff6b6b", // Red
  "#feca57", // Yellow
  "#48dbfb", // Blue
  "#ff9ff3", // Pink
  "#54a0ff", // Light Blue
  "#5f27cd", // Purple
  "#00d2d3", // Teal
  "#ff9f43", // Orange
  "#ee5a24", // Dark Orange
  "#009432", // Green
];
```

### Adjusting Difficulty
Change the initial move distance in `scripts.js`:
```javascript
let moveDistance = 50; // Starting distance in pixels
let moveIncrement = 30; // Distance added per click
```

## 🚀 How to Use

1. Open `index.html` in a web browser
2. Enter the person's name
3. Click "Enter" to reveal the Valentine card
4. Wait for them to click "Yes" 💖

## 📝 Code Highlights

### JavaScript (142 lines)
- DOM element selection and caching
- Event listeners for interactions
- Dynamic GIF scaling
- Color randomization
- Falling hearts animation

### CSS (368 lines)
- Flexbox layout
- Custom animations (@keyframes)
- Responsive media queries
- Gradient backgrounds
- Box shadows and hover effects

## 🤝 Credits

- SpongeBob GIFs from Giphy
- Valentine's Day inspiration

## 📄 License

Feel free to customize and use this project for your own Valentine's Day surprise! 💕

---

Made for wifey ❤️ and SpongeBob 🧽
#I got this inspiration from an indian woman on her github repo who only made this ON A SINGLE HTML FILE. 
Apprciation ma'am 🙏