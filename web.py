from flask import Flask, render_template
from flask_sock import Sock
import subprocess

app = Flask(__name__)
sock = Sock(app)

@app.route("/")
def index():
    return render_template("index.html")

@sock.route("/color")
def color(ws):
    while True:
        color = ws.receive()
        # print(color)
        # ws.send(color)
        subprocess.run(["python", "irrp.py","-p", "-g4", "-f", "diall_codes.json", color])


if __name__ == '__main__':
    app.run(host="0.0.0.0", port=8007)