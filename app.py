from flask import Flask,render_template

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("home.html")

@app.route("/Local")
def local():
    return render_template('local.html')

@app.route("/Multiplayer")
def multiplayer():
    return render_template("multiplayer.html")

@app.route("/vsAI")
def vsAI():
    return render_template("vsAI.html")

app.run(debug=True)