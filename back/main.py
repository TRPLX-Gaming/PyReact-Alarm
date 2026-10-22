import json 
import time 
import os
import mimetypes
from datetime import datetime
from flask import Flask, jsonify, request, Response, send_from_directory
from flask_cors import CORS
import utils

# init
app = Flask(__name__)
          
# consts
BASE_DIR = os.path.dirname(os.path.abspath(__file__))

static_directory = os.path.normpath(os.path.join(BASE_DIR, '..', 'py-alarm', 'dist/'))
mimetypes.add_type('application/javascript', '.js')
mimetypes.add_type('text/css', '.css')

# frontend rendering
# ----------------------
@app.route('/',methods=['GET','HEAD'])
def serve_frontend():
  # return frontend
    return send_from_directory(static_directory,'index.html')
    
@app.route('/<path:filename>',methods=['GET','HEAD'])
def serve_static_assets(filename):
    file_path = os.path.join(static_directory, filename)
    if os.path.exists(file_path):
        return send_from_directory(static_directory, filename)
    return send_from_directory(static_directory, 'index.html')
    
@app.errorhandler(404)
def serve_frontend_err(e):
  return send_from_directory(static_directory,'index.html')

# ----------------------


# alarm logic - deprecated, logic moved to client

# @app.route('/get-alarms', methods=['GET'])
# def get_alarms():
#   res = utils.read_alarms()
#   return jsonify(response_wrapper(res)),200
  
  
# @app.route('/add-alarm', methods=['POST'])
# def add_alarm():
#   data = request.get_json()
  
#   alarm = data.get('alarm')
#   status = utils.add_alarm(alarm)
#   return jsonify(response_wrapper(status))
  
  
# @app.route('/delete-alarm',methods=['POST'])
# def delete_alarm():
#   data = request.get_json()
  
#   alarm_index = data.get('alarm-index')
#   status = utils.delete_alarm(alarm_index)
#   return jsonify(response_wrapper(status))
  
  
# utils
# def response_wrapper(msg: str):
#   return {
#     'message':msg
#   }
  
if __name__ == '__main__':
  app.run('0.0.0.0',port=6000,debug=True)#,use_reloader=False)
