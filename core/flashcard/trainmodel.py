import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.naive_bayes import MultinomialNB
from sklearn.pipeline import Pipeline
import joblib
import os

# Load CSV
csv_path = os.path.join(os.path.dirname(__file__), "flashcard_training_data.csv")
df = pd.read_csv(csv_path)

# Create and train the pipeline
pipeline = Pipeline([
    ('tfidf', TfidfVectorizer()),
    ('clf', MultinomialNB())
])
pipeline.fit(df['text'], df['subject'])

# Save the model
model_path = os.path.join(os.path.dirname(__file__), "subject_classifier.joblib")
joblib.dump(pipeline, model_path)

print(f"Model saved to {model_path}")
