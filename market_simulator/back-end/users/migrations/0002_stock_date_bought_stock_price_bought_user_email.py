# Generated by Django 4.1 on 2022-09-08 08:27

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='stock',
            name='date_bought',
            field=models.DateTimeField(default=django.utils.timezone.now),
        ),
        migrations.AddField(
            model_name='stock',
            name='price_bought',
            field=models.DecimalField(decimal_places=2, default=0.0, max_digits=6),
        ),
        migrations.AddField(
            model_name='user',
            name='email',
            field=models.EmailField(default='', max_length=254),
        ),
    ]
