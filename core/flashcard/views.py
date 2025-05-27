from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Flashcard
from .serializers import FlashcardSerializer
from .subject_classifier import infer_subject
import random

class AddFlashcardView(APIView):
    def post(self, request):
        data = request.data
        subject = infer_subject(data.get("question", ""))
        flashcard = Flashcard.objects.create(
            student_id=data["student_id"],
            question=data["question"],
            answer=data["answer"],
            subject=subject
        )
        return Response({"message": "Flashcard added successfully", "subject": subject}, status=status.HTTP_201_CREATED)

class GetFlashcardsView(APIView):
    def get(self, request):
        student_id = request.GET.get("student_id")
        limit = int(request.GET.get("limit", 5))
        flashcards = Flashcard.objects.filter(student_id=student_id)

        # Group by subject
        subject_groups = {}
        for card in flashcards:
            subject_groups.setdefault(card.subject, []).append(card)

        result = []
        while len(result) < limit and subject_groups:
            for subject in list(subject_groups):
                if subject_groups[subject]:
                    result.append(subject_groups[subject].pop(0))
                    if len(result) == limit:
                        break
                else:
                    del subject_groups[subject]
                    
        serializer = FlashcardSerializer(result, many=True)
        return Response(serializer.data)
