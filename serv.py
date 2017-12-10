#!/usr/bin/env python

import os
import time
import sys
from flask import Flask, render_template, send_from_directory, jsonify
import pyinotify
from watchdog.observers import Observer
from watchdog.events import FileSystemEventHandler

filechanged = [False]
dir_path = os.path.dirname(os.path.realpath(__file__))
app = Flask(__name__, template_folder = dir_path, static_url_path = dir_path)

class Watcher:
    DIRECTORY_TO_WATCH = dir_path
    def __init__(self):
        self.observer = Observer()
    def run(self):
        event_handler = Handler()
        self.observer.schedule(event_handler, self.DIRECTORY_TO_WATCH, recursive=True)
        self.observer.start()
        try:
            while True:
                time.sleep(5)
        except:
            self.observer.stop()
            print "Error"
        self.observer.join()
class Handler(FileSystemEventHandler):
    @staticmethod
    def on_any_event(event):
        if event.event_type == 'modified':
            mpath = event.src_path
            if mpath.find('/.git') == -1:
                print mpath
                filechanged[0] = True

@app.route('/test')
def test():
  return 'test'

@app.route('/exit')
def exitscript():
    return 'OK'
    sys.exit()

@app.route('/checknewdata')
def checknewdata():
    if filechanged[0]:
        filechanged[0] = False
        return jsonify(
            newdata = True
        )
    else:
        return jsonify(
            newdata = False
        )

@app.route('/<path:path>')
def static_file(path):
    if path.endswith('.html'):
        htmlfile = open(dir_path + "/" + path,"r")
        return htmlfile.read() + '<script defer src="/servfiles/livereload.js"></script>'
    else:
        return send_from_directory(dir_path, path)

if __name__ == '__main__':
    app.run(debug=False, host='127.0.0.1', port=3000, threaded=True)
    Watcher().run()
