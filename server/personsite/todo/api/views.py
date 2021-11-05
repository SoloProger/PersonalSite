from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response
from ..models import Todo
from .serializers import TodoSerializer


class TodoListView(generics.ListAPIView):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer


class TodoDetailView(generics.RetrieveAPIView):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer


# class TodoCreateView(APIView):
#     def post(self, request, pk, format=None):
#         todo = generics.get_object_or_404(Todo, pk=pk)
#         todo.add(request.todo)
#         return Response()