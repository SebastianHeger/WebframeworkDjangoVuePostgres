from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view, permission_classes

from django.contrib.auth.models import User

from .serializers import UserSerializer, RegistrationSerializer


@api_view(['POST', ])
def registration_view(request):
    if request.method == 'POST':
        serializer = RegistrationSerializer(data=request.data)
        data = dict()
        if serializer.is_valid():
            account = serializer.save()
            data['response'] = 'successfully registered new user.'
            data['email'] = account.email
            data['username'] = account.username
        else:
            data = serializer.errors
        return Response(data)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def user_view(request, username):
    username = request.user
    user = User.objects.get(username=username)
    serializer = UserSerializer(user, many=False)
    return Response(serializer.data)
