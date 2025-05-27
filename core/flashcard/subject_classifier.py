import os
import joblib

model_path = os.path.join(os.path.dirname(__file__), "subject_classifier.joblib")
subject_model = joblib.load(model_path)

def infer_subject(text):
    return subject_model.predict([text])[0]
