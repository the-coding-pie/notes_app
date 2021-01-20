from rest_framework import serializers
from .models import Note

class NoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Note
        fields = ['id', 'title', 'desc', 'created_at']
    
    def create(self, validated_data):
        note = Note(title=validated_data['title'], desc=validated_data['desc'], author=validated_data['author'])
        note.save()
        return note
