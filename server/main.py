import speech_recognition as sr

# Initialize recognizer
recognizer = sr.Recognizer()

# Start microphone input
with sr.Microphone() as source:
    print("Listening...")
    recognizer.adjust_for_ambient_noise(source)  # Adjust for ambient noise
    audio = recognizer.listen(source)  # Listen to microphone input

# Convert speech to text
try:
    text = recognizer.recognize_google(audio, language="en-US", show_all=False)
    print("You said:", text)
except sr.UnknownValueError:
    print("Could not understand audio")
except sr.RequestError as e:
    print("Error fetching results; {0}".format(e))