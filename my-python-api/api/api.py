# api/api.py

from http.server import BaseHTTPRequestHandler
import json

class handler(BaseHTTPRequestHandler):
    def do_GET(self):
        self.send_response(200)
        self.send_header('Content-type', 'application/json')
        self.end_headers()
        
        # Example data to return
        response = {
            'message': 'Hello, world!',
            'success': True
        }
        
        # Send response
        self.wfile.write(json.dumps(response).encode())
