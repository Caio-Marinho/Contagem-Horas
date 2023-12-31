from flask import Flask, render_template, redirect, url_for, jsonify, make_response
from flask_cors import CORS
from datetime import datetime
import requests

app = Flask(__name__)
# CORS usando para Edges(ngrok)
CORS(app, resources={r"/*": {"origins": "https://amused-martin-sacred.ngrok-free.app"}})
app.config['TEMPLATES_AUTO_RELOAD'] = True


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/python-horas')
def python():
    return render_template('horas-python.html')


# excutando com ajax para exibir hora
# nota somente ter no arquivo js as funçôes da página
@app.route('/horas')
def horas():
    hora = datetime.now().strftime("%H:%M:%S")
    hoje = datetime.today()
    resposta = {'hora': hora, "hoje": hoje}
    response = jsonify(resposta)
    response.headers['Cache-Control'] = 'no-cache, no-store, must-revalidate'
    return response


@app.route('/teste')
def teste_br():
    url = f"https://open.er-api.com/v6/latest/BRL"

    # Faz a solicitação HTTP GET à API
    response = requests.get(url)

    # Verifica se a solicitação foi bem-sucedida (código de resposta 200)
    if response.status_code == 200:
        # Converte a resposta para formato JSON
        data = response.json()

        # Renderiza o template com os dados obtidos
        return data["rates"]

    else:
        # Se a solicitação não for bem-sucedida, exibe o código de status
        return f"A solicitação falhou com o código de status {response.status_code}"


@app.route('/teste/<codigo>')
def teste(codigo):
    url = f"https://open.er-api.com/v6/latest/{codigo.upper()}"

    # se codigo for igual a brl ou BRL vai levar para função teste_br que está na rota teste
    if codigo in ('brl', 'BRL'):
        return redirect(url_for('teste_br'))

    # Faz a solicitação HTTP GET à API
    response = requests.get(url)

    # Verifica se a solicitação foi bem-sucedida (código de resposta 200)
    if response.status_code == 200:
        # Converte a resposta para formato JSON
        data = response.json()

        # Renderiza o template com os dados obtidos
        return data

    else:
        # Se a solicitação não for bem-sucedida, exibe o código de status
        return f"A solicitação falhou com o código de status {response.status_code}"