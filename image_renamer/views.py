import os
from django.conf import settings
from django.contrib import messages
from django.shortcuts import render, redirect

def index(request):
    original_images_dir = os.path.join(settings.MEDIA_ROOT, 'original_images')
    image_files = [f for f in os.listdir(original_images_dir) if f.endswith('.png')]
    return render(request, 'image_renamer/index.html', {'image_files': image_files})

def rename_image(request, image_name):
    original_images_dir = os.path.join(settings.MEDIA_ROOT, 'original_images')
    renamed_images_dir = os.path.join(settings.MEDIA_ROOT, 'renamed_images')

    if request.method == 'POST':
        new_name = request.POST.get('newName')
        original_image_path = os.path.join(original_images_dir, image_name)
        new_image_path = os.path.join(renamed_images_dir, new_name + '.png')

        try:
            os.rename(original_image_path, new_image_path)
            messages.success(request, 'Image renamed successfully!')
        except FileNotFoundError:
            messages.error(request, 'Error: Original image not found!')
        except FileExistsError:
            messages.error(request, 'Error: A file with the new name already exists!')

        return redirect('index')

    return render(request, 'image_renamer/rename_image.html', {'image_file': image_name})


