from django.shortcuts import render
from .serializers import NoteSerializer
from .models import Note
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view, permission_classes
from rest_framework import status

@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def notes(request):
    if request.method == 'GET':
        try:
            notes = Note.objects.filter(author=request.user)
            serializer = NoteSerializer(notes, many=True)

            return Response({
                'notes': serializer.data
            })
        except:
            return Response({
                'detail': 'Oops, something went wrong!'
            }, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    elif request.method == 'POST':
        try:
            serializer = NoteSerializer(data=request.data)
            if serializer.is_valid():
                note = serializer.save(author=request.user)
                return Response({
                    'note': serializer.data
                }, status=status.HTTP_201_CREATED)
            return Response({
                'details': serializer.errors
            }, status=status.HTTP_400_BAD_REQUEST)
        except:
            return Response({
                'detail': 'Oops, something went wrong!'
            }, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def notes_remove(request, id):
    if request.method == 'DELETE':
        try:
            if not id:
                return Response({
                    'detail': 'Id field is required'
                }, status=status.HTTP_400_BAD_REQUEST)
            
            note = Note.objects.get(pk=id)

            if note.author != request.user:
                return Response({
                    'detail': 'You are not allowed to do that!'
                }, status=status.HTTP_403_FORBIDDEN)
            else:
                note.delete()
                return Response({
                    'detail': 'Your note has been deleted!'
                })
        except Note.DoesNotExist:
            return Response({
                'detail': 'Object Not Found!'
            }, status=status.HTTP_404_NOT_FOUND) 
        except:
            return Response({
                'detail': 'Oops, something went wrong!'
            }, status=status.HTTP_500_INTERNAL_SERVER_ERROR) 