import kivy

class MyApp(kivy.App):

    def build(self):
        return Label(text='Hello world')

if __name__ == '__main__':
    MyApp().run()