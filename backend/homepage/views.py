from django.shortcuts import render

from django.shortcuts import render, redirect
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from django.contrib.auth import login, logout, authenticate
from django.contrib import messages

from django.contrib.auth.models import User
from .serializers import UserSerializer, RegistrationSerializer

from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.decorators import api_view


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


class UserViewSet(generics.RetrieveAPIView):
    permission_classes = (IsAuthenticated,)
    queryset = User.objects.all().order_by('-date_joined')

    def get(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        serializer = UserSerializer(queryset, many=True)
        return Response(serializer.data)


def homepage(request):
    return render(request=request,
                  template_name='home.html',
                  context={})


def register(request):
    if request.method == 'POST':
        form = UserCreationForm(request.POST)
        if form.is_valid():
            user = form.save()
            username = form.cleaned_data.get('username')
            messages.success(
                request,
                f"New account created: {username}"
            )
            login(request, user)
            return redirect('homepage')
        else:
            for msg in form.error_messages:
                messages.error(
                    request,
                    f"{msg}: {form.error_messages[msg]}"
                )
            return render(
                request=request,
                template_name='register.html',
                context={'form': form}
            )

    form = UserCreationForm()
    return render(
        request=request,
        template_name='register.html',
        context={'form': form}
    )


def login_request(request):
    if request.method == 'POST':
        form = AuthenticationForm(request=request, data=request.POST)
        if form.is_valid():
            username = form.cleaned_data.get('username')
            password = form.cleaned_data.get('password')
            user = authenticate(username=username, password=password)
            if user is not None:
                login(request, user)
                messages.info(request, f"You are now logged in as {username}")
                return redirect('homepage')
            else:
                messages.error(request, "Invalid username or password.")
        else:
            messages.error(request, "Invalid username or password.")

    form = AuthenticationForm()
    return render(request=request,
                  template_name="login.html",
                  context={"form": form})


def logout_request(request):
    logout(request)
    messages.info(request, "Logout successfully!")
    return redirect("homepage")
