from flask             import Flask, send_file, send_from_directory, redirect, url_for, render_template, request
from flask_restful     import request as request_api
from flask_restful     import Api, Resource
from sklearn.neighbors import KNeighborsClassifier

import pandas as pd
import numpy as np






DATASET_FP = 'star_classification.csv'
ATTRS      = ['u', 'g', 'r', 'i', 'z', 'redshift']
LABEL      = 'class'
K          = 5

app = Flask(__name__)
api = Api(app)





class Backend(Resource):
    def func(self):
        # Process arguments
        args     =  request.args if request.args else request.form # Gets all the args. Remember, URL args are given more priority than BODY args
        u        =  args.get('u')
        g        =  args.get('g')
        r        =  args.get('r')
        i        =  args.get('i')
        z        =  args.get('z')
        redshift =  args.get('redshift')
    
        # Converts strings to floats
        try:
            u        = float(u)
            g        = float(g)
            r        = float(r)
            i        = float(i)
            z        = float(z)
            redshift = float(redshift)
        except ValueError:
            return {'error':'Non-integer values'}
        
        # Gets the prediction
        to_pred    = pd.DataFrame([[u, g, r, i, z, redshift]], columns=ATTRS)
        prediction = model.predict(to_pred)[0]

        # Returns the prediction and the confidence
        return {'prediction':prediction}


    def get(self):     return self.func()
    def post(self):    return self.func()

api.add_resource(Backend, '/backend')



@app.route('/')
def page_index():
    return render_template('index.html')











if __name__ == '__main__':

    # Loading dataset
    print('Reading dataset')
    data = pd.read_csv(DATASET_FP)

    # Making model
    print('Initialising model')
    global model
    model = KNeighborsClassifier(n_neighbors=K)
    model.fit(data[ATTRS], data[LABEL])
    
    # from waitress import serve
    # serve(app, port=80, host='0.0.0.0')
    
    app.run(debug=True, port=80, host='0.0.0.0')
    # app.run()
    







