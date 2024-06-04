# StellarSense

StellarSense is a web-based classification model that uses a K-Nearest Neighbors (KNN) algorithm to predict the class of celestial objects based on their attributes. This project utilizes Flask for the web framework, along with HTML, CSS, and JavaScript for the front-end interface.

![Front page](./static/Assets/StellarSense%20Pitch%20PPT%20/1.png)
![Working](./static/Assets/StellarSense%20Pitch%20PPT%20/4.png)
![́́example1](./static/Assets/StellarSense%20Pitch%20PPT%20/6.png)
![example2](./static/Assets/StellarSense%20Pitch%20PPT%20/7.png)

## Features

- **Accurate Predictions**: Classifies celestial objects based on attributes such as Right
  Ascension, Declination, and photometric filters (Ultraviolet, Green, Red, Infrared(I),
  Infrared(Z), and Redshift).
- **Interactive Web Interface**: Allows users to input data and view predictions in real-time.
- **K-Nearest Neighbors Classifier**: Utilizes a KNN model (K=5) trained on a comprehensive dataset
  from the Sloan Digital Sky Survey (SDSS).

## Project Structure

```
StellarSense-main/
├── main.py
├── star_classification.csv
├── static/
│   ├── Clouds-stars.js
│   ├── script.js
│   ├── star.svg
│   └── style.css
└── templates/
    └── index.html
```

- `main.py`: The main Flask application file that sets up the server and the KNN model.
- `star_classification.csv`: The dataset used for training the KNN model.
- `static/`: Directory containing static assets such as JavaScript, CSS, and image files.
- `templates/`: Directory containing HTML templates.

## Setup and Installation

### Prerequisites

- Python 3.x
- Flask
- scikit-learn
- pandas

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/StellarSense.git
   cd StellarSense-main
   ```

2. Create and activate a virtual environment:

   ```bash
   python -m venv venv
   source venv/bin/activate   # On Windows use `venv\Scripts\activate`
   ```

3. Install the required dependencies:

   ```bash
   pip install -r requirements.txt
   ```

4. Run the application:

   ```bash
   python main.py
   ```

5. Open your browser and go to `http://127.0.0.1:5000/` to access the application.

## Usage

1. Navigate to the homepage.
2. Input the required attributes (u, g, r, i, z, redshift) in the form.
3. Submit the form to get the predicted class of the celestial object (QSO, Galaxy, or Star).

