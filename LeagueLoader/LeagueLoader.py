import kivy
kivy.require('1.0.6') # replace with your current kivy version !

from kivy.app import App
from kivy.uix.label import Label
from kivy.config import Config
from kivy.uix.button import Button
from kivy.uix.widget import Widget
from kivy.uix.boxlayout import BoxLayout

Config.set('graphics', 'fullscreen', 'fake')

class MyApp(App):

    def build(self):
        root = BoxLayout()

        button = Button(text="Exit", background_color=[0, 0, 0, 0], size_hint=(None, None))
        button.bind(on_press=exit)
        return button


if __name__ == '__main__':
    MyApp().run()