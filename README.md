🎯 Crazy Button Project
A fun and interactive web page featuring an "unclickable" button that escapes when you try to hover over it. Try to catch it if you can!

✨ Features
Elusive Button: The button moves away when you try to hover over it

Gradient Background: Beautiful gradient background that enhances the experience

🚀 Quick Start
Option 1: Simple Setup (No build tools needed)
Download the project files

Open index.html in your browser

Double-click the file, or

Use any local server:

# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node.js (if you have http-server installed)
npx http-server
Option 2: With Live Server (VSCode users)
If you use Visual Studio Code with the Live Server extension:

Open the project folder

Right-click on index.html → "Open with Live Server"

🎮 How to Play
Open the webpage in your browser

Try to move your cursor over the button to click it

Watch as the button intelligently moves away from your cursor

Keep trying different approaches to catch the elusive button

If you succeed, you'll get a victory alert!

🛠️ Technologies Used
HTML5 - Page structure

CSS3 with SASS - Styling and animations

JavaScript (ES6+) - Button movement logic

Pure Vanilla JS - No frameworks or libraries

📁 Project Structure
text
crazy-button-project/
├── assets/
│   └── favicon.png          # Website favicon
├── index.html               # Main HTML file
├── styles.scss              # SASS source file
├── styles.css               # Compiled CSS styles
├── script.js                # Button interaction logic
├── .gitignore              # Git ignore rules
├── LICENSE                 # MIT License
└── README.md               # Project documentation (This file)

🎨 Customization
You can easily customize the project:

Change Colors
Modify the SASS variables in styles.scss:

scss
$button-color: #your-color;       // Button background color
$button-shadow-color: #your-color; // Button border and shadow color
Adjust Button Behavior
Edit the movement parameters in script.js:

javascript
const maxDist = 200; // Increase/decrease movement distance
Modify Animation Speed
Change transition durations in the CSS:

css
.btn {
  transition: 0.2s; // Faster/slower movement
}
🌐 Browser Compatibility
Works in all modern browsers:

Chrome 60+

Firefox 55+

Safari 12+

Edge 79+

🤝 Contributing
Feel free to fork this project and submit pull requests! Some ideas for improvements:

Add different difficulty levels

Create a score counter for successful clicks

Add sound effects

Implement mobile touch support

📄 License
This project is distributed under the MIT License. See the LICENSE file for details.

👨‍💻 Development Notes
The button uses a combination of CSS transitions and JavaScript calculations to create the escaping effect. The algorithm:

Calculates mouse position relative to button center

Determines escape direction based on cursor position

Moves button to a new position within window boundaries

Uses CSS transitions for smooth animation

Challenge yourself: How quickly can you click the button? Share your best time!

Author: Miroshnichenko Alexey

github.com/alekcmirniy

Note: This project is designed for fun and demonstrates creative use of CSS and JavaScript interactions. The button might be tricky, but it's not impossible to catch!
