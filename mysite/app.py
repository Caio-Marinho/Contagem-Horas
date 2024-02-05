from flask import Flask, render_template, redirect, url_for, jsonify, make_response,request
from flask_cors import CORS
from datetime import datetime
import requests
import json

app = Flask(__name__)
# CORS usando para Edges(ngrok)
CORS(app, resources={r"/*": {"origins": "https://amused-martin-sacred.ngrok-free.app"}})
app.config['TEMPLATES_AUTO_RELOAD'] = True


@app.route('/')
def index():
    try:
        # Obtém o endereço IP real da requisição usando o cabeçalho X-Forwarded-For
        cabecalho = json.dumps(dict(request.headers), indent=2)
        headers = dict(request.headers)
        rota = request.path
        Data_hora = datetime.now().strftime("%H:%M:%S do Dia %d/%m/%Y")
        ip_endereco = request.headers.get('X-Forwarded-For', request.remote_addr)
        user_agent = request.headers.get('User-Agent')
        sistema = request.headers.get('Sec-Ch-Ua-Platform')
        navegadores = ["Google Chrome","Microsoft Edge","Opera GX","OperaMobile","Samsung Internet","Safari","Android WebView",
                    "Brave"]
        print(cabecalho)
        for navegador in navegadores:
            if navegador in headers['Sec-Ch-Ua']:
                print(f"Esse IP {ip_endereco} exatamente as {Data_hora} fez o acesso é pelo {user_agent} utilizando o navegador "
                    f"{"OperaGXMobile"if navegador == "Android WebView" else navegador} estando no sistema operacional {sistema}")
        return render_template('index.html')
    except:
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
    headers = dict(request.headers)
    navegadores = ["Google Chrome","Microsoft Edge","Opera GX","OperaMobile","Samsung Internet","Safari","Android WebView",
                    "Brave"]
    for navegador in navegadores:
        if navegador in headers['Sec-Ch-Ua']:
            response.headers['Sec-Ch-Ua'] = navegador
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