import os
from flask import Flask, render_template, redirect, url_for

# Create the Flask app
app = Flask(__name__)
app.secret_key = os.environ.get("SESSION_SECRET", "valentine_secret_key")

@app.route('/')
def index():
    """Render the main page with the heartfelt message."""
    return render_template('index.html')

@app.route('/proposal')
def proposal():
    """Render the proposal page with the interactive buttons."""
    return render_template('proposal.html')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
