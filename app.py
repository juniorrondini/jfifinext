from flask import Flask, render_template
import random

app = Flask(__name__)

@app.route('/')
def index():
    crazy_phrases = [
        "A mente de Jfifi é um caleidoscópio de caos!",
        "Realidade? Jfifi prefere a insanidade!",
        "Lógica? Jfifi não conhece essa palavra!",
        "Bem-vindo ao universo paralelo de Jfifi!",
        "Aqui, o absurdo é a única constante!"
    ]
    return render_template('index.html', phrases=crazy_phrases)

if __name__ == '__main__':
    app.run(debug=True)

