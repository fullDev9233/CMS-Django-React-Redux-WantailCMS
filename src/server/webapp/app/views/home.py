from .base import BaseView


class Home(BaseView):
    template_name = 'webapp/index.html'
    slug = 'home'

    def post(self, request):
        if request.is_ajax():
            content = (
                'Name: ' + request.POST.get('name') + '\n'
                'Email: ' + request.POST.get('email') + '\n'
                'Phone number: ' + request.POST.get('phone') + '\n'
                'Message: ' + request.POST.get('message'))
            email = EmailMessage(
                'E-mail from website',
                content,
                to=['jwnwilson@gmail.com'])
            email.send()
            return JsonResponse({'success': True})
        else:
            return HttpResponse(status=405, content='Post request not supported')
