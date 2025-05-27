from django.urls import path
from .views import AddFlashcardView, GetFlashcardsView

urlpatterns = [
    path('flashcard', AddFlashcardView.as_view()),
    path('get-subject', GetFlashcardsView.as_view()),
]
