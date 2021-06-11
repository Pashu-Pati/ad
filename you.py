#import pytube
#link = "https://www.youtube.com/watch?v=mpjREfvZiDs"
#yt = pytube.YouTube(link)
#stream = yt.streams.first()
#stream.download()

import os,glob
folder_path = '/some/path/to/file'
for filename in glob.glob(os.path.join(folder_path, '*.mp4')):
  with open(filename, 'r') as f:
    text = f.read()
    print (filename)
    print (len(text))
    
##from moviepy.editor import *
##video = VideoFileClip(os.path.join("","","STAGE 3 LESSON 25.mp4"))
##video.audio.write_audiofile(os.path.join("","","movie_sound.mp3"))
##import re
##import pytube
##from pytube import Playlist
##YOUTUBE_STREAM_AUDIO = '140'
##DOWNLOAD_DIR = 'D:\\Downloads'
##
##playlist = Playlist('https://www.youtube.com/playlist?list=PLa35E1GPVzX52DqzgL5dXHQWkSTRzpmlb')
##
##playlist._video_regex = re.compile(r"\"url\":\"(/watch\?v=[\w-]*)")
##
##for url in playlist.video_urls:
##    print(url)
##    yt = pytube.YouTube(url)
##    stream = yt.streams.first()
##    stream.download()


##
##for video in playlist.videos:
##    audioStream = video.streams.get_by_itag(YOUTUBE_STREAM_AUDIO)
##    audioStream.download(output_path=DOWNLOAD_DIR)


##from selenium import webdriver
##from bs4 import BeautifulSoup as BS
##import requests
##cars=[]
##u=''
##a=[]
##URL='https://www.youtube.com/channel/UCG6MixC72AjPbEksE35oPPg/videos'
##
##driver = webdriver.Chrome()
##driver.get(URL)
##time.sleep(20)
##html = driver.page_source
##soup = BS(html, "html.parser")
##videos = soup.find_all("ytd-grid-video-renderer",{"class":"style-scope ytd-grid-renderer"})
##for video in videos:
##   a = video.find("a",{"id":"video-title"})
##   name = link.get_text()
##   link = "https://www.youtube.com/" + a.get("href") 
##   print(name, link)       
##def parse():
##    html = get_html(URL)
##    if (html.status_code) == 200:
##        get_content(html.text)
##        
##    else: print('error')
##    
##parse()

